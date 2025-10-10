import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const location = useLocation()
  
  const handleLinkClick = () => {
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
  
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={handleLinkClick}>C</Link>
        <nav className="nav-links">
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>About</Link>
          <Link to="/education" className={location.pathname === '/education' ? 'active' : ''} onClick={handleLinkClick}>Education</Link>
          <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''} onClick={handleLinkClick}>Experience</Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} onClick={handleLinkClick}>Skills</Link>
          <Link to="/certification" className={location.pathname === '/certification' ? 'active' : ''} onClick={handleLinkClick}>Certification</Link>
          <Link to="/advocacy" className={location.pathname === '/advocacy' ? 'active' : ''} onClick={handleLinkClick}>Advocacy</Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''} onClick={handleLinkClick}>Portfolio</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}



