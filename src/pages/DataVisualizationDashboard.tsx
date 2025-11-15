import { usePageAnimation } from '../hooks/usePageAnimation'
import { Link } from 'react-router-dom'

export function DataVisualizationDashboard() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section data-visualization-dashboard ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Data Visualization Dashboard">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2 style={{ textAlign: 'center' }}>DATA VISUALIZATION DASHBOARD</h2>
          <div className="work-in-progress" style={{ textAlign: 'center' }}>
            <div className="progress-icon">⚙️</div>
            <h3>WORK IN PROGRESS</h3>
            <p>INTERACTIVE ANALYTICS PLATFORM</p>
            <p>REAL-TIME DATA PROCESSING AND VISUALIZATION TOOL THAT TRANSFORMS COMPLEX DATASETS INTO INTUITIVE DASHBOARDS WITH CUSTOMIZABLE CHARTS AND REPORTING FEATURES.</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <p className="coming-soon">COMING SOON WITH INNOVATIVE FEATURES!</p>
          </div>
          <div className="card-actions">
              <Link to="/portfolio" className="btn primary">
                BACK TO PORTFOLIO
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}