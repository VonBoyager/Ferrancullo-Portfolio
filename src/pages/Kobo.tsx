import { usePageAnimation } from '../hooks/usePageAnimation'
import { Link } from 'react-router-dom'

export function Kobo() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section kobo ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Kobo">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>KOBO PROJECT</h2>
          <div className="work-in-progress">
            <div className="progress-icon">⚙️</div>
            <h3>WORK IN PROGRESS</h3>
            <p>SENTIMENT ANALYZER FOR EMPLOYEE REVIEWS</p>
            <p>ADVANCED NLP TOOL THAT PROCESSES AND ANALYZES EMPLOYEE FEEDBACK TO EXTRACT INSIGHTS, IDENTIFY TRENDS, AND PROVIDE ACTIONABLE RECOMMENDATIONS FOR HR DEPARTMENTS.</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <p className="coming-soon">COMING SOON WITH INNOVATIVE FEATURES!</p>
          </div>
            <div className="card-actions" style={{ justifyContent: 'center' }}>
              <Link to="/portfolio" className="btn primary">
                BACK TO PORTFOLIO
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}