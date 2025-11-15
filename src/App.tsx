import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { BootSequence } from './components/BootSequence'
import { PageLoader } from './components/PageLoader'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Education } from './pages/Education'
import { Experience } from './pages/Experience'
import { Skills } from './pages/Skills'
import { Certification } from './pages/Certification'
import { Advocacy } from './pages/Advocacy'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { Kobo } from './pages/Kobo'
import { AiChatAssistant } from './pages/AiChatAssistant'
import { DataVisualizationDashboard } from './pages/DataVisualizationDashboard'
import { ECommercePlatform } from './pages/ECommercePlatform'

export default function App() {
  return (
    <Router basename="/Ferrancullo-Portfolio">
      <div className="app-root">
        <div className="bg-gradient" />
        <div className="bg-grain" />
        
        <BootSequence />
        <PageLoader />
        
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/advocacy" element={<Advocacy />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/kobo" element={<Kobo />} />
            <Route path="/portfolio/ai-chat-assistant" element={<AiChatAssistant />} />
            <Route path="/portfolio/data-visualization-dashboard" element={<DataVisualizationDashboard />} />
            <Route path="/portfolio/ecommerce-platform" element={<ECommercePlatform />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}



