import text from '../data/text.json'
import { ArrowDown, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Experience ({reference, onContactClick}) {
  const timelineData = [
    {
      "id": 1,
      "title": "Intermediate Software Engineer",
      "subtitle": "Previously Junior Software Engineer (Aug 2023 - Feb 2025)",
      "company": "Easy Crypto (acquired by Swyftx)",
      "date": "2023 - 2026",
      "type": "work",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper lobortis odio, id porttitor orci semper at. Maecenas eget malesuada arcu, sit amet convallis sem. Etiam efficitur pharetra sapien, et."
    },
    {
      "id": 2,
      "title": "New Zealand Certificate in Applied Software Development",
      "company": "Dev Academy Aoteraroa",
      "date": "2023",
      "type": "study",
      "about": "A 16 week intensive bootcamp style programme for full stack web development with a focus on real-world communication using AGILE methodology. Dev Academy offers a challenging experience working solo and in groups/pairs to resolve coding challenges and build projects."
    },
    {
      "id": 4,
      "title": "Senior Support Specialist",
      "subtitle": "Previously Customer Support Specialist (Jun 2021 – Jul 2022)",
      "company": "Easy Crypto",
      "date": "2021 - 2023",
      "type": "work",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper lobortis odio, id porttitor orci semper at. Maecenas eget malesuada arcu, sit amet convallis sem. Etiam efficitur pharetra sapien, et."
    },
    {
      "id": 4,
      "title": "Diploma of Education - Web Development",
      "company": "Open Polytechnic New Zealand",
      "date": "2021 - 2022",
      "type": "study",
      "about": "Delivered online this qualification teaches the skills to design, develop and implement websites and related services."
    }
  ]
  return (
  <>
  <div ref={reference} className="w-dvw md:p-15 pt-10">
    <h2 className="p-5 font-poppins font-bold text-3xl text-center">
      {text.experience.title}
    </h2>
    <VerticalTimeline lineColor={'var(--color-accent)'} >
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
        key={index}// sort line color
        animate={true}
        contentStyle={{ background: 'var(--color-bg)', color: 'var(--color-text)', border: '2px solid var(--color-accent)' }}
        contentArrowStyle={{ borderRight: '7px solid  var(--color-accent)' }}
        date={item.date}
        iconStyle={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}
        icon={item.type == 'work' ? <BriefcaseBusiness /> : <GraduationCap />}
        >
          <h3 className="font-jetbrains font-semibold text-sm ">{item.title}</h3>
          { item.subtitle && ( <p className="italic" style={{fontWeight: 300}}>{item.subtitle}</p> )}
          <p className="font-poppins font-semibold text-accent">{item.company}</p>
          <p className="m-2" style={{fontWeight: 300}}>{item.about}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    {/* update URL */}
    <p className="text-center text-sm m-4">{text.experience.seeMore}<a href="#" target="_blank" className="pointer underline underline-offset-1 text-accent">{text.experience.linkText}</a></p>
    <div className="w-full flex justify-center md:pt-1 text-accent">
        <button onClick={onContactClick}><ArrowDown /></button>
    </div>
  </div>
  </>
  )
}

export default Experience
