import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaLinkedin, FaGithub, FaStar } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const LINKS = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Products', id: 'products' },
  { name: 'Experience', id: 'experience' },
];

const AnimatedNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -200, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto bg-white border-2 border-black rounded-full px-2 py-2 md:px-6 md:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 md:gap-8 max-w-4xl w-full justify-between">

          <div
            className="font-black text-xl uppercase tracking-tighter cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Akash.
          </div>

          <div className="hidden md:flex items-center gap-2">
            {LINKS.map((link, index) => (
              <div
                key={link.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 cursor-pointer text-sm font-bold uppercase transition-colors"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-[#DFFF00] rounded-full border border-black z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px 0px #000", translate: "2px 2px" }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#DFFF00] text-black border-2 border-black px-5 py-2 rounded-full font-black uppercase text-xs md:text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_#000] transition-all"
            >
              Let's Talk <ArrowUpRight size={16} />
            </motion.button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="font-black text-2xl uppercase">Akash.</div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 border-2 border-black rounded-full hover:bg-[#DFFF00]">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-4xl font-black uppercase cursor-pointer hover:text-[#DFFF00] hover:stroke-black"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  {link.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center justify-between bg-white border-2 border-black px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-4xl">
        <div className="text-xl font-black font-sans tracking-tighter">Akash.</div>

        <div className="hidden md:flex gap-8 font-medium">
          {[
            { name: 'Home', href: '#' },
            { name: 'About', href: '#about' },
            { name: 'Products', href: '#products' },
            { name: 'Experience', href: '#experience' }
          ].map((item) => (
            <a key={item.name} href={item.href} className="hover:underline decoration-2 underline-offset-4">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-[#DFFF00] border-2 border-black p-3 rounded-full hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {isMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>

          <a href="#contact" className="bg-[#DFFF00] hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black px-4 py-3 md:px-6 md:py-2 rounded-full font-bold flex items-center gap-2 text-sm md:text-base min-h-[44px] flex items-center">
            Let's Talk <FiArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full mt-4 left-4 right-4 bg-white border-2 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hidden overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Experience', href: '#experience' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg hover:bg-[#DFFF00] font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

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
    <div className="absolute bottom-8 left-0 right-0 z-40 bg-[#111] text-[#DFFF00] border-t-2 border-black py-2 md:py-3 rotate-[-4deg] scale-105 origin-bottom-left overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-4 md:gap-8 text-sm md:text-lg font-black uppercase"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-4 md:gap-8">
            Product Lifecycle Management (PLM) ✦ Vision & Strategy ✦ Roadmap Planning ✦ Wireframing ✦ User Experience (UX) ✦ User Feedback Loops ✦ Agile Methodologies ✦ Sprint Planning ✦ Documentation (PRDs, Changelogs) ✦
          </span>
        ))}
      </motion.div>
    </div>

    {/* Second Marquee */}
    <div className="absolute bottom-20 md:bottom-24 left-0 right-0 z-40 bg-[#DFFF00] text-[#111] border-t-2 border-black py-2 md:py-3 rotate-[4deg] scale-105 origin-bottom-left overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex gap-4 md:gap-8 text-sm md:text-lg font-black uppercase"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="flex items-center gap-4 md:gap-8">
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
      <AnimatedNavbar />

      {/* Main Content Grid */}
      <div className="relative w-full h-screen flex flex-col justify-end items-center pb-20 md:pb-0">
        
        {/* Layer 1: Background Massive Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 select-none pointer-events-none">
          <h1 className="text-[10vw] leading-none font-black text-transparent" style={{ WebkitTextStroke: '2px black', opacity: 0.1 }}>
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
            src="/profile.png"
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
            <h2 className="text-2xl md:text-4xl font-black leading-tight">AKASH<br/>SHARMA</h2>
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
          className="absolute right-2 md:right-16 top-1/2 z-40 bg-white p-3 md:p-4 pr-4 md:pr-8 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 md:gap-4 max-w-[200px] md:max-w-[250px]"
        >
          <div className="flex -space-x-2 md:-space-x-3">
             {[1,2,3].map(i => (
               <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-white ring-1 ring-black" />
             ))}
          </div>
          <div>
            <div className="text-lg md:text-xl font-black">100+</div>
            <div className="text-xs font-bold text-gray-600">Features Shipped</div>
          </div>
        </motion.div>

      </div>

      {/* Marquee Footer */}
      <Marquee />
    </div>
  );
}