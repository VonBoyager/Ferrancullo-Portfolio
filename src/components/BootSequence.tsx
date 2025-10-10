import { useState, useEffect } from 'react'

export function BootSequence() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentLine, setCurrentLine] = useState(0)
  
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
    'WELCOME TO CED PORTFOLIO TERMINAL.'
  ]

  useEffect(() => {
    // Check if boot sequence has already been shown
    const hasShownBefore = localStorage.getItem('bootSequenceShown')
    if (hasShownBefore) {
      setIsVisible(false)
      return
    }

    const timer = setInterval(() => {
      setCurrentLine((prev: number) => {
        if (prev < bootLines.length - 1) {
          return prev + 1
        } else {
          setTimeout(() => {
            setIsVisible(false)
            localStorage.setItem('bootSequenceShown', 'true')
          }, 1000)
          return prev
        }
      })
    }, 300)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="boot-sequence">
      <div className="boot-terminal">
        <div className="boot-header">
          <span className="boot-prompt">ced@portfolio:~$</span>
          <span className="boot-cursor">_</span>
        </div>
        <div className="boot-lines">
          {bootLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="boot-line">
              <span className="boot-prefix">&gt;</span>
              <span className="boot-text">{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
