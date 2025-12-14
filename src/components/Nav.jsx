import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-6">
            <a href="#hero" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              AS
            </a>

            <div className="hidden md:flex items-center space-x-6">
              {[
                { href: '#hero', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#products', label: 'Products' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <FaBars className="text-gray-800 dark:text-gray-200 text-sm" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <div className="p-6 space-y-6">
            {[
              { href: '#hero', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#products', label: 'Products' },
              { href: '#skills', label: 'Skills' },
              { href: '#experience', label: 'Experience' },
              { href: '#contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav