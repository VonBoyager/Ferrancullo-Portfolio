import { useEffect, useRef } from 'react'

interface ScrollAnimationsProps {
  children: React.ReactNode
}

export function ScrollAnimations({ children }: ScrollAnimationsProps) {
  const observerRef = useRef(null)

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll('.section')
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section)
      }
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return <>{children}</>
}

