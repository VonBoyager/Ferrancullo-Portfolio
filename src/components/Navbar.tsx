import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const location = useLocation()
  
  const handleLinkClick = (targetPath: string) => {
    // Only trigger exit animations if navigating to a different page
    if (location.pathname !== targetPath) {
      // Set flag to indicate manual navigation
      sessionStorage.setItem('manualNavigation', 'true')
      
      // Trigger exit animations on all visible elements
      const sections = document.querySelectorAll('.section')
      const panels = document.querySelectorAll('.panel')
      const cards = document.querySelectorAll('.card')
      
      // Add exit classes
      sections.forEach(section => {
        section.classList.remove('page-enter-active')
        section.classList.add('page-exit')
      })
      
      panels.forEach(panel => {
        panel.classList.remove('panel-enter')
        panel.classList.add('panel-exit')
      })
      
      cards.forEach(card => {
        card.classList.remove('card-enter')
        card.classList.add('card-exit')
      })
    }
  }
  
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={() => handleLinkClick('/')}>C</Link>
        <nav className="nav-links">
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>About</Link>
          <Link to="/education" className={location.pathname === '/education' ? 'active' : ''} onClick={() => handleLinkClick('/education')}>Education</Link>
          <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''} onClick={() => handleLinkClick('/experience')}>Experience</Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} onClick={() => handleLinkClick('/skills')}>Skills</Link>
          <Link to="/certification" className={location.pathname === '/certification' ? 'active' : ''} onClick={() => handleLinkClick('/certification')}>Certification</Link>
          <Link to="/advocacy" className={location.pathname === '/advocacy' ? 'active' : ''} onClick={() => handleLinkClick('/advocacy')}>Advocacy</Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''} onClick={() => handleLinkClick('/portfolio')}>Portfolio</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => handleLinkClick('/contact')}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}



