// React import not needed with new JSX transform
import './Hero.css'

export function Hero() {
  return (
    <section className="section hero" aria-label="Hero">
      <div className="container">
        <div className="panel panel--inset">
          <div className="hero-content">
            <h1>
              Minimal. Monochrome.
              <span className="fade"> Modern.</span>
            </h1>
            <p className="lede">
              I craft fast, elegant web experiences focused on clarity and feel.
            </p>
            <div className="hero-cta">
              <a className="btn primary" href="#portfolio">See Work</a>
              <a className="btn ghost" href="#contact">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

