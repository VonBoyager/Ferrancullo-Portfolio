import { useEffect, useState, useRef } from 'react'

export function usePageAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const animationTriggered = useRef(false)

  useEffect(() => {
    // Reset animation state when component mounts
    animationTriggered.current = false
    setIsVisible(false)
    setIsExiting(false)

    // Wait for BOTH boot sequence AND page loader to finish
    const checkAllLoaders = () => {
      // Prevent multiple animation triggers
      if (animationTriggered.current) {
        return
      }

      const bootSequence = document.querySelector('.boot-sequence')
      const pageLoader = document.querySelector('.page-loader')
      
      // Check if boot sequence is still visible (including opacity check)
      const isBootSequenceActive = bootSequence && 
        (bootSequence as HTMLElement).style.display !== 'none' && 
        (bootSequence as HTMLElement).offsetParent !== null &&
        getComputedStyle(bootSequence).opacity !== '0'
      
      // Check if page loader is still visible (including opacity check)
      const isPageLoaderActive = pageLoader && 
        (pageLoader as HTMLElement).style.display !== 'none' && 
        (pageLoader as HTMLElement).offsetParent !== null &&
        getComputedStyle(pageLoader).opacity !== '0'
      
      // Only start animations when BOTH are completely gone
      if (!isBootSequenceActive && !isPageLoaderActive) {
        // Mark animation as triggered to prevent duplicates
        animationTriggered.current = true
        
        // Both loaders are gone, start animations
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 0) // Instant response - no delay
        return () => clearTimeout(timer)
      } else {
        // One or both loaders still active, check again
        setTimeout(checkAllLoaders, 200)
      }
    }
    
    // Start checking after a small delay to ensure DOM is ready
    setTimeout(checkAllLoaders, 100)
  }, [])

  // Function to trigger exit animation
  const triggerExit = () => {
    setIsExiting(true)
    setIsVisible(false)
  }

  return { isVisible, isExiting, triggerExit }
}
