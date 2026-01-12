import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react'

interface ModuleQuizProps {
  moduleId: string
}

interface Question {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export default function ModuleQuiz({ moduleId }: ModuleQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const quizzes: Record<string, Question[]> = {
    'ai-ethics': [
      {
        question: 'What is algorithmic bias?',
        options: [
          'When AI makes mistakes',
          'When AI systems produce unfair outcomes due to biased training data',
          'When algorithms are too complex',
          'When AI is too expensive'
        ],
        correct: 1,
        explanation: 'Algorithmic bias occurs when AI systems produce systematically unfair outcomes, often due to biased training data or flawed assumptions.'
      },
      {
        question: 'In Klaus Schwab\'s "Intelligent Age," what is cognitive sovereignty?',
        options: [
          'Being smarter than AI',
          'Controlling AI companies',
          'Maintaining human agency in decision-making with AI',
          'Avoiding AI completely'
        ],
        correct: 2,
        explanation: 'Cognitive sovereignty means maintaining your ability to think independently and make decisions even when using AI tools.'
      },
      {
        question: 'What\'s the difference between being a "Navigator" vs a "Slave" to AI?',
        options: [
          'Navigators use expensive AI, slaves use free AI',
          'Navigators direct AI tools, slaves depend on AI decisions',
          'Navigators build AI, slaves just use it',
          'There is no difference'
        ],
        correct: 1,
        explanation: 'Navigators maintain control and direct AI as a tool, while slaves become dependent on AI for thinking and decision-making.'
      }
    ],
    'prompt-engineering': [
      {
        question: 'What are the three components of the PTC framework?',
        options: [
          'Prompt, Text, Code',
          'Person, Time, Context',
          'Persona, Context, Task',
          'Purpose, Topic, Conclusion'
        ],
        correct: 2,
        explanation: 'The PTC framework stands for Persona (who the AI should be), Context (the situation), and Task (what you want accomplished).'
      },
      {
        question: 'What makes a good AI prompt according to Socratic dialogue principles?',
        options: [
          'Being as brief as possible',
          'Asking questions that lead to deeper thinking',
          'Using complex vocabulary',
          'Giving all the answers upfront'
        ],
        correct: 1,
        explanation: 'Like Socrates, good prompts ask questions that guide AI toward deeper analysis and better reasoning.'
      }
    ],
    'coding-automation': [
      {
        question: 'What is computational thinking?',
        options: [
          'Thinking like a computer',
          'Breaking problems into logical steps machines can help solve',
          'Only thinking about coding',
          'Avoiding human creativity'
        ],
        correct: 1,
        explanation: 'Computational thinking means breaking down complex problems into logical steps that both humans and computers can understand and solve together.'
      },
      {
        question: 'How does AI remove "drudgery" in programming?',
        options: [
          'By making programming unnecessary',
          'By handling repetitive tasks so humans can focus on creativity',
          'By making everything automatic',
          'By replacing all programmers'
        ],
        correct: 1,
        explanation: 'AI handles repetitive coding tasks, freeing humans to focus on creative problem-solving, design, and innovation.'
      }
    ],
    'ai-art': [
      {
        question: 'What is the "human signature" in AI art?',
        options: [
          'Signing your name on AI artwork',
          'Your unique perspective and experiences that give meaning to AI creations',
          'Using only human-made tools',
          'Avoiding AI completely'
        ],
        correct: 1,
        explanation: 'Your human signature is your unique perspective, experiences, and cultural context that gives meaning and purpose to AI-generated art.'
      },
      {
        question: 'How is AI a "bicycle for the mind" in art creation?',
        options: [
          'It replaces human creativity',
          'It amplifies human creativity without replacing human vision',
          'It makes art faster',
          'It only helps with technical skills'
        ],
        correct: 1,
        explanation: 'Like a bicycle amplifies your ability to move without replacing your legs, AI amplifies creativity without replacing human vision and meaning-making.'
      }
    ],
    'scientific-research': [
      {
        question: 'What is the "data-to-wisdom" pipeline?',
        options: [
          'Raw data → verified data → knowledge → wisdom',
          'Data → computer → answer → truth',
          'Information → AI → result → fact',
          'Research → analysis → conclusion → publication'
        ],
        correct: 0,
        explanation: 'The pipeline moves from raw information to verified data, then meaningful knowledge, and finally actionable wisdom through human judgment.'
      },
      {
        question: 'What is an AI hallucination?',
        options: [
          'When AI becomes self-aware',
          'When AI generates plausible-sounding but false information',
          'When AI refuses to answer',
          'When AI makes typos'
        ],
        correct: 1,
        explanation: 'AI hallucinations are when AI confidently presents false information that sounds plausible but isn\'t actually true.'
      }
    ],
    'creative-innovation': [
      {
        question: 'What is collective intelligence?',
        options: [
          'Everyone thinking the same way',
          'AI replacing human teams',
          'Diverse human perspectives combined with AI analytical power',
          'Only using group decisions'
        ],
        correct: 2,
        explanation: 'Collective intelligence combines diverse human creativity and empathy with AI\'s computational power to solve complex problems.'
      },
      {
        question: 'How do the UN Sustainable Development Goals relate to innovation?',
        options: [
          'They limit what you can innovate',
          'They provide a framework for meaningful global impact',
          'They only apply to governments',
          'They\'re not relevant to young innovators'
        ],
        correct: 1,
        explanation: 'SDGs provide a framework for channeling human-AI partnerships toward solving humanity\'s biggest challenges.'
      }
    ]
  }

  const questions = quizzes[moduleId] || quizzes['ai-ethics']

  const handleAnswer = (index: number) => {
    if (answered) return
    
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswered(false)
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="bg-white rounded-2xl p-12 shadow-xl">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-mindcraft-blue to-mindcraft-purple flex items-center justify-center">
            <span className="text-4xl text-white font-bold">{percentage}%</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl text-gray-600 mb-8">
            You scored {score} out of {questions.length}
          </p>

          <div className="mb-8">
            {percentage >= 80 ? (
              <p className="text-green-600 font-semibold">🎉 Excellent work! You've mastered this topic!</p>
            ) : percentage >= 60 ? (
              <p className="text-blue-600 font-semibold">👍 Good job! Review the material for better understanding.</p>
            ) : (
              <p className="text-orange-600 font-semibold">📚 Keep learning! Review the module content and try again.</p>
            )}
          </div>

          <button onClick={handleRestart} className="btn-primary flex items-center gap-2 mx-auto">
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
        </div>
      </motion.div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-mindcraft-blue to-mindcraft-purple transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h3 className="text-2xl font-bold mb-6">{currentQ.question}</h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(index)}
              whileHover={answered ? {} : { scale: 1.02 }}
              whileTap={answered ? {} : { scale: 0.98 }}
              disabled={answered}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                answered
                  ? index === currentQ.correct
                    ? 'border-green-500 bg-green-50'
                    : index === selectedAnswer
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-gray-50'
                  : 'border-gray-200 hover:border-mindcraft-purple hover:bg-purple-50'
              } ${answered && 'cursor-not-allowed'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {answered && (
                  <span>
                    {index === currentQ.correct ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : index === selectedAnswer ? (
                      <XCircle className="w-6 h-6 text-red-600" />
                    ) : null}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Explanation */}
        {answered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200"
          >
            <p className="text-sm font-semibold text-blue-900 mb-1">💡 Explanation</p>
            <p className="text-sm text-blue-800">{currentQ.explanation}</p>
          </motion.div>
        )}

        {/* Next Button */}
        {answered && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="btn-primary w-full"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </motion.button>
        )}
      </div>
    </div>
  )
}
