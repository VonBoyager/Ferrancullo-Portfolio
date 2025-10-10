import { usePageAnimation } from '../hooks/usePageAnimation'

export function Footer() {
  const { isVisible, isExiting } = usePageAnimation()

  return (
    <footer className={`footer ${isVisible ? 'footer-enter' : ''} ${isExiting ? 'footer-exit' : ''}`}>
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-text">© 2024 CEDRIC FERRANCULLO</span>
        </div>
        <div className="footer-right">
          <span className="footer-text">TERMINAL PORTFOLIO v1.0</span>
        </div>
      </div>
    </footer>
  )
}