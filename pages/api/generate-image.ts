import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prompt } = req.body

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' })
  }

  try {
    const HF_TOKEN = process.env.HUGGINGFACE_API_KEY
    
    if (!HF_TOKEN) {
      console.error('Hugging Face API key not found, falling back to Pollinations.AI')
      const encodedPrompt = encodeURIComponent(prompt)
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`
      return res.status(200).json({ imageUrl })
    }

    // Enhanced prompt for better results
    const enhancedPrompt = `${prompt}, high quality, detailed, professional photography, 8k resolution`

    console.log('Generating image with prompt:', enhancedPrompt)

    const response = await fetch(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: enhancedPrompt,
          parameters: {
            negative_prompt: "blurry, low quality, distorted, ugly, bad anatomy",
            num_inference_steps: 50,
            guidance_scale: 7.5,
          }
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Hugging Face API error:', response.status, errorText)
      
      if (response.status === 503) {
        return res.status(503).json({ 
          error: 'Model is loading (first time may take 20-30 seconds). Please try again in a moment.' 
        })
      }
      
      // Fallback to Pollinations.AI
      console.log('Falling back to Pollinations.AI')
      const encodedPrompt = encodeURIComponent(prompt)
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`
      return res.status(200).json({ imageUrl })
    }

    // Convert response to base64
    const imageBlob = await response.blob()
    const arrayBuffer = await imageBlob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const base64Image = buffer.toString('base64')
    const imageUrl = `data:image/png;base64,${base64Image}`

    console.log('Image generated successfully')
    return res.status(200).json({ imageUrl })
    
  } catch (error) {
    console.error('Error generating image:', error)
    
    // Final fallback to Pollinations.AI
    try {
      const encodedPrompt = encodeURIComponent(prompt)
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`
      return res.status(200).json({ imageUrl })
    } catch (fallbackError) {
      return res.status(500).json({ 
        error: 'Failed to generate image. Please try again.' 
      })
    }
  }
}
