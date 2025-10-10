import { usePageAnimation } from '../hooks/usePageAnimation'
import { Footer } from '../components/Footer'

export function Experience() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section experience ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Experience">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          <div className="grid">
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>FREELANCE VIDEO EDITOR</h3>
              <div className="position">INDEPENDENT CONTRACTOR</div>
              <div className="period">2023 - PRESENT</div>
              <div className="description">
                PROVIDING PROFESSIONAL VIDEO EDITING SERVICES USING PREMIERE PRO AND AFTER EFFECTS. 
                SPECIALIZING IN CREATIVE VIDEO PRODUCTION, MOTION GRAPHICS, AND POST-PRODUCTION 
                WORKFLOWS. DELIVERING HIGH-QUALITY VISUAL CONTENT FOR VARIOUS CLIENTS AND PROJECTS.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}


