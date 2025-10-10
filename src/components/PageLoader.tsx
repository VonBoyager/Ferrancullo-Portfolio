import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const location = useLocation()

  useEffect(() => {
    // Check if this is the initial load (boot sequence hasn't been shown yet)
    const hasShownBoot = localStorage.getItem('bootSequenceShown')
    
    // Don't show page loader during initial boot sequence
    if (!hasShownBoot) {
      return
    }

    // Check if this is a manual navigation (not from boot sequence redirect)
    const isManualNavigation = sessionStorage.getItem('manualNavigation')
    
    // Only show page loader for manual navigation (user clicking links)
    if (isManualNavigation) {
      setIsLoading(true)
      setLoadingText('LOADING PAGE...')
      
      const loadingMessages = [
        'ACCESSING DATABASE...',
        'LOADING CONTENT...',
        'RENDERING INTERFACE...',
        'ESTABLISHING CONNECTION...',
        'VERIFYING DATA INTEGRITY...',
        'LOADING COMPLETE.'
      ]

      let messageIndex = 0
      const messageTimer = setInterval(() => {
        if (messageIndex < loadingMessages.length - 1) {
          messageIndex++
          setLoadingText(loadingMessages[messageIndex])
        } else {
          clearInterval(messageTimer)
          setTimeout(() => {
            setIsLoading(false)
            sessionStorage.removeItem('manualNavigation')
          }, 500)
        }
      }, 200)

      return () => clearInterval(messageTimer)
    } else {
      // If not manual navigation, don't show page loader
      setIsLoading(false)
    }
  }, [location.pathname])


  if (!isLoading) return null

  return (
    <div className="page-loader">
      <div className="loader-terminal">
        <div className="loader-header">
          <span className="loader-prompt">ced@portfolio:~$</span>
          <span className="loader-cursor">_</span>
        </div>
        <div className="loader-content">
          <div className="loader-line">
            <span className="loader-prefix">&gt;</span>
            <span className="loader-text">{loadingText}</span>
          </div>
          <div className="loader-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
