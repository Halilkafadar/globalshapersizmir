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
    id: 'ai-ethics',
    title: 'AI & Ethics',
    description: 'What if your phone\'s AI started making decisions about who gets hired, who gets loans, or even who gets medical treatment? In a world where algorithms shape our reality, understanding AI ethics isn\'t just smart—it\'s survival.',
    hook: 'What if your phone\'s AI started making decisions about who gets hired, who gets loans, or even who gets medical treatment? In a world where algorithms shape our reality, understanding AI ethics isn\'t just smart—it\'s survival.',
    schwabInsight: 'In the Intelligent Age, you have a choice: become a "Navigator" who maintains cognitive sovereignty over AI systems, or become a "Slave" to algorithms that think for you. The difference lies in understanding how AI can be biased, how your data is used, and choosing when to trust the machine versus your human judgment.',
    coreContent: [
      'Bias Detection: AI learns from human data, so it inherits our prejudices—like a baby copying everything it sees, including our mistakes',
      'Privacy as Power: Your data is your digital DNA; understanding what you share and why gives you control over your digital destiny',
      'The "Brainrot" Effect: When we let algorithms choose everything (what we watch, read, buy), we risk losing our ability to think critically and make independent choices',
      'Human-First AI: The goal isn\'t to replace human thinking, but to amplify it—keeping humans in the driver\'s seat of important decisions'
    ],
    interactiveElement: 'A "Bias Detective" simulator where students can upload sample datasets and see how different training data produces biased AI outputs. They can experiment with balancing datasets and watch bias metrics change in real-time through interactive sliders and visualizations.',
    mindcraftChallenge: 'Ask an AI chatbot to recommend movies for a "teenage girl" versus a "teenage boy" with identical preferences. Compare the results and identify any gender stereotypes. Then, craft better prompts that eliminate bias and get more personalized recommendations.',
    icon: Brain,
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
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Imagine having a conversation with the smartest person in the world, but they only answer exactly what you ask. Learning to "speak AI" through prompt engineering is like unlocking a superpower that lets you get incredible results from any AI tool.',
    hook: 'Imagine having a conversation with the smartest person in the world, but they only answer exactly what you ask. Learning to "speak AI" through prompt engineering is like unlocking a superpower that lets you get incredible results from any AI tool.',
    schwabInsight: 'In the Intelligent Age, your ability to communicate with AI systems determines your success. Master prompt engineering, and you become a "Navigator" who directs AI\'s power. Ignore it, and you become dependent on whatever the AI decides to give you.',
    coreContent: [
      'Socratic Dialogue: Like the ancient philosopher Socrates, the best prompts ask questions that lead AI to deeper thinking and better answers',
      'The PTC Framework: Every great prompt has three ingredients—Persona (who should the AI be), Context (what\'s the situation), and Task (what specific outcome you want)',
      'AI as a Thinking Partner: Instead of asking AI to do your homework, ask it to help you think through problems—like having a study buddy who never gets tired',
      'Iteration Power: Your first prompt is just the beginning; the magic happens when you refine, improve, and build on AI\'s responses'
    ],
    interactiveElement: 'A "Prompt Lab" where students can experiment with different prompt structures using sliding scales for specificity, creativity, and detail. They can see how changing persona, context, and task affects AI outputs in real-time, with a leaderboard for most creative and effective prompts.',
    mindcraftChallenge: 'Create a prompt that turns an AI into your personal learning coach for a subject you\'re struggling with. Use the PTC framework to design a conversation that helps you understand a difficult concept, then share your breakthrough moment.',
    icon: MessageSquare,
    gradient: 'from-purple-500 to-pink-500',
    duration: '3 weeks',
    ageRange: '10-17',
    topics: [
      'Socratic Dialogue techniques',
      'PTC Framework (Persona-Context-Task)',
      'AI as thinking partner methodology',
      'Iteration and refinement strategies',
      'Advanced prompting patterns'
    ],
    learningOutcomes: [
      'Master the PTC framework for effective prompting',
      'Develop Socratic questioning skills',
      'Transform AI into a personalized learning coach',
      'Iterate and refine prompts for optimal results'
    ]
  },
  {
    id: 'coding-automation',
    title: 'Coding & Automation',
    description: 'What if you could teach a computer to do all the boring, repetitive work while you focus on the creative, meaningful stuff? Programming with AI isn\'t about becoming a robot—it\'s about freeing your mind to solve bigger problems.',
    hook: 'What if you could teach a computer to do all the boring, repetitive work while you focus on the creative, meaningful stuff? Programming with AI isn\'t about becoming a robot—it\'s about freeing your mind to solve bigger problems.',
    schwabInsight: 'The Intelligent Age doesn\'t require everyone to become programmers, but it does require "computational thinking"—breaking down complex problems into steps that machines can help solve. This partnership lets humans focus on creativity, empathy, and innovation while AI handles the computational "drudgery."',
    coreContent: [
      'Computational Thinking: Like following a cake recipe, programming is about breaking big problems into smaller, logical steps that anyone can understand',
      'AI as Your Coding Partner: Modern AI can help write code, explain how programs work, and even debug errors—making programming accessible to everyone',
      'Automation Liberation: When machines handle repetitive tasks (like organizing files or sending reminders), humans can focus on creative problem-solving and meaningful work',
      'Logic + Creativity: The best solutions combine computational logic with human creativity—machines provide the precision, humans provide the vision'
    ],
    interactiveElement: 'A "Problem Decomposer" tool where students input real-world challenges (like organizing a school event or reducing plastic waste) and learn to break them into algorithmic steps. They can then see how different parts could be automated versus which parts need human creativity.',
    mindcraftChallenge: 'Identify a repetitive task in your daily life (organizing photos, managing homework deadlines, etc.). Work with an AI to create a simple automation solution or workflow. Share how this freed up time for something more meaningful.',
    icon: Code,
    gradient: 'from-green-500 to-emerald-500',
    duration: '6 weeks',
    ageRange: '11-17',
    topics: [
      'Computational thinking principles',
      'AI-assisted programming',
      'Problem decomposition techniques',
      'Automation design patterns',
      'Human-AI collaboration in coding'
    ],
    learningOutcomes: [
      'Develop computational thinking skills',
      'Partner with AI for programming tasks',
      'Design automated solutions for real problems',
      'Balance logic and creativity in problem-solving'
    ]
  },
  {
    id: 'ai-art-creation',
    title: 'AI Art Creation',
    description: 'Every great artist has a unique signature—a style that screams "this is mine." In the age of AI art, your job isn\'t to compete with machines, but to use them as the ultimate creative tool while keeping your human signature front and center.',
    hook: 'Every great artist has a unique signature—a style that screams "this is mine." In the age of AI art, your job isn\'t to compete with machines, but to use them as the ultimate creative tool while keeping your human signature front and center.',
    schwabInsight: 'AI can generate thousands of images per minute, but it can\'t generate meaning, emotion, or authentic human experience. In the Intelligent Age, AI becomes a "bicycle for the mind"—amplifying human creativity rather than replacing it. The value lies not in what AI creates, but in how humans direct, curate, and infuse it with purpose.',
    coreContent: [
      'The Human Signature: Your experiences, emotions, and unique perspective are what make AI-generated art meaningful—machines create, humans create meaning',
      'AI as Creative Amplifier: Like a bicycle makes you faster without replacing your legs, AI tools make your creativity more powerful without replacing your vision',
      'Iteration and Curation: The art isn\'t just in the generating—it\'s in the refining, selecting, and combining AI outputs with human intent and judgment',
      'Collaborative Creation: The future belongs to human-AI teams where machines handle technical execution while humans provide vision, emotion, and cultural context'
    ],
    interactiveElement: 'A "Style DNA Mixer" where students can analyze famous artworks to identify visual elements (color palettes, compositions, themes), then blend these elements with AI to create original pieces. They can adjust "human input" vs "AI input" sliders to see how collaboration affects the final result.',
    mindcraftChallenge: 'Create an AI artwork that tells the story of your community, hometown, or a cause you care about. Focus on using AI as a tool to express your unique perspective rather than just generating "pretty pictures." Share the story behind your creative choices.',
    icon: Palette,
    gradient: 'from-orange-500 to-red-500',
    duration: '3 weeks',
    ageRange: '9-17',
    topics: [
      'Human signature in AI art',
      'AI as creative amplifier',
      'Iterative creation and curation',
      'Human-AI collaborative art',
      'Meaning-making through art'
    ],
    learningOutcomes: [
      'Develop a unique artistic voice using AI tools',
      'Master iterative creation and curation',
      'Infuse AI-generated art with personal meaning',
      'Build a portfolio showcasing human-AI collaboration'
    ]
  },
  {
    id: 'scientific-research',
    title: 'Scientific Research Methods',
    description: 'In a world where AI can confidently tell you that penguins live in the Arctic, how do you separate facts from fiction? Learning to verify information and detect AI "hallucinations" is your superpower for navigating the flood of information in the digital age.',
    hook: 'In a world where AI can confidently tell you that penguins live in the Arctic, how do you separate facts from fiction? Learning to verify information and detect AI "hallucinations" is your superpower for navigating the flood of information in the digital age.',
    schwabInsight: 'The Intelligent Age creates an abundance of information but not necessarily an abundance of wisdom. Developing the ability to transform "data to wisdom" through scientific thinking and fact-checking becomes crucial for maintaining cognitive sovereignty and making informed decisions.',
    coreContent: [
      'The Data-to-Wisdom Pipeline: Moving from raw information → verified data → meaningful knowledge → actionable wisdom requires human judgment and scientific methods',
      'AI Hallucination Detection: Like learning to spot when someone is making up facts in conversation, you can learn to identify when AI generates plausible-sounding but false information',
      'Cross-Reference Everything: The best fact-checkers don\'t trust single sources—they triangulate information from multiple, credible sources to build confidence in truth',
      'Hypothesis-Driven Thinking: Approach claims like a scientist: form hypotheses, gather evidence, test assumptions, and remain open to changing your mind based on data'
    ],
    interactiveElement: 'A "Fact-Check Challenge" game where students are presented with AI-generated claims (mix of true and false) and must use research tools, source verification, and critical thinking to determine accuracy. Include a "confidence meter" and reasoning tracker to show their decision-making process.',
    mindcraftChallenge: 'Find a viral claim or "fact" circulating on social media. Use AI tools to help research it, but verify everything through multiple sources. Create a mini fact-check report explaining your methodology and conclusions. Bonus: debunk or confirm something your friends believe.',
    icon: Microscope,
    gradient: 'from-indigo-500 to-blue-500',
    duration: '5 weeks',
    ageRange: '13-17',
    topics: [
      'Data-to-wisdom transformation',
      'AI hallucination detection',
      'Multi-source verification methods',
      'Hypothesis-driven research',
      'Scientific skepticism in the digital age'
    ],
    learningOutcomes: [
      'Transform information into verified knowledge',
      'Detect and avoid AI hallucinations',
      'Master multi-source verification techniques',
      'Apply scientific skepticism to digital information'
    ]
  },
  {
    id: 'creative-innovation',
    title: 'Creative Innovation',
    description: 'What if your generation could solve climate change, end poverty, or create global peace not through individual genius, but through intelligent collaboration between humans and AI? Welcome to the era of collective intelligence, where your ideas can scale to change the world.',
    hook: 'What if your generation could solve climate change, end poverty, or create global peace not through individual genius, but through intelligent collaboration between humans and AI? Welcome to the era of collective intelligence, where your ideas can scale to change the world.',
    schwabInsight: 'The Intelligent Age\'s greatest opportunity lies in combining human creativity, empathy, and values with AI\'s computational power to tackle humanity\'s biggest challenges. True innovation emerges not from humans versus machines, but from humans with machines working toward shared goals.',
    coreContent: [
      'Collective Intelligence: When diverse human perspectives combine with AI\'s analytical power, we can solve problems too complex for any individual or machine alone',
      'SDG-Focused Innovation: The UN\'s Sustainable Development Goals provide a framework for channeling our human-AI partnerships toward meaningful global impact',
      'Prototype to Scale: Today\'s AI tools let you rapidly test and iterate on solutions, moving from idea to working prototype faster than ever before',
      'Human Values as North Star: Technology amplifies human intentions—ensuring those intentions align with empathy, sustainability, and justice becomes crucial for positive impact'
    ],
    interactiveElement: 'An "Impact Simulator" where students can select a Global Shapers challenge (education, environment, equality, etc.), design a solution using human creativity + AI capabilities, and see potential impact metrics. Include collaboration features where teams can combine ideas and vote on the most promising approaches.',
    mindcraftChallenge: 'Pick one UN Sustainable Development Goal that resonates with you. Use AI to research the problem, brainstorm innovative solutions, and create a 1-minute pitch for your idea. Focus on how human insight + AI capabilities could make your solution uniquely powerful. Share your pitch with the global Mindcraft community.',
    icon: Sparkles,
    gradient: 'from-yellow-500 to-orange-500',
    duration: '4 weeks',
    ageRange: '10-17',
    topics: [
      'Collective intelligence principles',
      'SDG-focused problem solving',
      'Rapid prototyping with AI',
      'Human-centered innovation',
      'Global impact measurement'
    ],
    learningOutcomes: [
      'Harness collective intelligence for problem-solving',
      'Apply human-AI collaboration to SDG challenges',
      'Rapidly prototype and iterate solutions',
      'Measure and communicate global impact potential'
    ]
  }
]
