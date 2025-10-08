# 🚀 Mindcraft Setup Guide

## Prerequisites

Before you begin, ensure you have:
- **Node.js** version 18.0 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- Git (optional, for version control)

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TailwindCSS 3.4
- Framer Motion
- Lucide React (icons)
- TypeScript

**Installation time**: ~2-3 minutes depending on internet speed

## Step 2: Verify Installation

Check if everything is installed correctly:

```bash
npm list --depth=0
```

You should see all dependencies listed without errors.

## Step 3: Start Development Server

```bash
npm run dev
```

**Output should show**:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- info Loaded env from .env.local
- event compiled client and server successfully
```

## Step 4: Open in Browser

Navigate to: **http://localhost:3000**

You should see the Mindcraft home page with:
- Animated hero section
- Module preview cards
- Partners section
- Fully functional navigation

## Step 5: Explore the Platform

### Test Navigation
- Click "Modules" → See all 6 education modules
- Click any module → See details, demo, and quiz tabs
- Click "AI Playground" → Try art generator, chat, and code tools
- Click "Gallery" → View student creations

### Test Interactive Features
1. **Module Quiz**: Go to any module → Quiz tab → Answer questions
2. **Interactive Demo**: Go to any module → Demo tab → Enter prompt
3. **AI Playground**: Try each of the 3 playground tools

## Development Workflow

### Making Changes

1. **Edit Components**: Changes auto-reload in browser
   - Components: `/components/**/*.tsx`
   - Pages: `/pages/**/*.tsx`

2. **Update Styles**: Modify Tailwind classes
   - Global styles: `/styles/globals.css`
   - Config: `/tailwind.config.js`

3. **Add Module Content**: Edit `/utils/modulesData.ts`

### Hot Reload
Save any file → Browser automatically refreshes

### Check for Errors
- Browser console (F12)
- Terminal output
- TypeScript errors in VS Code

## Building for Production

### Create Production Build

```bash
npm run build
```

This:
- Compiles TypeScript
- Optimizes code
- Generates static pages
- Creates bundle

**Build time**: ~30-60 seconds

### Test Production Build Locally

```bash
npm start
```

Visit: **http://localhost:3000**

Production build is faster and optimized.

## Troubleshooting

### Port Already in Use

If port 3000 is busy:
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or run on different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check all TypeScript errors
npm run build

# Ignore specific errors temporarily (not recommended)
# Add "// @ts-ignore" above the line
```

### Styling Not Working

```bash
# Restart dev server
# Press Ctrl+C
npm run dev
```

## Optional: Firebase Setup

For user authentication and data storage:

1. Create Firebase project at [firebase.google.com](https://firebase.google.com)

2. Get credentials and create `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

3. Create `/lib/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

export const app = initializeApp(firebaseConfig)
```

## Optional: AI API Integration

To connect real AI services:

### Text-to-Image (Stable Diffusion)

1. Get API key from [stability.ai](https://stability.ai)
2. Add to `.env.local`: `STABILITY_API_KEY=...`
3. Update `components/playground/AIPlayground.tsx`:

```typescript
const response = await fetch('https://api.stability.ai/v1/generation/...', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.STABILITY_API_KEY}`,
  },
  body: JSON.stringify({ prompt })
})
```

### AI Chat (OpenAI)

1. Get API key from [platform.openai.com](https://platform.openai.com)
2. Add to `.env.local`: `OPENAI_API_KEY=...`
3. Create API route `/pages/api/chat.ts`:

```typescript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req, res) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: req.body.messages
  })
  res.json(completion)
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Add environment variables
5. Deploy

**Domain**: `your-project.vercel.app`

### Netlify

1. Run `npm run build`
2. Upload `out/` folder to Netlify
3. Configure domain

### Custom Server

```bash
npm run build
npm start
```

Use PM2 or similar for process management.

## VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**
- **TypeScript Vue Plugin**

## Keyboard Shortcuts

- `Ctrl + C` - Stop dev server
- `Ctrl + Shift + R` - Hard reload browser
- `Ctrl + K + M` - Open command palette (VS Code)

## Getting Help

- **Documentation**: See README.md
- **AI Agent Guide**: See `.github/copilot-instructions.md`
- **Contact**: izmirglobalshapers@gmail.com

---

**You're all set! 🎉**

Start building amazing educational experiences with Mindcraft!
