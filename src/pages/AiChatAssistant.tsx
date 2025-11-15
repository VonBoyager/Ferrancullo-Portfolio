import { usePageAnimation } from '../hooks/usePageAnimation'
import { Link } from 'react-router-dom'

export function AiChatAssistant() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <section className={`section ai-chat-assistant ${isVisible ? 'page-enter-active' : 'page-enter'} ${isExiting ? 'page-exit' : ''}`} aria-label="AI Chat Assistant">
      <div className="container">
        <div className={`panel panel--inset ${isVisible ? 'panel-enter' : ''} ${isExiting ? 'panel-exit' : ''}`}>
          <h2>AI-CHAT ASSISTANT PROJECT</h2>
          <div className="work-in-progress">
            <div className="progress-icon">⚙️</div>
            <h3>WORK IN PROGRESS</h3>
            <p>INTELLIGENT CONVERSATIONAL AI SYSTEM</p>
            <p>BUILT WITH ADVANCED MACHINE LEARNING TO PROVIDE NATURAL LANGUAGE INTERACTIONS, CONTEXT-AWARE RESPONSES, AND INTEGRATION WITH MULTIPLE PLATFORMS.</p>
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