import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCw } from 'lucide-react'

interface ScrollRestorationIndicatorProps {
  /** Show indicator when scroll restoration is active */
  show?: boolean
  /** Position of the indicator */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  /** Auto-hide after this many milliseconds */
  autoHideDuration?: number
}

/**
 * Visual indicator that shows when scroll position is being restored
 * Useful for debugging or providing user feedback
 */
export default function ScrollRestorationIndicator({
  show = false,
  position = 'bottom-right',
  autoHideDuration = 2000,
}: ScrollRestorationIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      
      if (autoHideDuration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false)
        }, autoHideDuration)
        
        return () => clearTimeout(timer)
      }
    } else {
      setIsVisible(false)
    }
  }, [show, autoHideDuration])

  const positionClasses = {
    'top-right': 'top-24 right-4',
    'top-left': 'top-24 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: position.startsWith('top') ? -20 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: position.startsWith('top') ? -20 : 20 }}
          transition={{ duration: 0.3 }}
          className={`fixed ${positionClasses[position]} z-50 pointer-events-none`}
        >
          <div className="bg-gs-blue text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 backdrop-blur-sm bg-opacity-95">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <RotateCw className="w-5 h-5" />
            </motion.div>
            <div>
              <p className="font-semibold text-sm">Restoring scroll position...</p>
              <p className="text-xs text-white/80">Returning to where you left off</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
