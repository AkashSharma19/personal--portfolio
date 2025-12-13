import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "Assistant Product Manager",
    company: "Masters' Union",
    period: "Apr 2025 – Present",
    description: "Focus: Strategy, Vision, and Operational Excellence."
  },
  {
    title: "Product Analyst",
    company: "Masters' Union",
    period: "Jun 2023 – May 2025",
    description: ""
  },
  {
    title: "Operations Intern",
    company: "Masters' Union",
    period: "Apr 2023 – Jun 2023",
    description: "Key Achievement: Developed 3 IT solutions cutting costs by 15%."
  },
  {
    title: "Research & Marketing Intern",
    company: "Readily Mobility Solutions",
    period: "May 2022 – Jul 2022",
    description: ""
  }
]

const Experience = () => {
  const experienceRef = useRef()

  useEffect(() => {
    gsap.fromTo(experienceRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: experienceRef.current, start: 'top 80%' }
    })
  }, [])

  return (
    <section id="experience" ref={experienceRef} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Experience Timeline</h2>
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="flex mb-8">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full shadow-lg"></div>
                {index < experiences.length - 1 && <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2"></div>}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                {exp.description && <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience