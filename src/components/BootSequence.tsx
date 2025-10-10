import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function BootSequence() {
  const navigate = useNavigate()
  
  const bootLines = [
    'INITIALIZING CED PORTFOLIO SYSTEM...',
    'LOADING TERMINAL INTERFACE...',
    'ESTABLISHING CONNECTION...',
    'VERIFYING SYSTEM INTEGRITY...',
    'LOADING CRT DISPLAY DRIVERS...',
    'INITIALIZING SCANLINE RENDERER...',
    'ESTABLISHING SECURE CONNECTION...',
    'LOADING PORTFOLIO DATA...',
    'SYSTEM READY.',
    'WELCOME TO CED\'S RESUME.'
  ]

  // Check if boot sequence has already been shown
  let hasShownBefore = false
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = localStorage.getItem('bootSequenceShown')
    hasShownBefore = stored === 'true'
  }

  // Add global function to reset boot sequence for testing
  (window as any).resetBootSequence = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('bootSequenceShown')
    }
    window.location.reload()
  }

  // Add global function to force show boot sequence
  (window as any).showBootSequence = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('bootSequenceShown')
    }
    window.location.reload()
  }

  // Add global function to clear localStorage for testing
  (window as any).clearBootSequence = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('bootSequenceShown')
      console.log('BootSequence: localStorage cleared')
    }
  }

  // Use useEffect to handle animation after component mounts
  useEffect(() => {
    // Only run animation if boot sequence hasn't been shown
    if (hasShownBefore) return

    // Use a more robust global flag system
    const animationKey = 'bootSequenceAnimation_' + Date.now()
    if ((window as any).bootSequenceActive) {
      console.log('Boot sequence already active, skipping...')
      return
    }
    ;(window as any).bootSequenceActive = animationKey

    try {
      const container = document.getElementById('boot-lines')
      if (!container) {
        ;(window as any).bootSequenceActive = null
        return
      }

      // Clear any existing content first
      container.innerHTML = ''
      
      // Make boot lines visible when animation starts
      container.style.opacity = '1'

      let currentIndex = 0
      let animationTimer: number | null = null
      let isAnimationComplete = false

      function addLine() {
        // Check if this is still the active animation
        if ((window as any).bootSequenceActive !== animationKey || isAnimationComplete) {
          return
        }

        try {
          if (currentIndex >= bootLines.length) {
            // Animation complete
            isAnimationComplete = true
            ;(window as any).bootSequenceActive = null
            return
          }
          
          const lineDiv = document.createElement('div')
          lineDiv.className = 'boot-line'
          lineDiv.innerHTML = '<span class="boot-prefix">&gt;</span><span class="boot-text">' + bootLines[currentIndex] + '</span>'
          container?.appendChild(lineDiv)
          
          currentIndex++
          animationTimer = setTimeout(() => addLine(), 300)
        } catch (error) {
          console.error('Error adding boot line:', error)
          isAnimationComplete = true
          ;(window as any).bootSequenceActive = null
        }
      }

      // Start animation after a short delay
      setTimeout(() => addLine(), 100)

      // Auto-redirect to home after showing boot sequence
      const redirectTimer = setTimeout(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('bootSequenceShown', 'true')
        }
        // Hide boot sequence before redirect
        const bootSequence = document.querySelector('.boot-sequence') as HTMLElement
        if (bootSequence) {
          bootSequence.style.opacity = '0'
          bootSequence.style.transition = 'opacity 0.5s ease-out'
        }
        // Navigate after fade out
        setTimeout(() => {
          navigate('/')
        }, 500)
      }, 5000) // 5 seconds delay to allow animation to complete

      return () => {
        clearTimeout(redirectTimer)
        if (animationTimer) clearTimeout(animationTimer)
        isAnimationComplete = true
        if ((window as any).bootSequenceActive === animationKey) {
          ;(window as any).bootSequenceActive = null
        }
      }
    } catch (error) {
      console.error('BootSequence useEffect error:', error)
      ;(window as any).bootSequenceActive = null
    }
  }, [navigate, bootLines])

  // If boot sequence has already been shown, don't show anything
  if (hasShownBefore) {
    return null
  }

  return (
    <div className="boot-sequence">
      <div className="boot-terminal">
        <div className="boot-header">
          <span className="boot-prompt">ced@portfolio:~$</span>
          <span className="boot-cursor">_</span>
        </div>
        <div className="boot-lines" id="boot-lines" style={{ opacity: 0 }}>
          {/* Lines will be added dynamically by JavaScript */}
        </div>
      </div>
    </div>
  )
}