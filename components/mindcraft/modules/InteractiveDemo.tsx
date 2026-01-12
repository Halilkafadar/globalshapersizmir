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
    // Enhanced responses based on module
    const responses: Record<string, string> = {
      'ai-ethics': `🤖 Ethical Analysis: "${input}"

🔍 Key Considerations:
• Privacy implications: Does this collect personal data?
• Bias detection: Could this discriminate against any groups?
• Fairness assessment: Are outcomes equitable for all users?
• Transparency: Can users understand how decisions are made?
• Accountability: Who is responsible for AI mistakes?

💡 Schwab Insight: In the Intelligent Age, maintaining cognitive sovereignty means actively questioning AI systems rather than blindly trusting them.

🎯 Recommendation: This scenario requires careful consideration of user consent, data protection, and ongoing bias monitoring. Consider implementing human oversight for critical decisions.`,

      'prompt-engineering': `✨ Prompt Enhancement: "${input}"

🔧 Using the PTC Framework:
• Persona: "You are an expert tutor specializing in [subject]"
• Context: "I am a [age/level] student learning [topic]"
• Task: "Please explain [concept] using simple examples"

🎨 Improved Version:
"You are an encouraging AI tutor specializing in ${input}. I am a curious student who learns best through examples and analogies. Please explain ${input} in simple terms, using real-world examples and analogies that a teenager would understand. Format your response with clear headings and bullet points."

💡 Socratic Enhancement: Try asking follow-up questions like:
- "Can you give me an analogy for this concept?"
- "What would happen if we changed this variable?"
- "How does this connect to what I already know?"`,

      'coding-automation': `💻 Automation Solution: "${input}"

🧠 Computational Thinking Breakdown:
1. Problem Definition: What exactly needs to be automated?
2. Pattern Recognition: What repeats in this task?
3. Decomposition: Break into smaller steps
4. Algorithm Design: Create logical sequence
5. Implementation: Code the solution

🐍 Python Pseudocode:
def automate_${input.toLowerCase().replace(/\s+/g, '_')}():
    # Step 1: Identify the pattern
    pattern = detect_pattern("${input}")
    
    # Step 2: Set up automation
    while task_not_complete:
        execute_step(pattern)
        check_progress()
    
    # Step 3: Human creativity focus
    return "Time freed for creative work!"

💡 Liberation Insight: By automating "${input}", you free up [estimated time] to focus on creative problem-solving, relationship building, and innovation!`,

      'ai-art': `🎨 AI Art Creation: "${input}"

🖌️ Human Signature Elements:
• Your unique perspective: What personal experience influences this?
• Cultural context: How does your background shape this vision?
• Emotional intent: What feeling do you want to convey?
• Story elements: What narrative does this tell?

🤖 AI Bicycle Prompts:
Enhanced prompts for "${input}":
1. "Artistic interpretation of ${input}, inspired by [your cultural background], [emotion], digital art, trending on ArtStation"
2. "Personal story about ${input}, [your unique experience], watercolor style, emotional depth"
3. "${input} through the lens of a teenager in [your location], vibrant, hopeful, mixed media"

💡 Human-AI Collaboration: The magic happens when AI handles technical execution while you provide the vision, meaning, and cultural context. Your human signature is irreplaceable!

🎯 Next Steps: Create variations, curate the best, and tell the story behind your choices.`,

      'scientific-research': `🔬 Research Framework: "${input}"

📊 Data-to-Wisdom Pipeline:
1. Raw Data: Collect information about "${input}"
2. Verified Data: Cross-reference with 3+ credible sources
3. Knowledge: Analyze patterns and connections
4. Wisdom: Apply insights to real-world decisions

🕵️ Fact-Check Protocol:
• Primary sources: Find original research
• Authority check: Verify author credentials
• Recency: Is information current?
• Cross-reference: Compare multiple sources
• Bias detection: Identify potential conflicts of interest

🤖 AI Hallucination Check:
Common warning signs for "${input}":
- Overly specific statistics without sources
- Claims that seem too good to be true
- Conflicting information from AI vs. verified sources

💡 Scientific Skepticism: In the Intelligent Age, your ability to verify information is your superpower against misinformation.`,

      'creative-innovation': `💡 Innovation Blueprint: "${input}"

🌍 SDG Connection: How does "${input}" address:
• Quality Education (SDG 4)
• Reduced Inequalities (SDG 10)
• Climate Action (SDG 13)
• Peace & Justice (SDG 16)

🎯 Collective Intelligence Approach:
1. Human Empathy: Understand real user needs
2. AI Analysis: Process large datasets for insights
3. Diverse Perspectives: Include different viewpoints
4. Rapid Prototyping: Test ideas quickly with AI tools
5. Human Values: Ensure ethical impact

🚀 Prototype-to-Scale Path:
Week 1: Define problem with human interviews
Week 2: AI-assisted research and ideation
Week 3: Build minimum viable prototype
Week 4: Test with real users and iterate

💝 Human-AI Partnership: Your creativity + empathy + AI's computational power = Solutions that can change the world!

🎯 Global Impact Potential: This idea could reach [estimated] people and create [positive change] in your community.`
    }
    
    return responses[id] || `🤖 Processing: ${input}\n\n✨ This is an interactive demo showcasing AI capabilities for this module. In production, this would connect to specialized AI services tailored for ${id}!\n\n💡 Try different inputs to see how AI responds to various prompts and scenarios.`
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
