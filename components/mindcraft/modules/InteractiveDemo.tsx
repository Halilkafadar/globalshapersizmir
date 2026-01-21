import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, Wand2, Image as ImageIcon, Brain, Eye, CheckCircle, 
  AlertTriangle, Target, Sliders, Play, Lightbulb, Search,
  MessageSquare, Code, Palette, Microscope, Users, ArrowRight
} from 'lucide-react'

interface InteractiveDemoProps {
  moduleId: string
}

interface DeepfakeCase {
  id: string
  title: string
  content: string
  isDeepfake: boolean
  explanation: string
}

interface PromptCriteria {
  clarity: number
  context: number
  constraints: number
}

export default function InteractiveDemo({ moduleId }: InteractiveDemoProps) {
  // General states
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  
  // AI Ethics states
  const [selectedCase, setSelectedCase] = useState<DeepfakeCase | null>(null)
  const [ethicsAnswer, setEthicsAnswer] = useState('')
  const [showEthicsResult, setShowEthicsResult] = useState(false)
  
  // Prompt Engineering states
  const [userPrompt, setUserPrompt] = useState('')
  const [promptFeedback, setPromptFeedback] = useState<PromptCriteria>({ clarity: 0, context: 0, constraints: 0 })
  const [improvedPrompt, setImprovedPrompt] = useState('')
  
  // Coding states
  const [codingDecision, setCodingDecision] = useState('')
  const [systemDesign, setSystemDesign] = useState<string[]>([])
  
  // Art states
  const [artSlider, setArtSlider] = useState(50)
  const [artDescription, setArtDescription] = useState('')
  
  // Research states
  const [researchQuery, setResearchQuery] = useState('')
  const [researchSources, setResearchSources] = useState<string[]>([])
  const [researchVerified, setResearchVerified] = useState(false)

  // Demo data
  const deepfakeCases: DeepfakeCase[] = [
    {
      id: 'case1',
      title: 'CEO Resignation Video',
      content: 'A video of a tech company CEO announcing their resignation due to a scandal that broke yesterday.',
      isDeepfake: true,
      explanation: 'Red flags: Unnatural lip sync, inconsistent lighting on face, the "scandal" was fabricated. This deepfake was designed to manipulate stock prices.'
    },
    {
      id: 'case2', 
      title: 'Climate Activist Speech',
      content: 'A passionate speech by a young climate activist at what appears to be a major environmental summit.',
      isDeepfake: false,
      explanation: 'This is authentic. Verified by cross-referencing with official summit footage, consistent audio quality, and natural facial expressions.'
    },
    {
      id: 'case3',
      title: 'Political Statement',
      content: 'A politician making controversial statements that contradict their established policy positions.',
      isDeepfake: true,
      explanation: 'Digital artifacts around mouth area, inconsistent background blur, and timing coincides with opponent\'s campaign ads. Classic political deepfake.'
    }
  ]

  const evaluatePrompt = (prompt: string): PromptCriteria => {
    const words = prompt.split(' ').length
    const hasPersona = /you are|act as|as a/i.test(prompt)
    const hasContext = /context|situation|scenario|background/i.test(prompt)
    const hasTask = /explain|create|write|analyze|help|make/i.test(prompt)
    const hasSpecifics = /specific|detailed|step by step|example/i.test(prompt)
    
    return {
      clarity: Math.min(100, (words * 2) + (hasTask ? 30 : 0) + (hasSpecifics ? 20 : 0)),
      context: Math.min(100, (hasContext ? 50 : 0) + (words > 15 ? 30 : 0) + (hasPersona ? 20 : 0)),
      constraints: Math.min(100, (hasSpecifics ? 40 : 0) + (prompt.length > 100 ? 30 : 0) + (hasPersona ? 30 : 0))
    }
  }

  const generateImprovedPrompt = (original: string): string => {
    const topic = original.toLowerCase()
    return `You are a Patient Navigator, an expert tutor who helps students master complex concepts through clear explanations and engaging examples.\\n\\nContext: I am a curious teenager who learns best through real-world applications and analogies. I want to deeply understand ${topic}, not just memorize facts.\\n\\nTask: Please explain ${topic} using:\\n1. A relatable analogy from daily life\\n2. A specific example I can try myself\\n3. Three key insights that will help me think like an expert\\n4. One follow-up question to deepen my understanding\\n\\nFormat: Use clear headings, bullet points, and encourage me to ask questions.`
  }

  // Render different interactive elements based on module
  const renderInteractiveElement = () => {
    switch (moduleId) {
      case 'ai-ethics':
        return renderCriticalAudit()
      case 'prompt-engineering':
        return renderPromptArena()
      case 'coding-automation':
        return renderAutomotiveChallenge()
      case 'ai-art-creation':
        return renderHumanSignature()
      case 'scientific-research':
        return renderDataDiscovery()
      case 'creative-innovation':
        return renderImpactSimulator()
      default:
        return renderDefaultDemo()
    }
  }

  const renderCriticalAudit = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="w-6 h-6 text-mindcraft-purple" />
        <h2 className="text-2xl font-bold">Critical Audit: Deepfake Detective</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Test your ability to detect AI-generated content and algorithmic bias. As a Navigator, you must maintain cognitive sovereignty.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {deepfakeCases.map((case_) => (
          <motion.div
            key={case_.id}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedCase?.id === case_.id 
                ? 'border-mindcraft-purple bg-purple-50' 
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => setSelectedCase(case_)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="font-semibold mb-2">{case_.title}</h3>
            <p className="text-sm text-gray-600">{case_.content}</p>
          </motion.div>
        ))}
      </div>

      {selectedCase && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl border-2 border-purple-200"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Analysis Challenge
          </h3>
          <p className="mb-4">Is this content authentic or AI-generated? What clues led to your decision?</p>
          
          <textarea
            value={ethicsAnswer}
            onChange={(e) => setEthicsAnswer(e.target.value)}
            placeholder="Explain your reasoning..."
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-mindcraft-purple focus:outline-none"
            rows={3}
          />
          
          <button
            onClick={() => setShowEthicsResult(true)}
            className="btn-primary mt-4 flex items-center gap-2"
            disabled={!ethicsAnswer.trim()}
          >
            <CheckCircle className="w-5 h-5" />
            Reveal Analysis
          </button>

          <AnimatePresence>
            {showEthicsResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg"
              >
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  {selectedCase.isDeepfake ? (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {selectedCase.isDeepfake ? 'Deepfake Detected' : 'Authentic Content'}
                </h4>
                <p className="text-gray-700">{selectedCase.explanation}</p>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Navigator Skill Unlocked:</p>
                  <p className="text-sm text-blue-700">You\\'re developing critical analysis skills essential for cognitive sovereignty in the AI age.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )

  const renderPromptArena = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-6 h-6 text-mindcraft-purple" />
        <h2 className="text-2xl font-bold">Prompt Practice Arena</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Master the art of Synergistic Dialogue. Use the PTC Framework to transform from passive user to active Navigator.
      </p>

      <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
        <h3 className="font-semibold mb-4">Your Prompt</h3>
        <textarea
          value={userPrompt}
          onChange={(e) => {
            setUserPrompt(e.target.value)
            setPromptFeedback(evaluatePrompt(e.target.value))
          }}
          placeholder="Enter your prompt here..."
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-mindcraft-purple focus:outline-none"
          rows={4}
        />
        
        {userPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 grid grid-cols-3 gap-4"
          >
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                promptFeedback.clarity > 70 ? 'text-green-500' : 
                promptFeedback.clarity > 40 ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {promptFeedback.clarity}%
              </div>
              <div className="text-sm text-gray-600">Clarity</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                promptFeedback.context > 70 ? 'text-green-500' : 
                promptFeedback.context > 40 ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {promptFeedback.context}%
              </div>
              <div className="text-sm text-gray-600">Context</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                promptFeedback.constraints > 70 ? 'text-green-500' : 
                promptFeedback.constraints > 40 ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {promptFeedback.constraints}%
              </div>
              <div className="text-sm text-gray-600">Constraints</div>
            </div>
          </motion.div>
        )}
        
        <button
          onClick={() => setImprovedPrompt(generateImprovedPrompt(userPrompt))}
          className="btn-primary mt-4 w-full"
          disabled={!userPrompt.trim()}
        >
          <Wand2 className="w-5 h-5 mr-2" />
          Generate Navigator-Level Prompt
        </button>
        
        {improvedPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg"
          >
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-mindcraft-purple" />
              Enhanced Prompt (Navigator Level)
            </h4>
            <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-white p-3 rounded border">
              {improvedPrompt}
            </pre>
            <div className="mt-3 p-2 bg-green-100 rounded">
              <p className="text-sm font-medium text-green-900">Sparring Partner Achievement:</p>
              <p className="text-sm text-green-700">You\\'ve transformed from passive prompt user to active AI Navigator!</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )

  const renderAutomotiveChallenge = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-mindcraft-purple" />
        <h2 className="text-2xl font-bold">Automotive Challenge: Systems Architect</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Guide an AI agent through logical system design. Think like an Architect, not just a coder.
      </p>

      <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
        <h3 className="font-semibold mb-4">Scenario: Smart Traffic Management System</h3>
        <p className="mb-4 text-gray-700">
          Your city needs an AI system to reduce traffic congestion. You must design the computational thinking approach.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-2">Step {currentStep + 1}: {[
              'Problem Decomposition',
              'Pattern Recognition', 
              'Algorithm Design',
              'Human Validation'
            ][currentStep]}</h4>
            
            {currentStep === 0 && (
              <div>
                <p className="mb-3">Break the traffic problem into smaller components:</p>
                <textarea
                  value={codingDecision}
                  onChange={(e) => setCodingDecision(e.target.value)}
                  placeholder="What are the core components? (e.g., traffic sensors, timing algorithms...)"
                  className="w-full p-3 border border-gray-300 rounded"
                  rows={3}
                />
              </div>
            )}
            
            {currentStep === 1 && (
              <div>
                <p className="mb-3">Identify patterns in traffic flow:</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Rush Hour Peaks', 'School Zone Times', 'Event Traffic', 'Weather Impact'].map((pattern) => (
                    <button
                      key={pattern}
                      onClick={() => {
                        if (!systemDesign.includes(pattern)) {
                          setSystemDesign([...systemDesign, pattern])
                        }
                      }}
                      className={`p-2 rounded border text-sm ${
                        systemDesign.includes(pattern)
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {pattern}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div>
                <p className="mb-3">Design the algorithm logic:</p>
                <select
                  value={codingDecision}
                  onChange={(e) => setCodingDecision(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded"
                >
                  <option value="">Choose your approach...</option>
                  <option value="reactive">Reactive: Respond to current conditions</option>
                  <option value="predictive">Predictive: Anticipate future patterns</option>
                  <option value="adaptive">Adaptive: Learn from historical data</option>
                  <option value="hybrid">Hybrid: Combine all approaches</option>
                </select>
              </div>
            )}
            
            {currentStep === 3 && (
              <div>
                <p className="mb-3">How will humans validate AI decisions?</p>
                <textarea
                  value={codingDecision}
                  onChange={(e) => setCodingDecision(e.target.value)}
                  placeholder="What human oversight is needed? When should humans override the AI?"
                  className="w-full p-3 border border-gray-300 rounded"
                  rows={3}
                />
              </div>
            )}
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              className="btn-primary px-4 py-2"
              disabled={currentStep === 3 || !codingDecision}
            >
              {currentStep === 3 ? 'Complete' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          {currentStep === 3 && codingDecision && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg"
            >
              <h4 className="font-semibold mb-2">Systems Architect Achievement Unlocked!</h4>
              <p className="text-sm text-gray-700">You've demonstrated computational thinking combined with human wisdom - the hallmark of a true Navigator in the Intelligent Age.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )

  const renderHumanSignature = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Palette className="w-6 h-6 text-mindcraft-purple" />
        <h2 className="text-2xl font-bold">Human Signature: Art Captain</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Demonstrate the transition from raw AI output to human-refined authenticity.
      </p>

      <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
        <h3 className="font-semibold mb-4">Your Art Vision</h3>
        <textarea
          value={artDescription}
          onChange={(e) => setArtDescription(e.target.value)}
          placeholder="Describe an artwork that represents your community, culture, or personal story..."
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-mindcraft-purple focus:outline-none"
          rows={3}
        />
        
        {artDescription && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6"
          >
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Sliders className="w-5 h-5" />
              Human-AI Collaboration Balance
            </h4>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Raw AI</span>
                <span>Human-Refined</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={artSlider}
                onChange={(e) => setArtSlider(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2">
                <span className="text-lg font-semibold text-mindcraft-purple">{artSlider}% Human Input</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-900 mb-2">Raw AI Output (0-30%)</h5>
                <p className="text-sm text-red-700">
                  "{artDescription}" digital art, 4k, trending on artstation, highly detailed, photorealistic
                </p>
                <div className="mt-2 text-xs text-red-600">
                  ❌ No cultural context, generic style, lacks personal meaning
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">Human-Refined Art (70-100%)</h5>
                <p className="text-sm text-green-700">
                  "{artDescription}" infused with [your cultural heritage], expressing [personal emotion], 
                  using [meaningful color palette], telling the story of [your unique perspective], 
                  mixed media combining digital and traditional elements
                </p>
                <div className="mt-2 text-xs text-green-600">
                  ✅ Personal narrative, cultural authenticity, emotional depth
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg">
              <h5 className="font-semibold mb-2">Your Human Signature Elements:</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Personal Experience: How has your life shaped this vision?</li>
                <li>• Cultural Context: What traditions or values influence this art?</li>
                <li>• Emotional Intent: What feeling do you want viewers to experience?</li>
                <li>• Unique Perspective: What makes your viewpoint irreplaceable?</li>
              </ul>
              {artSlider > 70 && (
                <div className="mt-3 p-2 bg-orange-100 rounded">
                  <p className="text-sm font-medium text-orange-900">Art Captain Status Achieved!</p>
                  <p className="text-sm text-orange-700">You understand that AI is your creative amplifier, not your replacement.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )

  const renderDataDiscovery = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Microscope className="w-6 h-6 text-mindcraft-purple" />
        <h2 className="text-2xl font-bold">Data Discovery: Wisdom Navigator</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Transform raw information into verified knowledge using scientific methodology.
      </p>

      <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
        <h3 className="font-semibold mb-4">Research Challenge</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Enter a claim to fact-check:</label>
            <input
              type="text"
              value={researchQuery}
              onChange={(e) => setResearchQuery(e.target.value)}
              placeholder="e.g., 'AI will replace 50% of jobs by 2030'"
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-mindcraft-purple focus:outline-none"
            />
          </div>
          
          {researchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <h4 className="font-semibold">Source Verification Checklist:</h4>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Primary Research Papers',
                  'Government Statistics', 
                  'Expert Interviews',
                  'Peer-Reviewed Studies',
                  'Official Organization Reports',
                  'Cross-Referenced Data'
                ].map((source) => (
                  <button
                    key={source}
                    onClick={() => {
                      if (!researchSources.includes(source)) {
                        setResearchSources([...researchSources, source])
                      }
                    }}
                    className={`p-2 rounded border text-sm ${
                      researchSources.includes(source)
                        ? 'bg-blue-100 border-blue-500 text-blue-700'
                        : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-900 mb-2">🔍 AI Hallucination Warning Signs:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Overly specific statistics without sources</li>
                  <li>• Claims that seem too good/bad to be true</li>
                  <li>• Information that conflicts with verified sources</li>
                  <li>• Lack of recent publication dates</li>
                </ul>
              </div>
              
              {researchSources.length >= 3 && (
                <button
                  onClick={() => setResearchVerified(true)}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Complete Fact-Check Analysis
                </button>
              )}
              
              {researchVerified && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg"
                >
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Data-to-Wisdom Pipeline Complete
                  </h5>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>📊 <strong>Raw Data:</strong> Claim identified and gathered</div>
                    <div>✅ <strong>Verified Data:</strong> {researchSources.length} credible sources checked</div>
                    <div>🧠 <strong>Knowledge:</strong> Patterns and contradictions analyzed</div>
                    <div>💡 <strong>Wisdom:</strong> Actionable insights ready for decision-making</div>
                  </div>
                  <div className="mt-3 p-2 bg-green-100 rounded">
                    <p className="text-sm font-medium text-green-900">Wisdom Navigator Achievement!</p>
                    <p className="text-sm text-green-700">You've mastered the scientific skepticism needed to navigate the Intelligent Age.</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )

  const renderImpactSimulator = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-mindcraft-purple" />
        <h2 className="text-2xl font-bold">Impact Simulator: Global Shaper</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Harness collective intelligence to address UN Sustainable Development Goals.
      </p>

      <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
        <h3 className="font-semibold mb-4">Choose Your SDG Challenge:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { id: 'education', title: 'Quality Education (SDG 4)', icon: '🎓', color: 'blue' },
            { id: 'inequality', title: 'Reduced Inequalities (SDG 10)', icon: '⚖️', color: 'purple' },
            { id: 'climate', title: 'Climate Action (SDG 13)', icon: '🌍', color: 'green' },
            { id: 'peace', title: 'Peace & Justice (SDG 16)', icon: '🕊️', color: 'indigo' }
          ].map((sdg) => (
            <motion.button
              key={sdg.id}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                codingDecision === sdg.id
                  ? 'border-mindcraft-purple bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setCodingDecision(sdg.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-2xl mb-2">{sdg.icon}</div>
              <div className="font-semibold">{sdg.title}</div>
            </motion.button>
          ))}
        </div>
        
        {codingDecision && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h4 className="font-semibold mb-3">Collective Intelligence Framework:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <strong>Human Empathy:</strong> Understanding real user needs
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <strong>AI Analysis:</strong> Processing large datasets for insights
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <strong>Diverse Perspectives:</strong> Including different viewpoints
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <strong>Rapid Prototyping:</strong> Testing ideas quickly with AI tools
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <strong>Human Values:</strong> Ensuring ethical impact
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    <strong>Global Scale:</strong> Reaching communities worldwide
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">💡 Your Solution Prototype:</h4>
              <p className="text-sm text-yellow-700 mb-3">
                In the space below, describe how you would combine human creativity + empathy with AI's computational power to address your chosen SDG:
              </p>
              <textarea
                placeholder="Example: An AI-powered platform that connects local educators with global experts, using human stories to build empathy while AI analyzes learning patterns to optimize educational outcomes..."
                className="w-full p-3 border border-yellow-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                <div className="text-2xl font-bold text-green-600">1M+</div>
                <div className="text-sm text-gray-600">Potential Reach</div>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                <div className="text-2xl font-bold text-blue-600">75%</div>
                <div className="text-sm text-gray-600">Human Input</div>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                <div className="text-2xl font-bold text-purple-600">25%</div>
                <div className="text-sm text-gray-600">AI Amplification</div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">🌍 Global Shaper Mindset Activated!</h4>
              <p className="text-sm text-gray-700">
                You're thinking beyond individual success to collective impact. This human-AI partnership approach 
                could be the key to solving humanity's greatest challenges.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )

  const renderDefaultDemo = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-mindcraft-purple" />
          <h2 className="text-2xl font-bold">Interactive Demo</h2>
        </div>
        <p className="text-gray-600">Interactive demo content would be customized for this module.</p>
      </div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto">
      {renderInteractiveElement()}
      
      {/* Universal Pro Tips */}
      <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-orange-200">
        <h3 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" />
          Navigator Mindset Tips
        </h3>
        <ul className="text-sm text-orange-800 space-y-1">
          <li>• Maintain cognitive sovereignty - think critically about AI outputs</li>
          <li>• Use AI as a sparring partner, not a replacement for human judgment</li>
          <li>• Focus on developing uniquely human skills: empathy, creativity, ethics</li>
          <li>• Always verify AI-generated information through multiple sources</li>
        </ul>
      </div>
    </div>
  )
}
