import { usePageAnimation } from '../hooks/usePageAnimation'
import { useState } from 'react'

export function Portfolio() {
  const { isVisible, isExiting } = usePageAnimation()
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section className={`section portfolio ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Portfolio">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>PORTFOLIO PROJECTS</h2>
          <div className="grid">
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>YOUTUBE</h3>
              <div className="description">
                CREATIVE VIDEO CONTENT AND EDITING PORTFOLIO. 
                SHOWCASING VIDEO EDITING SKILLS, CREATIVE PROJECTS, AND DIGITAL CONTENT CREATION.
              </div>
              <div className="card-actions">
                <a className="btn primary" href="https://ytjobs.co/talent/vitrine/45782" target="_blank">VIEW PORTFOLIO</a>
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>KOBO</h3>
              <div className="description">
                SENTIMENT ANALYZER FOR EMPLOYEE REVIEWS. 
                ADVANCED NLP TOOL THAT PROCESSES AND ANALYZES EMPLOYEE FEEDBACK TO EXTRACT INSIGHTS, 
                IDENTIFY TRENDS, AND PROVIDE ACTIONABLE RECOMMENDATIONS FOR HR DEPARTMENTS.
              </div>
              <div className="card-actions">
                <button 
                  className="btn primary" 
                  onClick={() => setShowPopup(true)}
                >
                  VIEW PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stylized Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>KOBO PROJECT</h3>
              <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
            </div>
            <div className="popup-body">
              <div className="work-in-progress">
                <div className="progress-icon">⚙️</div>
                <h4>WORK IN PROGRESS</h4>
                <p>THIS PROJECT IS CURRENTLY UNDER CONSTRUCTION.</p>
                <p>COMING SOON WITH INNOVATIVE FEATURES!</p>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
            <div className="popup-footer">
              <button className="btn primary" onClick={() => setShowPopup(false)}>
                UNDERSTOOD
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


