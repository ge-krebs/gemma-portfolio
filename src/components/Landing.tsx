import text from '../data/text.json'
import { ArrowDown } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
// import { useState, useEffect } from 'react'

// function typewriter (text, speed) {
//     useEffect(() => {

//     })
// }

function Landing ({ reference, onSkillsClick }) {
return (
    <>
    <div id="landing" ref={reference} className="p-5 md:p-20 h-screen">
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-2/5 h-1/2 md:h-full flex items-center justify-center">
          <img className="w-full h-full object-contain" src="memoji-laptop.png" />
        </div>
        <div className="md:w-3/5 h-1/2 md:h-full">
          <div className="flex flex-col text-base h-full justify-center">
            <h1 className=" text-5xl md:text-7xl font-poppins font-bold">
              <Typewriter words={[text.landing.title]} loop={1}/>
              👋
            </h1>
            <p className="pt-4">
                <span className="text-accent text-2xl font-poppins font-light">{text.landing.name}</span>
                {text.landing.body}
            </p>
            <p className="pt-4">
                {text.landing.subBody}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center md:pt-1">
        <button onClick={onSkillsClick}><ArrowDown /></button>
      </div>
    </div>
    </>
  )
}

export default Landing