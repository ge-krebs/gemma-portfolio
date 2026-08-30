import './App.css'
import Landing from './components/Landing.tsx'
import Nav from './components/Nav.tsx'
import Experience from './components/Experience.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import { useRef } from 'react'

function App() {
  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)

  const scrollTo = (elementRef) => {
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
    />
    <Landing reference={homeRef} onSkillsClick={() => scrollTo(skillsRef)} />
    <Skills reference={skillsRef} onExperienceClick={() => scrollTo(experienceRef)}/>
    <Experience reference={experienceRef} />
    <Contact />
    </>
  )
}

export default App
