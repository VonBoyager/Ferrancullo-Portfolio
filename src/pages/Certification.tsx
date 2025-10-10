export function Certification() {
  return (
    <section className="section certification" aria-label="Certification">
      <div className="container">
        <div className="panel panel--inset">
          <h2>CERTIFICATIONS & TRAINING</h2>
          <div className="grid">
            <div className="card">
              <h3>AWS CERTIFIED SOLUTIONS ARCHITECT</h3>
              <div className="issuer">AMAZON WEB SERVICES</div>
              <div className="date">2023</div>
              <div className="description">
                COMPREHENSIVE KNOWLEDGE OF AWS SERVICES, ARCHITECTURE BEST PRACTICES, 
                AND CLOUD SECURITY IMPLEMENTATION.
              </div>
            </div>
            <div className="card">
              <h3>REACT DEVELOPER CERTIFICATION</h3>
              <div className="issuer">META</div>
              <div className="date">2023</div>
              <div className="description">
                ADVANCED REACT CONCEPTS INCLUDING HOOKS, CONTEXT, STATE MANAGEMENT, 
                AND PERFORMANCE OPTIMIZATION.
              </div>
            </div>
            <div className="card">
              <h3>NODE.JS CERTIFIED DEVELOPER</h3>
              <div className="issuer">OPENJS FOUNDATION</div>
              <div className="date">2022</div>
              <div className="description">
                PROFICIENCY IN NODE.JS RUNTIME, ASYNC PROGRAMMING, 
                AND SERVER-SIDE DEVELOPMENT PATTERNS.
              </div>
            </div>
            <div className="card">
              <h3>DOCKER CERTIFIED ASSOCIATE</h3>
              <div className="issuer">DOCKER INC.</div>
              <div className="date">2022</div>
              <div className="description">
                CONTAINERIZATION, ORCHESTRATION, AND DEVOPS PRACTICES 
                USING DOCKER AND KUBERNETES.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
