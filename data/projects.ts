export interface Project {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  coverImage: string
  status: 'active' | 'completed' | 'upcoming'
  category: string
  links: {
    website?: string
    repo?: string
    documentation?: string
    github?: string
    docs?: string
  }
  impact?: {
    reach?: string
    beneficiaries?: string
    duration?: string
    participants?: string
    schools?: string
    countries?: string
  }
  partners?: Array<{
    name: string
    logo: string
    website: string
  }>
}

export const projects: Project[] = [
  {
    slug: "mindcraft",
    title: "Mindcraft - AI Literacy Platform",
    shortDescription: "AI literacy, ethics and creativity platform for young people aged 9-17",
    longDescription: `
Mindcraft is an interactive educational platform that teaches young people to use artificial intelligence technologies responsibly and creatively.

## Our Goals
- Increase AI literacy
- Build ethical awareness
- Encourage creative thinking
- Develop digital competencies

## Modules
1. **AI & Ethics**: Artificial intelligence ethics and social impacts
2. **Prompt Engineering**: Effective communication with AI
3. **Coding & Automation**: Python programming and automation
4. **AI Art Creation**: Art creation with artificial intelligence
5. **Scientific Research**: Scientific research methods
6. **Creative Innovation**: Design thinking and innovation

The platform makes learning fun with interactive demos, quizzes and AI playground.
    `,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    status: 'active',
    category: 'Education & Technology',
    links: {
      website: "http://localhost:3000",
  documentation: "/projects/mindcraft/docs"
    },
    impact: {
      reach: "5,000+ students",
      beneficiaries: "15+ countries",
      duration: "2024-Ongoing"
    }
  },
  {
    slug: "financial-literacy",
    title: "Financial Literacy Program",
    shortDescription: "Comprehensive financial education and literacy program for young people",
    longDescription: `
The Financial Literacy project aims to equip young people with basic knowledge and skills in money management, saving, investment and financial planning.

## Program Content

### Module 1: Basic Financial Concepts
- Money and economy fundamentals
- Income-expense management
- Budget creation
- Saving habits

### Module 2: Banking and Financial Instruments
- Bank accounts and operating principles
- Credit cards and conscious use
- Digital banking and fintech
- Financial security

### Module 3: Investment and Entrepreneurship
- Investment instruments (stocks, bonds, funds)
- Risk management
- Entrepreneurship fundamentals
- Business plan preparation

### Module 4: Financial Planning
- Short and long term goals
- Retirement planning
- Insurance and protection
- Tax awareness

## Implementation Method
- **Workshops**: Monthly interactive sessions
- **Mentoring**: One-on-one meetings with finance professionals
- **Simulations**: Practice with real-life scenarios
- **Library**: Resources and reading materials

## Target Audience
Young people aged 13-25, especially:
- High school students
- University students
- Young professionals
- Those interested in entrepreneurship

## Impact
Our program has enabled participants to act 85% more consciously in their financial decisions. The rate of participants who have acquired saving habits has exceeded 70%.

## Partners
- Local banks and financial institutions
- University economics departments
- Entrepreneurship centers
- OECD Financial Education Network
    `,
    coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
    status: 'active',
    category: 'Education & Finance',
    links: {
  documentation: "/projects/financial-literacy/curriculum"
    },
    impact: {
      reach: "2,000+ participants",
      beneficiaries: "50+ schools",
      duration: "2023-Ongoing"
    }
  }
]
