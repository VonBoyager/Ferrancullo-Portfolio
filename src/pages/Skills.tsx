import { usePageAnimation } from '../hooks/usePageAnimation'
import { Footer } from '../components/Footer'

export function Skills() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section skills ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Skills">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>TECHNICAL SKILLS</h2>
          <div className="grid">
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>PROGRAMMING LANGUAGES</h3>
              <div className="description">
                REACT, NODE.JS, PYTHON, JAVA, C++
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>VIDEO EDITING</h3>
              <div className="description">
                PREMIERE PRO, AFTER EFFECTS
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>DATA SCIENCE TOOLS</h3>
              <div className="description">
                PYTHON, STATISTICAL ANALYSIS, MACHINE LEARNING, 
                DATA VISUALIZATION, ANALYTICS
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>CREATIVE & TECHNICAL</h3>
              <div className="description">
                MOTION GRAPHICS, POST-PRODUCTION, CREATIVE PROBLEM-SOLVING, 
                VISUAL STORYTELLING, TECHNICAL WRITING
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}


