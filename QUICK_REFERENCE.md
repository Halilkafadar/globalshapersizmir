# Mindcraft - Quick Reference Guide

## 🚀 Quick Commands

```bash
# Install
npm install

# Development
npm run dev          # Start dev server at localhost:3000
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check code quality

# Deployment
git push             # Push to GitHub
# Then deploy via Vercel/Netlify
```

## 📁 Key Files to Edit

### Adding Content
- **Modules**: `utils/modulesData.ts`
- **Quiz Questions**: `components/modules/ModuleQuiz.tsx`
- **Demo Responses**: `components/modules/InteractiveDemo.tsx`

### Styling
- **Colors**: `tailwind.config.js`
- **Global Styles**: `styles/globals.css`
- **Component Styles**: Inline Tailwind classes

### Pages
- **Home**: `pages/index.tsx`
- **Modules**: `pages/modules/index.tsx`
- **Playground**: `pages/playground.tsx`
- **Gallery**: `pages/gallery.tsx`

## 🎨 Design Patterns

### Gradient Text
```tsx
<span className="gradient-text">Your Text</span>
```

### Primary Button
```tsx
<button className="btn-primary">Click Me</button>
```

### Card with Hover
```tsx
<div className="card-hover bg-white rounded-2xl p-8">
  Content
</div>
```

### Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Animated Content
</motion.div>
```

## 🔧 Common Tasks

### Add New Module
1. Edit `utils/modulesData.ts` - add module object
2. Edit `components/modules/ModuleQuiz.tsx` - add quiz
3. Edit `components/modules/InteractiveDemo.tsx` - add demo
4. Navigate to `/modules/your-module-id`

### Change Colors
1. Edit `tailwind.config.js`
2. Update `colors` section
3. Restart dev server

### Add New Page
1. Create file in `pages/` (e.g., `about.tsx`)
2. Import Navbar and Footer
3. Add link in `components/layout/Navbar.tsx`

### Add Icon
```tsx
import { IconName } from 'lucide-react'
<IconName className="w-6 h-6" />
```

## 🌐 URLs

- **Home**: `/`
- **All Modules**: `/modules`
- **Module Detail**: `/modules/ai-ethics`
- **Playground**: `/playground`
- **Gallery**: `/gallery`

## 📊 Module IDs

- `ai-ethics`
- `prompt-engineering`
- `coding-automation`
- `ai-art`
- `scientific-research`
- `creative-innovation`

## 🎯 Integration Points

### Text-to-Image API
File: `components/playground/AIPlayground.tsx`
Function: `handleGenerate()` in `ArtGenerator`

### Chatbot API
File: `components/playground/AIPlayground.tsx`
Function: `handleSend()` in `ChatInterface`

### Code Execution
File: `components/playground/AIPlayground.tsx`
Component: `CodeAssistant`

### Database
Create: `/lib/firebase.ts` or `/lib/supabase.ts`
Use for: User auth, progress tracking, gallery uploads

## 🐛 Troubleshooting

### Port in Use
```bash
npx kill-port 3000
# or
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
npm run build  # See all errors
```

### Cache Issues
```bash
rm -rf .next
npm run dev
```

### Dependency Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)
- **Large**: `xl:` (≥ 1280px)

## 🎨 Color Classes

```tsx
text-mindcraft-blue    bg-mindcraft-blue
text-mindcraft-purple  bg-mindcraft-purple
text-mindcraft-green   bg-mindcraft-green
text-mindcraft-dark    bg-mindcraft-dark
text-mindcraft-light   bg-mindcraft-light
```

## 📧 Contact & Support

- **Email**: izmirglobalshapers@gmail.com
- **Documentation**: README.md, SETUP.md
- **AI Guide**: .github/copilot-instructions.md

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` - no errors
- [ ] Test all pages manually
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Update contact information
- [ ] Add actual partner logos
- [ ] Configure environment variables
- [ ] Test on different browsers

## 🚀 Deployment Platforms

### Vercel (Recommended)
1. Push to GitHub
2. Import on vercel.com
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Deploy `out/` folder

### Custom Server
```bash
npm run build
npm start
```

---

**Everything you need in one place!** 📚
