/**
 * Scroll position management utilities
 * Provides functions to save, restore, and clear scroll positions
 */

const SCROLL_STORAGE_PREFIX = 'gs-izmir-scroll'

export interface ScrollState {
  x: number
  y: number
  timestamp: number
}

/**
 * Save current window scroll position with a key
 */
export function saveScrollPosition(key: string): void {
  const state: ScrollState = {
    x: window.scrollX,
    y: window.scrollY,
    timestamp: Date.now(),
  }
  sessionStorage.setItem(`${SCROLL_STORAGE_PREFIX}-${key}`, JSON.stringify(state))
}

/**
 * Restore scroll position by key
 */
export function restoreScrollPosition(key: string, options?: { smooth?: boolean }): boolean {
  const savedState = sessionStorage.getItem(`${SCROLL_STORAGE_PREFIX}-${key}`)
  
  if (!savedState) return false

  try {
    const state: ScrollState = JSON.parse(savedState)
    
    // Optional: Check if state is too old (e.g., > 1 hour)
    const maxAge = 60 * 60 * 1000 // 1 hour in milliseconds
    if (Date.now() - state.timestamp > maxAge) {
      clearScrollPosition(key)
      return false
    }

    window.scrollTo({
      left: state.x,
      top: state.y,
      behavior: options?.smooth ? 'smooth' : 'auto',
    })
    
    return true
  } catch (e) {
    console.error('Failed to restore scroll position:', e)
    return false
  }
}

/**
 * Clear saved scroll position by key
 */
export function clearScrollPosition(key: string): void {
  sessionStorage.removeItem(`${SCROLL_STORAGE_PREFIX}-${key}`)
}

/**
 * Clear all saved scroll positions
 */
export function clearAllScrollPositions(): void {
  const keys = Object.keys(sessionStorage)
  keys.forEach(key => {
    if (key.startsWith(SCROLL_STORAGE_PREFIX)) {
      sessionStorage.removeItem(key)
    }
  })
}

/**
 * Save scroll position of a specific element
 */
export function saveElementScrollPosition(elementId: string, key: string): void {
  const element = document.getElementById(elementId)
  if (!element) return

  const state: ScrollState = {
    x: element.scrollLeft,
    y: element.scrollTop,
    timestamp: Date.now(),
  }
  sessionStorage.setItem(`${SCROLL_STORAGE_PREFIX}-element-${key}`, JSON.stringify(state))
}

/**
 * Restore scroll position of a specific element
 */
export function restoreElementScrollPosition(elementId: string, key: string, options?: { smooth?: boolean }): boolean {
  const element = document.getElementById(elementId)
  if (!element) return false

  const savedState = sessionStorage.getItem(`${SCROLL_STORAGE_PREFIX}-element-${key}`)
  if (!savedState) return false

  try {
    const state: ScrollState = JSON.parse(savedState)
    
    element.scrollTo({
      left: state.x,
      top: state.y,
      behavior: options?.smooth ? 'smooth' : 'auto',
    })
    
    return true
  } catch (e) {
    console.error('Failed to restore element scroll position:', e)
    return false
  }
}

/**
 * Debounce function for scroll event handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function for scroll event handlers
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}
