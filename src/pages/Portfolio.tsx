import { usePageAnimation } from '../hooks/usePageAnimation'
import { Link, Routes, Route } from 'react-router-dom'
import { Kobo } from './Kobo'
import { AiChatAssistant } from './AiChatAssistant'
import { DataVisualizationDashboard } from './DataVisualizationDashboard'
import { ECommercePlatform } from './ECommercePlatform'

export function Portfolio() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section portfolio ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="Portfolio">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>COMPLETED PROJECTS</h2>
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
          </div>
        </div>

        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>ONGOING PROJECTS</h2>
          <div className="grid">
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>KOBO</h3>
              <div className="description">
                SENTIMENT ANALYZER FOR EMPLOYEE REVIEWS.
                ADVANCED NLP TOOL THAT PROCESSES AND ANALYZES EMPLOYEE FEEDBACK TO EXTRACT INSIGHTS,
                IDENTIFY TRENDS, AND PROVIDE ACTIONABLE RECOMMENDATIONS FOR HR DEPARTMENTS.
              </div>
              <div className="card-actions">
                <Link to="/portfolio/kobo" className="btn primary">
                  VIEW PROJECT
                </Link>
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>AI-CHAT ASSISTANT</h3>
              <div className="description">
                INTELLIGENT CONVERSATIONAL AI SYSTEM.
                BUILT WITH ADVANCED MACHINE LEARNING TO PROVIDE NATURAL LANGUAGE INTERACTIONS,
                CONTEXT-AWARE RESPONSES, AND INTEGRATION WITH MULTIPLE PLATFORMS.
              </div>
              <div className="card-actions">
                <Link to="/portfolio/ai-chat-assistant" className="btn primary">
                  VIEW PROJECT
                </Link>
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>DATA VISUALIZATION DASHBOARD</h3>
              <div className="description">
                INTERACTIVE ANALYTICS PLATFORM.
                REAL-TIME DATA PROCESSING AND VISUALIZATION TOOL THAT TRANSFORMS COMPLEX DATASETS
                INTO INTUITIVE DASHBOARDS WITH CUSTOMIZABLE CHARTS AND REPORTING FEATURES.
              </div>
              <div className="card-actions">
                <Link to="/portfolio/data-visualization-dashboard" className="btn primary">
                  VIEW PROJECT
                </Link>
              </div>
            </div>
            <div className={`card ${isVisible ? 'card-enter' : ''} ${isExiting ? 'card-exit' : ''}`}>
              <h3>E-COMMERCE PLATFORM</h3>
              <div className="description">
                FULL-STACK ONLINE RETAIL SOLUTION.
                COMPLETE E-COMMERCE SYSTEM WITH USER MANAGEMENT, PAYMENT PROCESSING,
                INVENTORY MANAGEMENT, AND ADMIN PANEL FOR BUSINESS OPERATIONS.
              </div>
              <div className="card-actions">
                <Link to="/portfolio/ecommerce-platform" className="btn primary">
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="kobo" element={<Kobo />} />
          <Route path="ai-chat-assistant" element={<AiChatAssistant />} />
          <Route path="data-visualization-dashboard" element={<DataVisualizationDashboard />} />
          <Route path="ecommerce-platform" element={<ECommercePlatform />} />
        </Routes>
      </div>
    </section>
  )
}


