import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const location = useLocation()

  useEffect(() => {
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
        }, 500)
      }
    }, 200)

    return () => clearInterval(messageTimer)
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
