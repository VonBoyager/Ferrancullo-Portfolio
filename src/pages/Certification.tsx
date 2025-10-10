import { usePageAnimation } from '../hooks/usePageAnimation'

export function Certification() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section certification ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Certification">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>CERTIFICATIONS & TRAINING</h2>
          <div className="grid">
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>PMI PROJECT MANAGEMENT READY</h3>
              <div className="issuer">PROJECT MANAGEMENT INSTITUTE</div>
              <div className="date">MARCH 12, 2025</div>
              <div className="description">
                CERTIFICATION IN PROJECT MANAGEMENT FUNDAMENTALS, INCLUDING PROJECT 
                PLANNING, EXECUTION, AND MONITORING. DEMONSTRATES PROFICIENCY IN 
                PROJECT MANAGEMENT METHODOLOGIES AND BEST PRACTICES.
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>CCNA INTRODUCTION TO NETWORKS</h3>
              <div className="issuer">CISCO SYSTEMS</div>
              <div className="date">JULY 20, 2024</div>
              <div className="description">
                CISCO CERTIFIED NETWORK ASSOCIATE CERTIFICATION COVERING NETWORKING 
                FUNDAMENTALS, ROUTING, SWITCHING, AND NETWORK SECURITY. COMPREHENSIVE 
                UNDERSTANDING OF NETWORK INFRASTRUCTURE AND PROTOCOLS.
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>IT SPECIALIST - PYTHON</h3>
              <div className="issuer">MICROSOFT</div>
              <div className="date">JULY 14, 2024</div>
              <div className="description">
                MICROSOFT IT SPECIALIST CERTIFICATION IN PYTHON PROGRAMMING. COVERS 
                PYTHON FUNDAMENTALS, DATA STRUCTURES, ALGORITHMS, AND APPLICATION 
                DEVELOPMENT. VALIDATES PROFICIENCY IN PYTHON PROGRAMMING CONCEPTS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


