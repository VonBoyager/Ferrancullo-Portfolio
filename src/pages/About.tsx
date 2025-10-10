import { usePageAnimation } from '../hooks/usePageAnimation'
import { Footer } from '../components/Footer'

export function About() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section about ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="About">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>ABOUT CEDRIC FERRANCULLO</h2>
          <div className="about-content">
            <p>
              A STUDENT ASPIRING TO BE A DATA SCIENTIST WITH A TOUCH OF CREATIVE VIDEO CREATION. 
              PASSIONATE ABOUT BRIDGING THE GAP BETWEEN ANALYTICAL THINKING AND CREATIVE EXPRESSION.
            </p>
            <p>
              CURRENTLY PURSUING DATA SCIENCE WITH STRONG FOUNDATIONS IN PROGRAMMING LANGUAGES 
              INCLUDING REACT, NODE.JS, PYTHON, JAVA, AND C++. COMBINING TECHNICAL EXPERTISE WITH 
              CREATIVE VIDEO EDITING SKILLS IN PREMIERE PRO AND AFTER EFFECTS.
            </p>
            <p>
              BELIEVES IN THE POWER OF DATA TO TELL COMPELLING STORIES AND AIMS TO CREATE 
              MEANINGFUL VISUAL NARRATIVES THAT BRING INSIGHTS TO LIFE. COMMITTED TO CONTINUOUS 
              LEARNING AND EXPLORING THE INTERSECTION OF TECHNOLOGY AND CREATIVITY.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}


