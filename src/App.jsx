import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingResumeButton from './components/FloatingResumeButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
      <ScrollToTop />
      <FloatingResumeButton />
    </div>
  )
}

export default App