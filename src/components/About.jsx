import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef()

  useEffect(() => {
    gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' }
    })
  }, [])

  return (
    <section id="about" ref={aboutRef} className="section-padding bg-white dark:bg-gray-800">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="mb-6">
            I am an Assistant Product Manager based in Gurugram, passionate about solving complex problems through technology and data. Currently driving strategy and operational excellence at Masters' Union, I specialize in reducing friction in user journeys and optimizing internal workflows.
          </p>
          <p className="mb-6">
            With a PGDM from the Management Development Institute and a background in Mathematics, I combine analytical rigor with creative product thinking. My work has been recognized with 2 Director's Awards for leading high-impact innovations.
          </p>
          <p>
            When I'm not managing product lifecycles, I am building AI-powered tools to analyze financial portfolios.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About