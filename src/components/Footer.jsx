import React from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

const InputField = ({ placeholder, type = "text", className = "" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#DFFF00] focus:ring-1 focus:ring-[#DFFF00] transition-all ${className}`}
  />
);

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-[#050505] text-white py-24 overflow-hidden font-sans border-t-2 border-black">

      {/* Background Decor: The Green Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#DFFF00]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

        {/* LEFT COLUMN: Call to Action & Info */}
        <div className="flex flex-col justify-center">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#DFFF00] animate-pulse" />
            <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Say Hello</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
            Let's Work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFFF00] to-white">
              Together.
            </span>
          </h2>

          {/* Contact Details Stack */}
          <div className="space-y-6 mb-12">
             <div className="flex flex-col gap-1">
               <label className="text-xs font-bold text-gray-500 uppercase">Email Me</label>
               <a href="mailto:sharmaakash4299@gmail.com" className="text-base md:text-lg font-bold hover:text-[#DFFF00] transition-colors flex items-center gap-3">
                 <FiMail size={24} className="text-[#DFFF00]" /> sharmaakash4299@gmail.com
               </a>
             </div>

             <div className="flex flex-col gap-1">
               <label className="text-xs font-bold text-gray-500 uppercase">Call Me</label>
               <a href="tel:+918171846361" className="text-base md:text-lg font-bold hover:text-[#DFFF00] transition-colors flex items-center gap-3">
                 <FiPhone size={24} className="text-[#DFFF00]" /> +91 8171846361
               </a>
             </div>

             <div className="flex flex-col gap-1">
               <label className="text-xs font-bold text-gray-500 uppercase">Location</label>
               <p className="text-base md:text-lg font-bold flex items-center gap-3">
                 <FiMapPin size={24} className="text-[#DFFF00]" /> Gurugram, India
               </p>
             </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <SocialLink icon={FaLinkedin} href="https://linkedin.com/in/akash-sharma-10091999" />
            <SocialLink icon={FaGithub} href="https://github.com/AkashSharma19" />
            <SocialLink icon={FaTwitter} href="#" />
          </div>
        </div>

        {/* RIGHT COLUMN: The Form Card */}
        <div className="relative">
           {/* Decorative Thumbs Up Emoji (Floating) */}
           <motion.div
             animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-12 -right-6 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-[0px_0px_20px_rgba(255,255,255,0.2)]"
           >
             👍
           </motion.div>

           {/* Form Container */}
           <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/10 shadow-2xl relative z-10">
             <h3 className="text-lg font-bold mb-6">Input Form</h3>

             <form className="space-y-4">
               {/* Name Row */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs text-gray-400">First Name</label>
                   <InputField placeholder="Akash" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs text-gray-400">Last Name</label>
                   <InputField placeholder="Sharma" />
                 </div>
               </div>

               {/* Location Row */}
               <div className="space-y-2">
                 <label className="text-xs text-gray-400">Location</label>
                 <div className="relative">
                   <FiMapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                   <InputField placeholder="New York, United States" className="pl-10" />
                 </div>
               </div>

               {/* Phone Row */}
               <div className="space-y-2">
                 <label className="text-xs text-gray-400">Phone Number</label>
                 <div className="relative">
                    {/* Fake flag icon for visuals */}
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-3 bg-red-500 rounded-sm"></div>
                   <InputField placeholder="+91 99999 99999" className="pl-12" type="tel" />
                 </div>
               </div>

               {/* Text Area */}
               <div className="space-y-2">
                 <label className="text-xs text-gray-400">Describe your case *</label>
                 <textarea
                   rows="4"
                   placeholder="I need a product manager for..."
                   className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#DFFF00] focus:ring-1 focus:ring-[#DFFF00] resize-none transition-all"
                 ></textarea>
               </div>

               {/* Submit Button */}
               <button type="button" className="w-full bg-[#DFFF00] text-black font-bold py-4 rounded-xl mt-4 hover:bg-[#cce600] transition-colors flex items-center justify-center gap-2">
                 Sent Message <div className="bg-black text-[#DFFF00] rounded-full p-1"><FiSend size={14} /></div>
               </button>
             </form>
           </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-6 text-center text-gray-600 text-sm">
        © 2025 Akash Sharma. All Rights Reserved.
      </div>
    </footer>
  );
}