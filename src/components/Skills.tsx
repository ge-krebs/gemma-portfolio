import text from '../data/text.json'
import NextArrow from './parts/NextArrow'

function Skills ({ reference, onExperienceClick }) {
  return (
    <>
    <div ref={reference} className="w-dvw md:p-15 pt-10 p-5">
      <h2 className="flex md:justify-center pb-5 font-poppins font-bold text-3xl text-center">
        {text.skills.title}
      </h2>
        {text.skills.categories.map((i, index) => (
          <div className="flex flex-col pb-4 pt-4 md:items-center" key={index}>
            <h3 className="font-poppins font-semibold">{i.title}</h3>
            <div className="flex flex-row gap-2 pt-2 flex-wrap">
                {text.skills.categories[index].skills.map((item, index) => (
                <button key={index} className="min-w-20 border rounded-sm p-1 clean-box-shadow bg-bg dark:bg-white dark:text-bg font-jetbrains">
                  {item}
                </button>
                ))}
            </div>
          </div>
        ))}
      <NextArrow onSectionClick={onExperienceClick}/>
    </div>
    </>
  )
}

export default Skills