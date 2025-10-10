import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const location = useLocation()
  
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">C</Link>
        <nav className="nav-links">
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link>
          <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
          <Link to="/certification" className={location.pathname === '/certification' ? 'active' : ''}>Certification</Link>
          <Link to="/advocacy" className={location.pathname === '/advocacy' ? 'active' : ''}>Advocacy</Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}



