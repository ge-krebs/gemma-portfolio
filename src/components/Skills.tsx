import text from '../data/text.json'
import { ArrowDown } from "lucide-react"

function Skills () {
  function nextPage () {
    // hello
  }
  return (
    <>
    <div className="w-dvw md:p-15 pt-10">
      <h2 className="flex justify-center pb-5 font-poppins font-bold text-3xl text-center">
        {text.skills.title}
      </h2>
      <div className="flex justify-center flex-row gap-2 p-2 flex-wrap">
        <span className="inline-block align-middle">Languages</span>
        {text.skills.languages.map((item, index) => (
          <button key={index} className="bg-accent border rounded-sm p-1 clean-box-shadow">{item}</button>
        ))}
      </div>
      <div className="flex justify-center flex-row gap-2 p-2">
        <span>Frontend</span>
        {text.skills.frontend.map((item, index) => (
          <button key={index} className="bg-pale-green border rounded-sm p-1 clean-box-shadow">{item}</button>
        ))}
      </div>
      <div className="flex justify-center flex-row gap-2 p-2">
        <span>Backend</span>
        {text.skills.backend.map((item, index) => (
          <button key={index} className="bg-pale-pink border rounded-sm p-1 clean-box-shadow">{item}</button>
        ))}
      </div>
      <div className="flex justify-center flex-row gap-2 p-2">
        <span>Tools</span>
        {text.skills.tools.map((item, index) => (
          <button key={index} className="bg-pale-yellow border rounded-sm p-1 clean-box-shadow">{item}</button>
        ))}
      </div>
      <div className="w-full flex justify-center pt-4">
          <button onClick={nextPage}><ArrowDown /></button>
      </div>
    </div>
    </>
  )
}

export default Skills