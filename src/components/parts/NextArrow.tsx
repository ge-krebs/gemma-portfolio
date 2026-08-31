import { ArrowDown } from "lucide-react"

function NextArrow ({ onSectionClick }) {
  return (
  <div className="w-full flex justify-center md:pt-1 text-accent">
    <button aria-label="Scroll to next section" onClick={onSectionClick}><ArrowDown /></button>
  </div>
  )
}

export default NextArrow