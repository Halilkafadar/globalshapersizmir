import {
  Shield,
  MessageSquare,
  Settings,
  Heart,
  Compass,
  LucideIcon
} from 'lucide-react'

export interface Module {
  id: string
  title: string
  description: string
  hook: string
  schwabInsight: string
  coreContent: string[]
  interactiveElement: string
  mindcraftChallenge: string
  icon: LucideIcon
  gradient: string
  duration: string
  ageRange: string
  topics: string[]
  learningOutcomes: string[]
}

export const modulesData: Module[] = [
  {
    id: 'active-ethics',
    title: 'Active Ethics',
    description: 'Building a cognitive shield against algorithmic manipulation. In a world where algorithms shape our reality, understanding AI ethics isn\'t just smart—it\'s survival.',
    hook: 'What if your phone\'s AI started making decisions about who gets hired, who gets loans, or even who gets medical treatment? In a world where algorithms shape our reality, understanding AI ethics isn\'t just smart—it\'s survival.',
    schwabInsight: 'In the Intelligent Age, you have a choice: become a "Navigator" who maintains cognitive sovereignty over AI systems, or become dependent on algorithms that think for you. The difference lies in understanding how AI can be biased, how your data is used, and choosing when to trust the machine versus your human judgment.',
    coreContent: [
      'Active Ethics: AI learns from human data, so it inherits our prejudices—like a student copying everything they see, including our mistakes',
      'Privacy as Power: Your data is your digital DNA; understanding what you share and why gives you control over your digital destiny',
      'The "Brainrot" Effect: When we let algorithms choose everything (what we watch, read, buy), we risk losing our ability to think critically and make independent choices',
      'Human-First AI: The goal isn\'t to replace human thinking, but to amplify it—keeping humans in the driver\'s seat of important decisions'
    ],
    interactiveElement: 'A "Critical Audit" simulator where students can analyze sample scenarios and detect Deepfakes or algorithmic bias. They can experiment with different ethical frameworks and watch bias metrics change in real-time through interactive case studies.',
    mindcraftChallenge: 'Ask an AI chatbot to recommend movies for a "teenage girl" versus a "teenage boy" with identical preferences. Compare the results and identify any gender stereotypes. Then, craft better prompts that eliminate bias and get more personalized recommendations.',
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
    duration: '4 weeks',
    ageRange: '12-17',
    topics: [
      'Cognitive Sovereignty vs. Algorithmic Dependence',
      'Bias detection in AI systems',
      'Privacy and digital DNA protection',
      'The "Brainrot" effect and critical thinking',
      'Human-First AI principles'
    ],
    learningOutcomes: [
      'Maintain cognitive sovereignty over AI systems',
      'Identify and mitigate bias in AI outputs',
      'Make informed decisions about data privacy',
      'Develop critical thinking about algorithmic influence'
    ]
  },
  {
    id: 'synergistic-dialogue',
    title: 'Synergistic Dialogue',
    description: 'The art of conversing with AI not as a \'tool\', but as an \'intellectual partner\'. Learning to "speak AI" through synergistic dialogue is like unlocking a superpower.',
    hook: 'Imagine having a conversation with the smartest person in the world, but they only answer exactly what you ask. Learning to "speak AI" through synergistic dialogue is like unlocking a superpower that lets you get incredible results from any AI tool.',
    schwabInsight: 'In the Intelligent Age, your ability to communicate with AI systems determines your success. Master synergistic dialogue, and you become a "Navigator" who directs AI\'s power. Ignore it, and you become dependent on whatever the AI decides to give you.',
    coreContent: [
      'Synergistic Dialogue: Like the ancient philosopher Socrates, the best prompts ask questions that lead AI to deeper thinking and better answers',
      'The PTC Framework: Every great prompt has three ingredients—Persona (who should the AI be), Context (what\'s the situation), and Task (what specific outcome you want)',
      'AI as an Intellectual Partner: Instead of asking AI to do your homework, ask it to help you think through problems—like having a study buddy who never gets tired',
      'Iteration Power: Your first prompt is just the beginning; the magic happens when you refine, improve, and build on AI\'s responses'
    ],
    interactiveElement: 'A "Dialogue Practice Arena" where students can experiment with different prompt structures using real-time feedback for clarity, context, and constraints. They can see how changing persona, context, and task affects AI outputs in real-time, with scoring for most effective prompts.',
    mindcraftChallenge: 'Create a prompt that turns an AI into your personal learning coach for a subject you\'re struggling with. Use the PTC framework to design a conversation that helps you understand a difficult concept, then share your breakthrough moment.',
    icon: MessageSquare,
    gradient: 'from-purple-500 to-pink-500',
    duration: '3 weeks',
    ageRange: '10-17',
    topics: [
      'Synergistic Dialogue techniques',
      'PTC Framework (Persona-Context-Task)',
      'AI as Intellectual Partner methodology',
      'Iteration and refinement strategies',
      'Advanced dialogue patterns'
    ],
    learningOutcomes: [
      'Master the PTC framework for effective dialogue',
      'Develop Synergistic Dialogue skills',
      'Transform AI into a personalized Intellectual Partner',
      'Iterate and refine prompts for optimal results'
    ]
  },
  {
    id: 'systems-thinking',
    title: 'Systems Thinking',
    description: 'Transitioning from static coding to dynamic AI architecture and system design vision. Programming with AI isn\'t about becoming a robot—it\'s about freeing your mind to solve bigger problems.',
    hook: 'What if you could teach a computer to do all the boring, repetitive work while you focus on the creative, meaningful stuff? Systems Thinking with AI isn\'t about becoming a robot—it\'s about freeing your mind to solve bigger problems.',
    schwabInsight: 'The Intelligent Age doesn\'t require everyone to become programmers, but it does require "Systems Thinking"—breaking down complex problems into steps that machines can help solve. This partnership lets humans focus on creativity, empathy, and innovation while AI handles the computational "drudgery."',
    coreContent: [
      'Systems Thinking: Like following a recipe, programming is about breaking big problems into smaller, logical steps that anyone can understand',
      'AI as Your Architecture Partner: Modern AI can help design systems, explain how programs work, and even debug errors—making complex architecture accessible to everyone',
      'Dynamic AI Architecture: Moving beyond static code to design systems that adapt, learn, and evolve with AI capabilities',
      'Logic + Creativity: The best solutions combine computational logic with human creativity—machines provide the precision, humans provide the vision'
    ],
    interactiveElement: 'An "Architecture Challenge" tool where students input real-world challenges and learn to break them into systemic steps. They can guide an AI agent through a logical system design process, seeing how different parts could be automated versus which parts need human creativity.',
    mindcraftChallenge: 'Identify a complex problem in your daily life. Work with an AI to design a system-level solution—mapping out all components, data flows, and decision points. Share how systems thinking transformed a seemingly unsolvable problem into manageable parts.',
    icon: Settings,
    gradient: 'from-green-500 to-emerald-500',
    duration: '6 weeks',
    ageRange: '11-17',
    topics: [
      'Systems Thinking principles',
      'Dynamic AI architecture design',
      'Problem decomposition techniques',
      'AI-assisted system design patterns',
      'Human-AI collaboration in architecture'
    ],
    learningOutcomes: [
      'Develop Systems Thinking skills',
      'Design dynamic AI architectures',
      'Decompose complex problems into solvable components',
      'Balance logic and creativity in system design'
    ]
  },
  {
    id: 'human-authenticity',
    title: 'Human Authenticity',
    description: 'Preserving the \'Human Signature\' and creativity in a machine-produced world. Your experiences, emotions, and unique perspective are what make AI-generated content meaningful.',
    hook: 'Every great artist has a unique signature—a style that screams "this is mine." In the age of AI, your job isn\'t to compete with machines, but to use them as the ultimate creative tool while keeping your human signature front and center.',
    schwabInsight: 'AI can generate thousands of outputs per minute, but it can\'t generate meaning, emotion, or authentic human experience. In the Intelligent Age, AI becomes a "bicycle for the mind"—amplifying human creativity rather than replacing it. The value lies not in what AI creates, but in how humans direct, curate, and infuse it with purpose.',
    coreContent: [
      'Human Authenticity: Your experiences, emotions, and unique perspective are what make AI-generated art meaningful—machines create, humans create meaning',
      'AI as Creative Amplifier: Like a bicycle makes you faster without replacing your legs, AI tools make your creativity more powerful without replacing your vision',
      'Preserving the Human Signature: The \'Human Signature\' is the irreplaceable emotional and cultural depth only a person can bring to any creation',
      'Collaborative Creation: The future belongs to human-AI teams where machines handle technical execution while humans provide vision, emotion, and cultural context'
    ],
    interactiveElement: 'A "Human Signature" interactive showcase using a slider or step-based component to demonstrate the transition from "Raw AI Output" to "Human-Refined Creation". Students can adjust human input vs AI input to see how collaboration affects the final result.',
    mindcraftChallenge: 'Create an AI-assisted work that tells the story of your community, hometown, or a cause you care about. Focus on using AI as a tool to express your unique perspective. Share the story behind your creative choices and what makes your human signature irreplaceable.',
    icon: Heart,
    gradient: 'from-orange-500 to-red-500',
    duration: '3 weeks',
    ageRange: '9-17',
    topics: [
      'Human Authenticity in the AI age',
      'Preserving the Human Signature',
      'AI as creative amplifier',
      'Iterative creation and curation',
      'Meaning-making beyond machine output'
    ],
    learningOutcomes: [
      'Develop and protect a unique human voice',
      'Master iterative creation that centers human authenticity',
      'Infuse AI-generated content with personal meaning',
      'Build a portfolio showcasing the irreplaceable human signature'
    ]
  },
  {
    id: 'data-wisdom',
    title: 'Data Wisdom',
    description: 'Navigation to transform data into strategic decisions, without drowning in the information ocean. Learn to separate facts from fiction in a world flooded with information.',
    hook: 'In a world where AI can confidently tell you that penguins live in the Arctic, how do you separate facts from fiction? Data Wisdom is your superpower for navigating the flood of information in the digital age.',
    schwabInsight: 'The Intelligent Age creates an abundance of information but not necessarily an abundance of wisdom. Developing the ability to transform "data to wisdom" through scientific thinking and fact-checking becomes crucial for maintaining cognitive sovereignty and making informed decisions.',
    coreContent: [
      'Data Wisdom: Moving from raw information → verified data → meaningful knowledge → actionable wisdom requires human judgment and scientific methods',
      'AI Hallucination Detection: Like learning to spot when someone is making up facts in conversation, you can learn to identify when AI generates plausible-sounding but false information',
      'Strategic Navigation: The best decision-makers don\'t trust single sources—they triangulate information from multiple, credible sources to build confidence in truth',
      'Hypothesis-Driven Thinking: Approach claims like a scientist: form hypotheses, gather evidence, test assumptions, and remain open to changing your mind based on data'
    ],
    interactiveElement: 'A "Data Discovery" walkthrough showing how to use research tools and NotebookLM to synthesize strategic decisions from raw data. Include a fact-check challenge game where students verify AI-generated claims using research tools and source verification.',
    mindcraftChallenge: 'Find a viral claim or "fact" circulating on social media. Use AI tools to help research it, but verify everything through multiple sources. Create a mini fact-check report explaining your methodology and conclusions. Bonus: debunk or confirm something your friends believe.',
    icon: Compass,
    gradient: 'from-indigo-500 to-blue-500',
    duration: '5 weeks',
    ageRange: '13-17',
    topics: [
      'Data Wisdom transformation pipeline',
      'AI hallucination detection',
      'Multi-source strategic verification',
      'Hypothesis-driven research',
      'Scientific skepticism in the information ocean'
    ],
    learningOutcomes: [
      'Transform raw information into strategic wisdom',
      'Detect and avoid AI hallucinations',
      'Master multi-source verification techniques',
      'Apply scientific skepticism to navigate the digital information ocean'
    ]
  }
]
