import text from '../data/text.json'
import { ArrowDown } from 'lucide-react'

function Experience ({reference}) {
  return (
  <>
  <div ref={reference} className="w-dvw h-dvh md:p-15 pt-10">
    <h2 className="p-5 font-poppins font-bold text-3xl">
      {text.experience.title}
    </h2>
    {/* update URL */}
    {/* <p className="text-center text-xs">{text.experience.seeMore}<a href="#" target="_blank" className="pointer underline underline-offset-1 text-pale-blue">{text.experience.linkText}</a></p> */}
    <div className="w-full flex justify-center md:pt-1">
        <button><ArrowDown /></button>
    </div>
  </div>
  </>
  )
}

export default Experience

//     <div className="p-5 flex flex-col md:flex-row justify-self-center gap-4 experience-card">
// {text.experience.roles.map((item, index) => (
//   <div key={index} className="p-2 border-solid border rounded-sm border-white clean-box-shadow bg-pale-blue">
//     <h3 className="text-lg font-poppins font-semibold">{item.title}</h3>
//     <p className="text-xs text-navy font-semibold italic">{item.subTitle}</p>
//     <ul className="list-inside text-sm pt-2">
//       <li>{item.tasks[0]}</li>
//       <li className="pt-2">{item.tasks[1]}</li>
//     </ul>
//   </div>
// ))}
// </div>