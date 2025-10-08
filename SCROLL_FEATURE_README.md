# Scroll Position Persistence System

## 🎯 Quick Start

The scroll position persistence feature is **already enabled globally** in your app! No setup required for basic functionality.

### Test It Out

1. Visit the demo page: http://localhost:3000/scroll-demo
2. Scroll down the page
3. Click any navigation link
4. Use browser back button
5. 🎉 You're back at the exact same scroll position!

## 📁 File Structure

```
mindcraft/
├── hooks/
│   ├── useScrollRestoration.ts      # Main scroll restoration hooks
│   └── useScrollHelpers.ts          # Helper hooks (position tracking, direction)
├── utils/
│   └── scrollUtils.ts               # Utility functions for manual control
├── components/
│   └── ScrollRestoreWrapper.tsx     # Optional wrapper component
├── pages/
│   ├── _app.tsx                     # Global setup (already configured)
│   └── scroll-demo.tsx              # Live demonstration page
└── docs/
    └── SCROLL_RESTORATION.md        # Complete documentation
```

## 🚀 Usage

### Option 1: Automatic (Default)
Already works! The global hook in `_app.tsx` handles all window scroll restoration.

### Option 2: Scrollable Containers (Sidebars, etc.)

```tsx
import { useContainerScrollRestoration } from '@/hooks/useScrollRestoration'

export default function MyPage() {
  const sidebarRef = useContainerScrollRestoration('my-sidebar')
  
  return (
    <aside ref={sidebarRef} className="overflow-y-auto h-screen">
      {/* Your scrollable content */}
    </aside>
  )
}
```

### Option 3: Manual Control

```tsx
import { saveScrollPosition, restoreScrollPosition } from '@/utils/scrollUtils'

// Save current position
saveScrollPosition('my-unique-key')

// Restore later
restoreScrollPosition('my-unique-key')
```

## 🎨 Advanced Features

### Track Scroll Position

```tsx
import { useScrollPosition } from '@/hooks/useScrollHelpers'

export default function MyComponent() {
  const { y } = useScrollPosition()
  
  return <div>Current scroll: {y}px</div>
}
```

### Detect Scroll Direction

```tsx
import { useScrollDirection } from '@/hooks/useScrollHelpers'

export default function MyNavbar() {
  const direction = useScrollDirection()
  
  return (
    <nav className={direction === 'down' ? 'hidden' : 'visible'}>
      {/* Hide navbar on scroll down */}
    </nav>
  )
}
```

## 📚 API Reference

See `docs/SCROLL_RESTORATION.md` for complete API documentation.

## ✅ Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ⚠️ IE11 (partial support)

## 🔧 Configuration

All configuration is in the hook files. Key settings:

- **Storage**: sessionStorage (clears when tab closes)
- **Throttle**: 100ms for scroll tracking
- **Expiration**: 1 hour for saved positions

## 🐛 Troubleshooting

### Not working?
1. Check browser console for errors
2. Verify sessionStorage is enabled
3. Ensure you're using client-side navigation (not full page reload)

### Performance issues?
1. Reduce number of tracked containers
2. Increase throttle time
3. Clear old positions: `clearAllScrollPositions()`

## 📝 Examples

Visit `/scroll-demo` for a live interactive demonstration!

## 🤝 Contributing

To add new features:
1. Update hooks in `/hooks/useScrollRestoration.ts`
2. Add utilities in `/utils/scrollUtils.ts`
3. Document in `/docs/SCROLL_RESTORATION.md`
4. Test with `/pages/scroll-demo.tsx`

---

**Questions?** Check the full documentation in `docs/SCROLL_RESTORATION.md`
