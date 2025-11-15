import { usePageAnimation } from '../hooks/usePageAnimation'
import { Link } from 'react-router-dom'

export function ECommercePlatform() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section e-commerce-platform ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="E-Commerce Platform">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>E-COMMERCE PLATFORM PROJECT</h2>
          <div className="work-in-progress">
            <div className="progress-icon">⚙️</div>
            <h3>WORK IN PROGRESS</h3>
            <p>FULL-STACK ONLINE RETAIL SOLUTION</p>
            <p>COMPLETE E-COMMERCE SYSTEM WITH USER MANAGEMENT, PAYMENT PROCESSING, INVENTORY MANAGEMENT, AND ADMIN PANEL FOR BUSINESS OPERATIONS.</p>
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