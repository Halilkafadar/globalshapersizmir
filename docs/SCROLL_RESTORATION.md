# Scroll Position Persistence Documentation

## Overview

The Global Shapers İzmir Hub website now includes a comprehensive scroll position persistence system. This feature ensures that when users navigate away from a page and return (via browser back button or internal navigation), the page restores to the exact scroll position where they left off.

## Features

✅ **Automatic Window Scroll Restoration**: Main page scroll position is automatically saved and restored
✅ **Container Scroll Support**: Individual scrollable elements (sidebars, modals) can preserve their scroll state
✅ **Session-Based Storage**: Scroll positions persist throughout the browser session
✅ **Browser Back/Forward Support**: Works seamlessly with browser navigation
✅ **TypeScript Support**: Fully typed for better developer experience
✅ **Performance Optimized**: Uses throttling/debouncing to prevent performance issues

## Implementation

### 1. Global Scroll Restoration (Already Active)

The global scroll restoration is automatically enabled in `_app.tsx`. No additional code needed!

```tsx
// pages/_app.tsx
import { useScrollRestoration } from '@/hooks/useScrollRestoration'

export default function App({ Component, pageProps }: AppProps) {
  useScrollRestoration() // ✅ Already implemented
  return <Component {...pageProps} />
}
```

### 2. Container Scroll Restoration (For Sidebars, etc.)

For pages with scrollable containers (like sidebars), use the `useContainerScrollRestoration` hook:

```tsx
import { useContainerScrollRestoration } from '@/hooks/useScrollRestoration'

export default function MyPage() {
  // Create a ref for your scrollable container
  const sidebarRef = useContainerScrollRestoration('sidebar-id')

  return (
    <div>
      {/* Attach the ref to your scrollable element */}
      <aside ref={sidebarRef} className="overflow-y-auto h-screen">
        {/* Sidebar content */}
      </aside>
    </div>
  )
}
```

### 3. Manual Scroll Position Control

For advanced use cases, use the utility functions:

```tsx
import {
  saveScrollPosition,
  restoreScrollPosition,
  clearScrollPosition,
  saveElementScrollPosition,
  restoreElementScrollPosition,
} from '@/utils/scrollUtils'

// Save current window scroll position
saveScrollPosition('my-unique-key')

// Restore scroll position (returns true if successful)
const restored = restoreScrollPosition('my-unique-key')

// Save element scroll position
saveElementScrollPosition('element-id', 'unique-key')

// Restore element scroll position
restoreElementScrollPosition('element-id', 'unique-key')

// Clear specific position
clearScrollPosition('my-unique-key')
```

## Usage Examples

### Example 1: Homepage with Sections

```tsx
import ScrollRestoreWrapper from '@/components/ScrollRestoreWrapper'

export default function Home() {
  return (
    <ScrollRestoreWrapper>
      <main>
        <section id="hero">Hero Content</section>
        <section id="about">About Content</section>
        <section id="projects">Projects Content</section>
      </main>
    </ScrollRestoreWrapper>
  )
}
```

### Example 2: Page with Scrollable Sidebar

```tsx
import { useContainerScrollRestoration } from '@/hooks/useScrollRestoration'

export default function ProjectsPage() {
  const sidebarRef = useContainerScrollRestoration('projects-sidebar')

  return (
    <div className="flex">
      <aside 
        ref={sidebarRef}
        className="w-64 h-screen overflow-y-auto fixed left-0 top-0"
      >
        {/* Sidebar navigation items */}
      </aside>
      
      <main className="ml-64">
        {/* Main content */}
      </main>
    </div>
  )
}
```

### Example 3: Modal with Scroll Position

```tsx
import { useEffect } from 'react'
import { saveScrollPosition, restoreScrollPosition } from '@/utils/scrollUtils'

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Save scroll position when modal opens
      saveScrollPosition('before-modal')
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scroll position when modal closes
      document.body.style.overflow = ''
      restoreScrollPosition('before-modal')
    }
  }, [isOpen])

  return isOpen ? <div className="modal">{/* Modal content */}</div> : null
}
```

## API Reference

### Hooks

#### `useScrollRestoration()`
Enables automatic window scroll position persistence. Should be used in `_app.tsx`.

**Returns:** `{ isRestoring: boolean }`

#### `useContainerScrollRestoration(containerId: string)`
Enables scroll position persistence for a specific container element.

**Parameters:**
- `containerId`: Unique identifier for the container

**Returns:** `React.RefObject` - Attach this to your scrollable element

### Utility Functions

#### `saveScrollPosition(key: string): void`
Saves the current window scroll position.

#### `restoreScrollPosition(key: string, options?: { smooth?: boolean }): boolean`
Restores a previously saved window scroll position.

#### `saveElementScrollPosition(elementId: string, key: string): void`
Saves scroll position of a specific element.

#### `restoreElementScrollPosition(elementId: string, key: string, options?: { smooth?: boolean }): boolean`
Restores scroll position of a specific element.

#### `clearScrollPosition(key: string): void`
Clears a specific saved scroll position.

#### `clearAllScrollPositions(): void`
Clears all saved scroll positions.

## How It Works

1. **Manual Scroll Restoration**: Sets `window.history.scrollRestoration = "manual"` to prevent browser default behavior

2. **Route Change Detection**: Listens to Next.js router events:
   - `routeChangeStart`: Saves current scroll position before navigation
   - `routeChangeComplete`: Restores scroll position after navigation completes

3. **Session Storage**: Stores scroll positions in `sessionStorage` with a structured key format:
   - Window scroll: `gs-izmir-scroll-positions`
   - Container scroll: `gs-izmir-container-scroll-{containerId}`

4. **requestAnimationFrame**: Ensures DOM is fully rendered before scroll restoration

5. **Timestamp Tracking**: Stores timestamp to optionally expire old scroll positions (default: 1 hour)

## Browser Compatibility

✅ All modern browsers (Chrome, Firefox, Safari, Edge)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
⚠️ IE11: Partial support (basic functionality works, some features may be limited)

## Performance Considerations

- **Debouncing**: Scroll save operations are debounced (default: 150ms)
- **Throttling**: Available for high-frequency scroll event handlers
- **Memory**: Uses sessionStorage (5-10MB limit) - cleared when browser tab closes
- **requestAnimationFrame**: Ensures smooth scroll restoration without blocking rendering

## Troubleshooting

### Scroll position not restoring?

1. Check that `useScrollRestoration()` is called in `_app.tsx`
2. Ensure sessionStorage is not disabled in browser
3. Check browser console for errors

### Container scroll not working?

1. Verify the container has a unique `containerId`
2. Ensure the ref is properly attached to the scrollable element
3. Confirm the element has CSS `overflow: auto` or `overflow: scroll`

### Performance issues?

1. Use throttling for scroll event handlers
2. Limit the number of containers tracked
3. Clear old scroll positions periodically

## Best Practices

✅ Use descriptive keys for manual scroll positions
✅ Clear scroll positions when they're no longer needed
✅ Use container scroll restoration only for persistent UI elements
✅ Test with browser back/forward buttons
✅ Test on mobile devices

## Future Enhancements

Potential improvements for future versions:

- [ ] Redux/Zustand integration for app-wide state
- [ ] Smooth scroll animations on restoration
- [ ] Configurable expiration times
- [ ] localStorage fallback for longer persistence
- [ ] React Context API integration
- [ ] Virtual scroll support (for large lists)

## Migration Guide

If you have existing pages that need scroll restoration:

1. No changes needed for basic window scroll (already works globally)
2. For containers, add the hook:
   ```tsx
   const containerRef = useContainerScrollRestoration('unique-id')
   ```
3. Attach the ref to your scrollable element
4. Test navigation flow

## Support

For issues or questions:
- Check this documentation
- Review implementation in `/hooks/useScrollRestoration.ts`
- Check utility functions in `/utils/scrollUtils.ts`
- Test with browser DevTools (Application → Session Storage)

---

**Last Updated:** October 8, 2025
**Version:** 1.0.0
