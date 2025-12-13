import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaUser } from 'react-icons/fa'

const Hero = () => {
  const heroRef = useRef()

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
  }, [])

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 pt-20">
      <div className="text-center max-w-4xl mx-auto px-4">
        <FaUser className="text-6xl text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
        <h2 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 mb-4">Akash Sharma</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Building Data-Driven Products & Scalable Operations
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Assistant Product Manager with a focus on EdTech, Automation, and Analytics. I bridge the gap between user needs and engineering execution to deliver high-impact solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-primary hover:scale-105 transition-transform duration-200">View My Work</a>
          <a href="#contact" className="btn-secondary hover:scale-105 transition-transform duration-200">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero