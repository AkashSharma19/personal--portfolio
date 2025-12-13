import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container-max text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Build Something Great</h2>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center">
            <FaEnvelope className="text-blue-400 mr-2" />
            <a href="mailto:sharmaakash4299@gmail.com" className="hover:text-blue-300 transition-colors">sharmaakash4299@gmail.com</a>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-400 mr-2" />
            <a href="tel:+918171846361" className="hover:text-blue-300 transition-colors">+91 8171846361</a>
          </div>
        </div>
        <p className="text-gray-400">© 2025 Akash Sharma. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer