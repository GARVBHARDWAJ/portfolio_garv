import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ScrollIndicator from './components/ScrollIndicator'

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
}
