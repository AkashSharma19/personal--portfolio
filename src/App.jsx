import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Playground from './components/Playground'
import Experience from './components/Experience'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingResumeButton from './components/FloatingResumeButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <About />
      <Products />
      <Playground />
      <Experience />
      <Footer />
      <ScrollToTop />
      <FloatingResumeButton />
    </div>
  )
}

export default App