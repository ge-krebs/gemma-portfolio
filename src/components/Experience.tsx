import text from '../data/text.json'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import NextArrow from './parts/NextArrow'

function Experience ({reference, onProjectsClick}) {
  const timelineData = [
    {
      "id": 1,
      "title": "Intermediate Software Engineer",
      "subtitle": "Previously Junior Software Engineer (Aug 2023 - Feb 2025)",
      "company": "Easy Crypto (acquired by Swyftx)",
      "date": "2023 - 2026",
      "type": "work",
      "about": ["Part of a small team of 3 responsible for customer-facing website and staff internal CRM, both built with Vue.js and PHP. Delivered end to end features, handled incoming bugs and led system upgrades for internal processes reducing response times for customer support staff.", "Led frontend development for the migration of 300,000+ customers to the Swyftx platform. Built a phased rollout with step-dependent UI, tracking screen interactions and removal of order functionality for fully migrated customers."]
    },
    {
      "id": 2,
      "title": "New Zealand Certificate in Applied Software Development",
      "company": "Dev Academy Aoteraroa",
      "date": "2023",
      "type": "study",
      "about": ["A 16 week intensive bootcamp style programme for full stack web development with a focus on real-world communication using AGILE methodology.", "Dev Academy offers a challenging experience working solo and in groups/pairs to resolve coding challenges and build projects."]
    },
    {
      "id": 4,
      "title": "Senior Support Specialist",
      "subtitle": "Previously Customer Support Specialist (Jun 2021 – Jul 2022)",
      "company": "Easy Crypto",
      "date": "2021 - 2023",
      "type": "work",
      "about": [ "First point of escalation for complex cryptocurrency queries and compliance related issues. Provided training and ongoing performance reviews to support staff.","Drove upgrade of Easy Crypto's helpdesk system to Intercom, designed inbox, built automated support bot from the ground up."]
    },
    {
      "id": 4,
      "title": "Diploma of Education - Web Development",
      "company": "Open Polytechnic New Zealand",
      "date": "2021 - 2022",
      "type": "study",
      "about": ["Delivered online this qualification teaches the skills to design, develop and implement websites and related services."]
    }
  ]
  return (
  <>
  <div ref={reference} className="w-dvw md:p-15 pt-10">
    <h2 className="p-5 font-poppins font-bold text-3xl text-center">
      {text.experience.title}
    </h2>
    <VerticalTimeline lineColor={'var(--color-text)'} >
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
        key={index}// sort line color
        animate={true}
        contentStyle={{ background: 'var(--color-bg)', color: 'var(--color-text)', border: '2px solid var(--color-text)' }}
        contentArrowStyle={{ borderRight: '7px solid  var(--color-text)' }}
        date={item.date}
        iconStyle={{ background: 'var(--color-text)', color: 'var(--color-bg)' }}
        icon={item.type == 'work' ? <BriefcaseBusiness /> : <GraduationCap />}
        >
          <h3 className="font-jetbrains font-semibold text-sm ">{item.title}</h3>
          { item.subtitle && ( <p className="italic" style={{fontWeight: 300, marginTop: 2, fontSize: '.6rem'}}>{item.subtitle}</p> )}
          <p className="font-poppins font-semibold text-accent" style={{marginTop: 2}}>{item.company}</p>
          {item.about.map((i, index) => (
            <p key={index} className="m-2 md:text-xs" style={{fontWeight: 300, fontSize: '.75rem'}}>{i}</p>
          ))}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    <p className="text-center text-sm m-4">{text.experience.seeMore}<a href="https://linkedin.com/in/gemmakrebs" target="_blank" className="pointer underline underline-offset-1 text-accent">{text.experience.linkText}</a></p>
    <NextArrow onSectionClick={onProjectsClick} />
  </div>
  </>
  )
}

export default Experience
