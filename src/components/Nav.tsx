import { useState } from "react"
import text from '../data/text.json'
import DarkToggle from './parts/DarkToggle'
import { House, Menu, X } from 'lucide-react'

function Nav ({ onHomeClick, onSkillsClick, onExperienceClick}) {
  const [isOpen, setMenu] = useState(false)
  function toggleMenu () { setMenu(!isOpen) }
  
  function scrollToSection (section) {
    const sec = section.toLowerCase()
    console.log('scroll to', sec)
    switch (sec) {
      case "skills":
        onSkillsClick()
        break;
      case "home":
        onHomeClick()
        break;
      case "experience":
        onExperienceClick()
        break
    }
  }

  return (
    <>
    {/* normal menu */}
    <div id="navbar" className="w-full clean-box-shadow">
      <div className="flex pl-15 pr-15 md:pr-25 md:pl-25 h-full">
        <div className="flex basis-1/2">
          <button onClick={toggleMenu} className="md:hidden pointer">{isOpen ? <X /> : <Menu />}</button>
          <div className="hidden md:block">
            <ul className="flex gap-4 items-center h-full font-poppins font-light">
              <House onClick={() => scrollToSection('home')}/>
              {text.nav.links.map((item, index) => (
                  <a key={index} onClick={() => scrollToSection(item)}>{item}</a>
              ))}
            </ul>
          </div>
        </div>
        {/* dark/light mode switcher */}
        <div className="flex gap-2 basis-1/2 justify-end">
            <DarkToggle />
        </div>
      </div>
    </div>
    {/* burger menu */}
    <nav className={`popup-nav ${isOpen ? '' : 'hidden'} clean-box-shadow`}>
      <div className="w-full h-full pt-10 pb-10">
        <ul className="flex flex-col gap-10 text-center justify-stretch">
          {text.nav.links.map((item, index) => (
            <a key={index} href={`#${item}`} className="font-poppins font-light" onClick={toggleMenu}>{item}</a>
          ))}
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Nav