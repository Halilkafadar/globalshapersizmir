# Mindcraft AI Coding Agent Instructions

## Project Overview
Mindcraft is an educational platform for ages 9-17 teaching AI literacy, ethics, and creativity. Built with Next.js 14, React 18, TypeScript, and TailwindCSS.

## Architecture

### Core Structure
- **Pages Router**: Routes in `/pages` (not App Router)
- **Component Organization**: Layout → Home → Modules → Playground → Gallery
- **Styling**: TailwindCSS with custom design system (mindcraft-blue, mindcraft-purple, mindcraft-green)
- **State Management**: React hooks (useState, useEffect) - no external state library
- **Animations**: Framer Motion for all interactive elements

### Key Design Patterns
- All pages use `<Navbar />` and `<Footer />` layout components
- Gradient text pattern: `<span className="gradient-text">Text</span>`
- Button styles: `.btn-primary` (gradient) and `.btn-secondary` (outline)
- Card hover effect: `.card-hover` class for all interactive cards
- Icons from `lucide-react` library

## Module System

### Module Data Structure
All modules defined in `utils/modulesData.ts`:
```typescript
{
  id: string,              // URL identifier
  title: string,           // Display name
  description: string,     // Summary
  icon: LucideIcon,        // From lucide-react
  gradient: string,        // TailwindCSS gradient classes
  duration: string,        // "X weeks"
  ageRange: string,        // "9-17"
  topics: string[],        // What's taught
  learningOutcomes: string[]
}
```

### Adding New Modules
1. Add to `modulesData` array in `utils/modulesData.ts`
2. Add quiz questions in `components/modules/ModuleQuiz.tsx` (quizzes object)
3. Add demo response in `components/modules/InteractiveDemo.tsx` (getDemoResult function)
4. Route automatically works via `/modules/[id]`

## Component Conventions

### Prop Types
Always define TypeScript interfaces for component props:
```typescript
interface MyComponentProps {
  data: Module
  onAction?: () => void
}
```

### Motion Components
Use Framer Motion for animations:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### Form Handling
Forms use controlled components:
```typescript
const [input, setInput] = useState('')
<input value={input} onChange={(e) => setInput(e.target.value)} />
```

## Styling Guidelines

### Color Usage
- `text-mindcraft-blue` / `bg-mindcraft-blue` - Knowledge theme
- `text-mindcraft-purple` / `bg-mindcraft-purple` - Creativity theme
- `text-mindcraft-green` / `bg-mindcraft-green` - Ethics theme
- `text-mindcraft-dark` - Primary text
- `bg-mindcraft-light` - Page background

### Gradient Patterns
- Text: `className="gradient-text"`
- Background: `className="gradient-bg"`
- Module-specific: Use module's gradient from modulesData

### Responsive Design
Use Tailwind breakpoints: `md:`, `lg:` for tablet/desktop
Example: `text-4xl md:text-5xl lg:text-6xl`

## API Integration (Production)

### Current State
All demos use mock responses with setTimeout. To connect real APIs:

1. **AI Art Generation** (`components/playground/AIPlayground.tsx`):
   - Replace `handleGenerate` mock with Stable Diffusion/DALL-E API call
   - Add loading states and error handling

2. **AI Chatbot** (`components/playground/AIPlayground.tsx`):
   - Replace mock messages with OpenAI/Anthropic API
   - Implement streaming responses

3. **Code Execution** (`components/playground/AIPlayground.tsx`):
   - Use Judge0, Replit, or CodeSandbox API
   - Add syntax highlighting with react-syntax-highlighter

### Backend Setup (Future)
When adding Firebase/Supabase:
- Create `/lib/firebase.ts` or `/lib/supabase.ts`
- User auth: Store progress, quiz scores, gallery uploads
- Create API routes in `/pages/api/` for server-side operations

## Adding New Features

### New Page
1. Create file in `/pages/` (e.g., `about.tsx`)
2. Import Navbar and Footer
3. Add link in Navbar component
4. Follow existing page structure

### New Component
1. Create in appropriate `/components/` subdirectory
2. Use TypeScript with proper prop types
3. Include Framer Motion if interactive
4. Export as default

### New Quiz Questions
Add to `quizzes` object in `ModuleQuiz.tsx`:
```typescript
'module-id': [
  {
    question: string,
    options: string[],
    correct: number,  // index of correct answer
    explanation: string
  }
]
```

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm start        # Run production build
npm run lint     # Check code quality
```

## Common Tasks

### Update Module Content
Edit `utils/modulesData.ts` → changes reflect immediately

### Change Colors
Edit `tailwind.config.js` → restart dev server

### Add Icon
Import from `lucide-react`: `import { IconName } from 'lucide-react'`

### Fix TypeScript Errors
Run `npm run build` to see all errors before deployment

## Notes for AI Agents

- **Always use TypeScript**: Define types for all props and state
- **Mobile-first**: Test responsive behavior on all screen sizes
- **Accessibility**: Include alt text, semantic HTML, ARIA labels where needed
- **Performance**: Use Next.js Image component for images, lazy load when possible
- **Consistency**: Match existing patterns - don't introduce new styling approaches
- **Comments**: Add brief comments for complex logic, especially in utils

## File Naming
- Components: PascalCase (e.g., `ModuleCard.tsx`)
- Pages: lowercase or kebab-case (e.g., `index.tsx`, `[id].tsx`)
- Utils: camelCase (e.g., `modulesData.ts`)

## Important Files
- `/utils/modulesData.ts` - All module content
- `/components/layout/Navbar.tsx` - Navigation
- `/pages/index.tsx` - Home page
- `/styles/globals.css` - Global styles
- `/tailwind.config.js` - Design tokens
