import { usePageAnimation } from '../hooks/usePageAnimation'
import { Link } from 'react-router-dom'

export function Home() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section hero ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Home">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <div className="hero-content">
            <h1>
              CED - DATA SCIENTIST
              <span className="fade"> & DIGITAL ARTIST</span>
            </h1>
            <p className="lede">
              PASSIONATE ABOUT CREATING INNOVATIVE SOLUTIONS AND PUSHING THE BOUNDARIES OF WEB TECHNOLOGY.
            </p>
            <div className="hero-cta">
              <Link className="btn primary" to="/portfolio">VIEW PROJECTS</Link>
              <Link className="btn ghost" to="/contact">CONTACT</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


