import text from '../data/text.json'
import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect } from 'react'
import NextArrow from './parts/NextArrow'

interface LandingProps {
  reference: React.RefObject<HTMLDivElement> | null;
  onSkillsClick: () => void;
}

function Landing ({ reference, onSkillsClick }: LandingProps) {
const [smallScreen, setSmallScreen] = useState(window.innerHeight < 740);

useEffect(() => {
  function handleResize() {
    setSmallScreen(window.innerWidth < 768);
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

return (
    <>
    <div id="landing" ref={reference} className="p-5 md:p-20 h-screen">
      <div className="flex flex-col md:flex-row h-full">
        <div className={`md:w-2/5 md:h-full flex items-center justify-center ${smallScreen ? 'h-2/5' : 'h-1/2'}`}>
          <img className="w-full h-full object-contain" src="memoji-laptop.png" alt="girl with macbook emoji" />
        </div>
        <div className="md:w-3/5 h-1/2 md:h-full">
          <div className="flex flex-col text-base h-full justify-center">
            <h1 className=" text-5xl md:text-7xl font-poppins font-bold">
              <Typewriter words={[text.landing.title]} loop={1}/>
              👋
            </h1>
            <p className={`pt-4 ${smallScreen && 'text-sm'}`}>
                <span className="text-accent text-2xl font-poppins font-light">{text.landing.name}</span>
                {text.landing.body}
            </p>
            <p className={`pt-4 ${smallScreen && 'text-sm'}`}>
                {text.landing.subBody}
            </p>
          </div>
        </div>
      </div>
      <NextArrow onSectionClick={onSkillsClick} />
    </div>
    </>
  )
}

export default Landing