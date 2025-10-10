export function Contact() {
  return (
    <section className="section contact" aria-label="Contact">
      <div className="container">
        <div className="panel panel--inset">
          <h2>CONTACT CED</h2>
          <div className="contact-content">
            <p>
              READY TO START YOUR NEXT PROJECT? LET'S CONNECT AND DISCUSS 
              HOW WE CAN BRING YOUR IDEAS TO LIFE.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>EMAIL</h3>
                <a href="mailto:ced@example.com">ced@example.com</a>
              </div>
              <div className="contact-method">
                <h3>LINKEDIN</h3>
                <a href="https://linkedin.com/in/ced" target="_blank">linkedin.com/in/ced</a>
              </div>
              <div className="contact-method">
                <h3>GITHUB</h3>
                <a href="https://github.com/ced" target="_blank">github.com/ced</a>
              </div>
              <div className="contact-method">
                <h3>PHONE</h3>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="contact-cta">
              <a className="btn primary" href="mailto:ced@example.com">SEND MESSAGE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
