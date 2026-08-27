import { useState } from "react"
import text from '../data/text.json'
import { ToggleRight, ToggleLeft, Sun, Moon, House, Menu, X } from 'lucide-react'

function Nav () {
  const [isDark, setDark] = useState(true)
  const [isOpen, setMenu] = useState(false)

  function toggle () { setDark(!isDark) }
  function toggleMenu () { setMenu(!isOpen) }

  return (
    <>
    {/* normal menu */}
    <div id="navbar" className="w-full bg-pale-blue">
      <div className="flex pl-5 pr-5 h-full">
        <div className="flex basis-1/2">
          <button onClick={toggleMenu} className="md:hidden pointer">{isOpen ? <X /> : <Menu />}</button>
          <div className="hidden md:block">
            <ul className="flex gap-4 items-center h-full font-poppins font-light">
              <House color="var(--color-navy)" />
              {text.nav.links.map((item, index) => (
                  <a href="#" key={index}>{item}</a>
              ))}
            </ul>
          </div>
        </div>
        {/* dark/light mode switcher */}
        {/* update colour */}
        <div className="flex gap-2 basis-1/2 justify-end">
            {/* remove button? */}
            <button>{isDark ? <Moon className="size-5"/> : <Sun className="size-5"/>}</button>
            <button onClick={toggle} className="pointer">{isDark ? <ToggleRight /> : <ToggleLeft />}</button>
            {/* <img className="w-10" src="memoji-laptop.png" /> */}
        </div>
      </div>
    </div>
    {/* burger menu */}
    {/* fix bug of menu dissappearing on scroll */}
    <nav className={`popup-nav ${isOpen ? '' : 'hidden'}`}>
      <div className="w-full h-full pt-10 pb-10">
        <ul className="flex flex-col gap-10 text-center justify-stretch">
          {text.nav.links.map((item, index) => (
            <a key={index} href="#" className="font-poppins font-light">{item}</a>
          ))}
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Nav