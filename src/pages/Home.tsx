import { usePageAnimation } from '../hooks/usePageAnimation'

export function Home() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section hero ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Home">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <div className="hero-content">
            <h1>
              CED - FULL STACK DEVELOPER
              <span className="fade"> & DIGITAL ARTIST</span>
            </h1>
            <p className="lede">
              PASSIONATE ABOUT CREATING INNOVATIVE SOLUTIONS AND PUSHING THE BOUNDARIES OF WEB TECHNOLOGY.
            </p>
            <div className="hero-cta">
              <a className="btn primary" href="/portfolio">VIEW PROJECTS</a>
              <a className="btn ghost" href="/contact">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


