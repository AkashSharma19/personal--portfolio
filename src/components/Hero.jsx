import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaStar } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
  >
    <div className="flex items-center justify-between bg-white border-2 border-black px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl">
      <div className="text-2xl font-black font-sans tracking-tighter">Akash.</div>
      
      <div className="hidden md:flex gap-8 font-medium">
        {[
          { name: 'Home', href: '#' },
          { name: 'About', href: '#about' },
          { name: 'Projects', href: '#projects' },
          { name: 'Experience', href: '#experience' }
        ].map((item) => (
          <a key={item.name} href={item.href} className="hover:underline decoration-2 underline-offset-4">
            {item.name}
          </a>
        ))}
      </div>

      <a href="#contact" className="bg-[#DFFF00] hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black px-6 py-2 rounded-full font-bold flex items-center gap-2">
        Let's Talk <FiArrowUpRight size={18} />
      </a>
    </div>
  </motion.nav>
);

const SocialButton = ({ Icon, href }) => (
  <motion.a 
    href={href}
    whileHover={{ scale: 1.1, rotate: -5 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 cursor-pointer"
  >
    <Icon size={20} />
  </motion.a>
);

const RotatingBadge = () => (
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="relative w-32 h-32 flex items-center justify-center"
  >
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
      <text className="text-[11px] font-bold uppercase tracking-widest">
        <textPath href="#circlePath" startOffset="0%">
          Strategy • Vision • Execution • Strategy •
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <FaStar fill="black" size={24} />
    </div>
  </motion.div>
);

const Marquee = () => (
  <>
    {/* First Marquee */}
    <div className="absolute bottom-8 left-0 right-0 z-40 bg-[#111] text-[#DFFF00] border-t-2 border-black py-3 rotate-[-4deg] scale-105 origin-bottom-left overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-8 text-xl font-black uppercase"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            Product Lifecycle Management (PLM) ✦ Vision & Strategy ✦ Roadmap Planning ✦ Wireframing ✦ User Experience (UX) ✦ User Feedback Loops ✦ Agile Methodologies ✦ Sprint Planning ✦ Documentation (PRDs, Changelogs) ✦
          </span>
        ))}
      </motion.div>
    </div>

    {/* Second Marquee */}
    <div className="absolute bottom-24 left-0 right-0 z-40 bg-[#DFFF00] text-[#111] border-t-2 border-black py-3 rotate-[4deg] scale-105 origin-bottom-left overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex gap-8 text-xl font-black uppercase"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            Power BI ✦ MS Excel ✦ Google Analytics ✦ Figma ✦ Miro ✦ Notion ✦ Loom ✦ Scribe ✦ Jira ✦ ClickUp ✦ N8N (Automation Workflows) ✦ Storylane ✦
          </span>
        ))}
      </motion.div>
    </div>
  </>
);

// --- Main Hero Component ---

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-[#E6F9C9] overflow-hidden font-sans text-black selection:bg-[#DFFF00]">
      <Navbar />

      {/* Main Content Grid */}
      <div className="relative w-full h-screen flex flex-col justify-end items-center pb-20 md:pb-0">
        
        {/* Layer 1: Background Massive Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 select-none pointer-events-none">
          <h1 className="text-[12vw] leading-none font-black text-transparent" style={{ WebkitTextStroke: '2px black', opacity: 0.1 }}>
            PRODUCT
            <br />
            MANAGER
          </h1>
        </div>

        {/* Layer 2: Character Image Placeholder */}
        {/* REPLACE src with your actual transparent PNG */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-[80vw] md:w-[40vw] max-w-[500px]"
        >
          <img 
            src="https://placehold.co/600x800/png?text=Your+Transparent+Image+Here" 
            alt="Akash Sharma" 
            className="w-full h-auto object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Layer 3: Name Blob */}
        <motion.div 
          initial={{ scale: 0, rotate: 10 }}
          animate={{ scale: 1, rotate: -2 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="absolute top-[55%] md:top-[60%] left-1/2 -translate-x-1/2 z-30 bg-[#111] text-white p-8 md:p-12 border-4 border-white shadow-xl"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">AKASH<br/>SHARMA</h2>
          </div>
        </motion.div>

        {/* Layer 4: Floating Elements */}
        
        {/* Left Social Stack */}
        <div className="absolute left-4 md:left-12 top-1/3 z-40 hidden md:flex flex-col">
          <SocialButton Icon={FaLinkedin} href="https://linkedin.com/in/akash-sharma-10091999" />
          <SocialButton Icon={FaGithub} href="https://github.com/AkashSharma19" />
          <SocialButton Icon={MdMail} href="mailto:sharmaakash4299@gmail.com" />
        </div>

        {/* Rotating Badge */}
        <div className="absolute left-[10%] top-[20%] z-20 hidden lg:block">
           <div className="bg-[#DFFF00] rounded-full p-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             <RotatingBadge />
           </div>
        </div>

        {/* Right Stats Card */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute right-4 md:right-16 top-1/2 z-40 bg-white p-4 pr-8 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 max-w-[250px]"
        >
          <div className="flex -space-x-3">
             {[1,2,3].map(i => (
               <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white ring-1 ring-black" />
             ))}
          </div>
          <div>
            <div className="text-2xl font-black">100+</div>
            <div className="text-xs font-bold text-gray-600">Features Shipped</div>
          </div>
        </motion.div>

      </div>

      {/* Marquee Footer */}
      <Marquee />
    </div>
  );
}