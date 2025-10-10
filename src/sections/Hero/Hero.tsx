// React import not needed with new JSX transform

export function Hero() {
  return (
    <section className="section hero" aria-label="Hero">
      <div className="container">
        <div className="panel panel--inset">
          <div className="hero-content">
            <h1>
              CED - FULL STACK DEVELOPER
              <span className="fade"> & DIGITAL ARTIST</span>
            </h1>
            <p className="lede">
              PASSIONATE ABOUT CREATING INNOVATIVE SOLUTIONS AND PUSHING THE BOUNDARIES OF WEB TECHNOLOGY.
            </p>
            <div className="hero-cta">
              <a className="btn primary" href="#portfolio">VIEW PROJECTS</a>
              <a className="btn ghost" href="#contact">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

