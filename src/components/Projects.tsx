import NextArrow from "./parts/NextArrow"
import text from "../data/text.json"

function Projects ({ reference, onContactClick }) {
    return (
    <>
    <div ref={reference} className="w-dvw md:p-15 pt-10 p-5">
      <h2 className="flex md:justify-center pb-5 font-poppins font-bold text-3xl text-center">
        {text.projects.title}
      </h2>
      <NextArrow onSectionClick={onContactClick}/>
    </div>
    </>
    )
}

export default Projects