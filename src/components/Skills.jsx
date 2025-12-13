import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaTasks, FaPalette, FaDatabase, FaTools } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const skills = {
  "Product Management": { items: ["Roadmapping", "Agile/Scrum", "User Feedback Loops", "PRDs & Wireframing"], icon: FaTasks },
  "Design & Prototyping": { items: ["Figma", "Miro", "Storylane (Demos)"], icon: FaPalette },
  "Data & Analytics": { items: ["Power BI", "MS Excel", "Google Analytics", "Funnel Optimisation"], icon: FaDatabase },
  "Tools": { items: ["Jira", "Notion", "ClickUp", "Loom", "N8N (Automation)"], icon: FaTools }
}

const Skills = () => {
  const skillsRef = useRef()

  useEffect(() => {
    gsap.fromTo(skillsRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: skillsRef.current, start: 'top 80%' }
    })
  }, [])

  return (
    <section id="skills" ref={skillsRef} className="section-padding bg-white dark:bg-gray-800">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Toolkit</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, data]) => {
            const Icon = data.icon
            return (
              <div key={category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Icon className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {data.items.map((item, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills