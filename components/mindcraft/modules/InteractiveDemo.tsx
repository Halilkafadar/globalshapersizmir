import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Wand2, Image as ImageIcon } from 'lucide-react'

interface InteractiveDemoProps {
  moduleId: string
}

export default function InteractiveDemo({ moduleId }: InteractiveDemoProps) {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setResult(getDemoResult(moduleId, prompt))
      setIsLoading(false)
    }, 1500)
  }

  const getDemoResult = (id: string, input: string) => {
    // Mock responses based on module
    const responses: Record<string, string> = {
      'ai-ethics': `Ethical Analysis: "${input}"\n\nKey Considerations:\n• Privacy implications\n• Bias detection\n• Fairness assessment\n• Societal impact\n\nRecommendation: This scenario requires careful consideration of user consent and data protection.`,
      'prompt-engineering': `Improved Prompt: "${input}"\n\nEnhancement Suggestions:\n• Add specific context\n• Define desired format\n• Include constraints\n• Specify tone and style\n\nOptimized Version: "${input} Please provide a detailed response in bullet points, focusing on practical examples suitable for beginners."`,
      'ai-art': `🎨 Generating art with prompt: "${input}"\n\nSuggested enhancements:\n• "Vibrant, ${input}, digital art, trending on ArtStation"\n• "Photorealistic ${input}, 8k resolution, studio lighting"\n• "Watercolor painting of ${input}, soft pastels, dreamy atmosphere"\n\n[Image would appear here in production]`,
      'coding-automation': `# Python Code for: ${input}\n\ndef solve_task():\n    # Automated solution\n    result = "${input}"\n    print(f"Processing: {result}")\n    return True\n\nsolve_task()\n\n# This code demonstrates basic automation principles!`,
      'scientific-research': `Research Framework for: "${input}"\n\n1. Hypothesis: [Your hypothesis here]\n2. Variables: Independent, Dependent, Control\n3. Methodology: Data collection approach\n4. Expected Outcomes: Predicted results\n5. AI Tools: Recommended analysis platforms\n\nNext Steps: Design your experiment protocol.`,
      'creative-innovation': `Innovation Blueprint: "${input}"\n\n💡 Empathize: Understand user needs\n🎯 Define: Clarify the problem\n🌟 Ideate: Brainstorm solutions\n🔨 Prototype: Build quick mockup\n✅ Test: Get feedback and iterate\n\nYour idea has potential! Let's prototype it.`
    }
    
    return responses[id] || `Processing: ${input}\n\nThis is an interactive demo. In production, this would connect to actual AI services!`
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-mindcraft-purple" />
          <h2 className="text-2xl font-bold">Interactive Demo</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Your Input
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt or question here..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mindcraft-purple focus:outline-none transition-colors resize-none"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Try It Now
              </>
            )}
          </button>
        </form>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-gradient-to-br from-mindcraft-blue/10 to-mindcraft-purple/10 rounded-xl border-2 border-mindcraft-purple/20"
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-mindcraft-purple" />
              Result
            </h3>
            <pre className="whitespace-pre-wrap font-sans text-gray-700">
              {result}
            </pre>
          </motion.div>
        )}
      </div>

      {/* Tips */}
      <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
        <h3 className="font-semibold text-yellow-900 mb-2">💡 Pro Tips</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Be specific and clear in your input</li>
          <li>• Experiment with different phrasings</li>
          <li>• Think about what makes a good prompt</li>
          <li>• Learn from the AI's responses</li>
        </ul>
      </div>
    </div>
  )
}
