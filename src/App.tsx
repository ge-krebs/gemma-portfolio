import './App.css'
import Landing from './components/Landing.tsx'
import Nav from './components/Nav.tsx'
import Experience from './components/Experience.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
// import Projects from './components/Projects.tsx'
import { useRef } from 'react'

function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  const scrollTo = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <>
    <Nav
      onHomeClick={() => scrollTo(homeRef)}
      onSkillsClick={() => scrollTo(skillsRef)}
      onExperienceClick={() => scrollTo(experienceRef)}
      onContactClick={() => scrollTo(contactRef)}
      onProjectsClick={() => scrollTo(projectRef)}
    />
    <Landing reference={homeRef} onSkillsClick={() => scrollTo(skillsRef)} />
    <Skills reference={skillsRef} onExperienceClick={() => scrollTo(experienceRef)}/>
    <Experience reference={experienceRef} onProjectsClick={() => scrollTo(projectRef)} />
    {/* <Projects reference={projectRef} onContactClick={() => scrollTo(contactRef)} /> */}
    <Contact reference={contactRef} />
    <Footer />
    </>
  )
}

export default App
