# 🌟 Mindcraft - The Meeting Point of Intelligence and Conscience

![Mindcraft Logo](https://via.placeholder.com/800x200/3B82F6/FFFFFF?text=Mindcraft+-+AI+Education+Platform)

An interactive educational platform bridging **ethics, creativity, and AI literacy** for students aged 9-17. Built by Global Shapers İzmir Hub.

## 🎯 Vision

Mindcraft empowers the next generation to understand, create with, and think critically about artificial intelligence while developing strong ethical foundations.

## ✨ Features

- **📚 6 Interactive Modules**: AI Ethics, Prompt Engineering, Coding & Automation, AI Art Creation, Scientific Research, Creative Innovation
- **🎮 AI Playground**: Hands-on experimentation with AI tools (text-to-image, chatbot, code assistant)
- **🎨 Student Gallery**: Showcase and explore creations from students worldwide
- **📊 Progress Tracking**: Monitor learning journey and achievements
- **🌍 Multi-language Support**: Ready for global expansion
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
mindcraft/
├── components/           # React components
│   ├── layout/          # Navbar, Footer
│   ├── home/            # Hero, ModulesPreview, PartnersSection
│   ├── modules/         # ModuleCard, ModuleContent, InteractiveDemo, ModuleQuiz
│   ├── playground/      # AI tools (art, chat, code)
│   └── gallery/         # Student creations gallery
├── pages/               # Next.js pages/routes
│   ├── index.tsx        # Home page
│   ├── modules/         # Education modules
│   ├── playground.tsx   # AI Playground
│   └── gallery.tsx      # Gallery page
├── styles/              # Global styles
│   └── globals.css      # Tailwind + custom styles
├── utils/               # Utilities and data
│   └── modulesData.ts   # Module content and structure
├── public/              # Static assets
└── firebase/            # Firebase configuration (optional)
```

## 🎨 Design System

### Colors
- **Blue (#3B82F6)**: Knowledge & Consciousness
- **Purple (#A855F7)**: Creativity & Imagination  
- **Green (#10B981)**: Ethics & Nature
- **Dark (#1E293B)**: Text primary
- **Light (#F8FAFC)**: Background

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Manrope (content)
- **Sans**: Inter (UI elements)

## 🧩 Key Components

### Education Modules
Each module includes:
- Overview with learning objectives
- Interactive demo/simulation
- Quiz with instant feedback
- Progress tracking

### AI Playground
- **Text-to-Image**: Generate AI art from prompts
- **AI Chat**: Conversational AI assistant
- **Code Playground**: Python code execution

### Gallery
- Filter by module, age, country
- Like and view counts
- Student showcase

## 🔧 Technology Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend** (optional): Firebase/Supabase
- **Language**: TypeScript

## 🌐 API Integration Points

For production deployment, connect these features to actual APIs:

### Text-to-Image AI
```typescript
// components/playground/AIPlayground.tsx - ArtGenerator
// Replace mock with: Stable Diffusion, DALL-E, Midjourney API
```

### AI Chatbot
```typescript
// components/playground/AIPlayground.tsx - ChatInterface  
// Replace mock with: OpenAI GPT, Anthropic Claude API
```

### Code Execution
```typescript
// components/playground/AIPlayground.tsx - CodeAssistant
// Replace mock with: Judge0, Replit, CodeSandbox API
```

### User Progress & Authentication
```typescript
// Add Firebase/Supabase for:
// - User authentication
// - Progress tracking
// - Gallery uploads
// - Quiz results storage
```

## 📊 Module Content Structure

Each module follows this pattern:

```typescript
{
  id: string           // URL-friendly identifier
  title: string        // Display name
  description: string  // Short summary
  icon: LucideIcon    // Visual identifier
  gradient: string     // Color scheme
  duration: string     // Expected time
  ageRange: string     // Target ages
  topics: string[]     // What's covered
  learningOutcomes: string[]  // Skills gained
}
```

## 🎯 Development Workflow

### Adding a New Module

1. Add module data to `utils/modulesData.ts`
2. Create quiz questions in `components/modules/ModuleQuiz.tsx`
3. Add demo logic in `components/modules/InteractiveDemo.tsx`
4. Test routing to `/modules/[id]`

### Customizing Design

- Modify colors in `tailwind.config.js`
- Update global styles in `styles/globals.css`
- Adjust component-specific styles inline

### Adding Pages

Create new files in `pages/` directory:
```typescript
// pages/about.tsx
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      {/* Your content */}
      <Footer />
    </>
  )
}
```

## 🌍 Internationalization

Ready for multi-language support:

1. Install next-i18next: `npm install next-i18next`
2. Create locale files in `/public/locales/`
3. Wrap app with I18nProvider
4. Use `t()` function for translations

## 📈 Future Enhancements

- [ ] User authentication & profiles
- [ ] Real AI API integrations
- [ ] Certificate generation
- [ ] Teacher dashboard
- [ ] Mobile app (React Native)
- [ ] Multiplayer learning games
- [ ] Video lessons
- [ ] AR/VR experiences

## 👥 Partners

- **UNDP** - United Nations Development Programme
- **UNESCO** - Education initiatives
- **OECD** - Educational standards
- **Global Shapers İzmir Hub** - Project lead

## 📧 Contact

**Email**: izmirglobalshapers@gmail.com  
**Website**: [Global Shapers](https://www.globalshapers.org)  
**LinkedIn**: [Connect with us](#)

## 📄 License

Copyright © 2025 Global Shapers İzmir Hub. All rights reserved.

---

**Built with ❤️ by Global Shapers İzmir Hub**

*Empowering the next generation with AI literacy, ethics, and creativity.*
