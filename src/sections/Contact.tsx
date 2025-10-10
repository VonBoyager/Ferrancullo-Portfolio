import React from 'react'

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="container">
        <div className="panel panel--alt panel--inset">
          <h2>Contact</h2>
          <div className="card">
            <p>Open to collaborations and interesting problems.</p>
            <div className="links">
              <a className="btn primary" href="mailto:hello@example.com">Email</a>
              <a className="btn ghost" href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



