import { 
  Brain, 
  Code, 
  Palette, 
  MessageSquare, 
  Microscope, 
  Sparkles,
  LucideIcon 
} from 'lucide-react'

export interface Module {
  id: string
  title: string
  description: string
  icon: LucideIcon
  gradient: string
  duration: string
  ageRange: string
  topics: string[]
  learningOutcomes: string[]
}

export const modulesData: Module[] = [
  {
    id: 'ai-ethics',
    title: 'AI & Ethics',
    description: 'Explore the moral dimensions of artificial intelligence. Learn to make responsible decisions about AI use and understand its impact on society.',
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500',
    duration: '4 weeks',
    ageRange: '12-17',
    topics: [
      'What is AI?',
      'Bias in AI systems',
      'Privacy and data ethics',
      'AI and human rights',
      'Future of AI in society'
    ],
    learningOutcomes: [
      'Understand fundamental AI concepts',
      'Identify ethical challenges in AI',
      'Apply ethical frameworks to AI scenarios',
      'Develop critical thinking about technology'
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Master the art of communicating with AI. Learn techniques to get better results from AI tools and unlock their full potential.',
    icon: MessageSquare,
    gradient: 'from-purple-500 to-pink-500',
    duration: '3 weeks',
    ageRange: '10-17',
    topics: [
      'Introduction to prompts',
      'Prompt structure and clarity',
      'Advanced techniques',
      'Context and specificity',
      'Real-world applications'
    ],
    learningOutcomes: [
      'Write effective AI prompts',
      'Understand prompt engineering principles',
      'Apply techniques to solve problems',
      'Iterate and improve AI interactions'
    ]
  },
  {
    id: 'coding-automation',
    title: 'Coding & Automation',
    description: 'Build your first programs and automate tasks. Introduction to Python programming with fun, practical projects.',
    icon: Code,
    gradient: 'from-green-500 to-emerald-500',
    duration: '6 weeks',
    ageRange: '11-17',
    topics: [
      'Python basics',
      'Variables and data types',
      'Loops and conditionals',
      'Functions and modules',
      'Real-world automation'
    ],
    learningOutcomes: [
      'Write basic Python programs',
      'Understand programming logic',
      'Create automation scripts',
      'Debug and solve coding problems'
    ]
  },
  {
    id: 'ai-art',
    title: 'AI Art Creation',
    description: 'Unleash your creativity with AI. Create stunning images, explore generative art, and blend technology with imagination.',
    icon: Palette,
    gradient: 'from-orange-500 to-red-500',
    duration: '3 weeks',
    ageRange: '9-17',
    topics: [
      'Text-to-image AI',
      'Art styles and techniques',
      'Prompt crafting for art',
      'Ethical use of AI art',
      'Building a portfolio'
    ],
    learningOutcomes: [
      'Create AI-generated artwork',
      'Understand artistic AI tools',
      'Develop creative prompting skills',
      'Build a digital art portfolio'
    ]
  },
  {
    id: 'scientific-research',
    title: 'Scientific Research Methods',
    description: 'Think like a scientist. Learn research methods, data analysis, and how AI is transforming scientific discovery.',
    icon: Microscope,
    gradient: 'from-indigo-500 to-blue-500',
    duration: '5 weeks',
    ageRange: '13-17',
    topics: [
      'Scientific method',
      'Hypothesis formation',
      'Data collection and analysis',
      'AI in research',
      'Presenting findings'
    ],
    learningOutcomes: [
      'Apply scientific methodology',
      'Design simple experiments',
      'Analyze data effectively',
      'Communicate research findings'
    ]
  },
  {
    id: 'creative-innovation',
    title: 'Creative Innovation',
    description: 'Transform ideas into reality. Design thinking, problem-solving, and innovative approaches to global challenges.',
    icon: Sparkles,
    gradient: 'from-yellow-500 to-orange-500',
    duration: '4 weeks',
    ageRange: '10-17',
    topics: [
      'Design thinking process',
      'Ideation techniques',
      'Prototyping',
      'User-centered design',
      'Innovation showcase'
    ],
    learningOutcomes: [
      'Apply design thinking frameworks',
      'Generate innovative solutions',
      'Create prototypes',
      'Present ideas effectively'
    ]
  }
]
