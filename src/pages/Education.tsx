import { usePageAnimation } from '../hooks/usePageAnimation'

export function Education() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section education ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Education">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>EDUCATION</h2>
          <div className="grid">
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>BACHELOR OF SCIENCE IN DATA SCIENCE</h3>
              <div className="degree">FEU INSTITUTE OF TECHNOLOGY</div>
              <div className="period">2022 - PRESENT</div>
              <div className="description">
                CURRENTLY PURSUING DATA SCIENCE WITH FOCUS ON STATISTICAL ANALYSIS, 
                MACHINE LEARNING, AND DATA VISUALIZATION. EXPLORING THE INTERSECTION 
                OF ANALYTICS AND CREATIVE PROBLEM-SOLVING.
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>STEM FIELD SPECIALIZATION</h3>
              <div className="degree">MOTHER TERESA SCHOOL</div>
              <div className="period">2014 - 2022</div>
              <div className="description">
                COMPLETED HIGH SCHOOL TO SENIOR HIGH SCHOOL WITH FOCUS ON STEM FIELD. 
                DEVELOPED STRONG FOUNDATION IN SCIENCE, TECHNOLOGY, ENGINEERING, 
                AND MATHEMATICS. PREPARED FOR TECHNICAL AND ANALYTICAL STUDIES.
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>ELEMENTARY EDUCATION</h3>
              <div className="degree">MONTESSORI DE SAN LORENZO</div>
              <div className="period">2013 - 2014</div>
              <div className="description">
                STUDIED 4TH GRADE IN MONTESSORI ENVIRONMENT, FOSTERING INDEPENDENT 
                LEARNING AND CREATIVE THINKING. DEVELOPED EARLY INTEREST IN 
                PROBLEM-SOLVING AND ANALYTICAL SKILLS.
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>EARLY CHILDHOOD EDUCATION</h3>
              <div className="degree">OUR LADY OF DIVINE GRACE</div>
              <div className="period">2008 - 2013</div>
              <div className="description">
                COMPLETED PRESCHOOL TO 3RD GRADE, ESTABLISHING FOUNDATIONAL LEARNING 
                SKILLS AND CURIOSITY FOR KNOWLEDGE. EARLY EXPOSURE TO STRUCTURED 
                LEARNING AND CREATIVE EXPRESSION.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


