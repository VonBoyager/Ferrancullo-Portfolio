// React import not needed with new JSX transform
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollAnimations } from './components/ScrollAnimations'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Education } from './sections/Education/Education'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Certification } from './sections/Certification'
import { Advocacy } from './sections/Advocacy'
import { Portfolio } from './sections/Portfolio'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="app-root">
      <div className="bg-gradient" />
      <div className="bg-grain" />

      <Navbar />
      <ScrollAnimations>
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Certification />
          <Advocacy />
          <Portfolio />
          <Contact />
        </main>
      </ScrollAnimations>
      <Footer />
    </div>
  )
}



