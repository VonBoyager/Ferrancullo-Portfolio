export function Skills() {
  return (
    <section className="section skills" aria-label="Skills">
      <div className="container">
        <div className="panel panel--inset">
          <h2>TECHNICAL SKILLS</h2>
          <div className="grid">
            <div className="card">
              <h3>FRONTEND DEVELOPMENT</h3>
              <div className="description">
                REACT, TYPESCRIPT, JAVASCRIPT, HTML5, CSS3, SASS, 
                NEXT.JS, VUE.JS, RESPONSIVE DESIGN
              </div>
            </div>
            <div className="card">
              <h3>BACKEND DEVELOPMENT</h3>
              <div className="description">
                NODE.JS, EXPRESS, PYTHON, DJANGO, POSTGRESQL, MONGODB, 
                RESTFUL APIs, GRAPHQL, MICROSERVICES
              </div>
            </div>
            <div className="card">
              <h3>CLOUD & DEVOPS</h3>
              <div className="description">
                AWS, DOCKER, KUBERNETES, CI/CD, GITHUB ACTIONS, 
                TERRAFORM, MONITORING, SCALING
              </div>
            </div>
            <div className="card">
              <h3>TOOLS & TECHNOLOGIES</h3>
              <div className="description">
                GIT, VS CODE, FIGMA, JIRA, SLACK, POSTMAN, 
                TESTING FRAMEWORKS, AGILE METHODOLOGY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
