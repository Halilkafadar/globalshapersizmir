import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { code } = req.body

  if (!code) {
    return res.status(400).json({ error: 'Code is required' })
  }

  try {
    // Use Python execution via our backend
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'
    
    const response = await fetch(`${BACKEND_URL}/api/execute-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code })
    })

    if (!response.ok) {
      const errorData = await response.json()
      return res.status(response.status).json({ 
        error: errorData.error || 'Failed to execute code' 
      })
    }

    const data = await response.json()
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error executing code:', error)
    return res.status(500).json({ 
      error: 'Failed to execute code. Please check your code and try again.' 
    })
  }
}
