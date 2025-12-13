import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGraduationCap, FaChartLine, FaCogs, FaRobot } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Revolutionizing the EdTech LMS Experience",
    role: "Assistant Product Manager",
    impact: "Operational Efficiency & Engagement",
    icon: FaGraduationCap,
    challenge: "The learning management system faced issues with academic dishonesty, manual grading, and student engagement.",
    solutions: [
      "AI-Powered Grading: Rolled out customizable rubrics that automated 80% of open-ended assessments, cutting grading time by 60%.",
      "Proctored Exams: Implemented screen monitoring to reduce academic dishonesty incidents by 70%.",
      "Gamification: Launched leaderboards for project-based learning, boosting student engagement by 45%.",
      "Smart Attendance: Deployed a QR code-based system achieving 100% accuracy and saving faculty 2+ hours weekly."
    ]
  },
  {
    title: "Data-Driven Placement Optimization",
    role: "Product Analyst/APM",
    impact: "Improved Matching Accuracy",
    icon: FaChartLine,
    challenge: "Improving the accuracy of matching students to placement opportunities and ensuring fair assessment.",
    solutions: [
      "Engineered a Performance Rating Score (PRS), a data-driven model that improved placement match accuracy by 30%.",
      "Developed usage analytics dashboards to ensure data integrity across academic courses.",
      "Optimized the Placement Portal using funnel analytics to enable faster candidate matching."
    ]
  },
  {
    title: "Enterprise Workflow Automation",
    role: "Assistant Product Manager",
    impact: "Reduced Manual Effort",
    icon: FaCogs,
    challenge: "High manual effort in internal operations and slow grievance resolution times.",
    solutions: [
      "Built N8N automation workflows, cutting manual effort by 40%.",
      "Revamped the Grievance Management platform with centralized tracking, reducing resolution time from 120 hours to 48 hours.",
      "Authored over 100 PRDs and wireframes in Figma, reducing engineering rework by 80%."
    ]
  },
  {
    title: "AI Portfolio Analysis",
    role: "Developer",
    impact: "Personal Project",
    icon: FaRobot,
    challenge: "A custom tool designed to analyze financial portfolios using Artificial Intelligence.",
    solutions: [
      "Overview: A custom tool designed to analyze financial portfolios using Artificial Intelligence.",
      "Link: View on GitHub"
    ]
  }
]

const Projects = () => {
  const projectsRef = useRef()

  useEffect(() => {
    gsap.fromTo(projectsRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: projectsRef.current, start: 'top 80%' }
    })
  }, [])

  return (
    <section id="projects" ref={projectsRef} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <Icon className="text-3xl text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{project.role} | {project.impact}</p>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.challenge}</p>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">The Solution:</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="mb-1">{solution}</li>
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

export default Projects