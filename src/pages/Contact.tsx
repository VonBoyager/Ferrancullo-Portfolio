import { usePageAnimation } from '../hooks/usePageAnimation'

export function Contact() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section contact ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Contact">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>CONTACT CEDRIC</h2>
          <div className="contact-content">
            <p>
              READY TO START YOUR NEXT PROJECT? LET'S CONNECT AND DISCUSS 
              HOW WE CAN BRING YOUR IDEAS TO LIFE. AVAILABLE FOR FREELANCE WORK, 
              COLLABORATIONS, AND CREATIVE PROJECTS.
            </p>
            <div className={`contact-methods ${isVisible ? 'card-enter' : ''}`}>
              <div className="contact-method card-enter">
                <h3>EMAIL</h3>
                <a href="mailto:ferrancullocedric@gmail.com">ferrancullocedric@gmail.com</a>
              </div>
              <div className="contact-method card-enter">
                <h3>LINKEDIN</h3>
                <a href="https://www.linkedin.com/in/cedric-aaron-ferrancullo-b46614239/" target="_blank">linkedin.com/in/cedric-aaron-ferrancullo-b46614239/</a>
              </div>
              <div className="contact-method card-enter">
                <h3>GITHUB</h3>
                <a href="https://github.com/VonBoyager" target="_blank">github.com/VonBoyager</a>
              </div>
              <div className="contact-method card-enter">
                <h3>PHONE</h3>
                <a href="tel:+639453204866">+63 945 3204 866</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


