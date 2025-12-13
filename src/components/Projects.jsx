import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

// --- Data: Your Real Projects ---
const projects = [
  {
    id: 1,
    title: "AI-Powered LMS",
    category: "EdTech Product",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", // Dark AI/Tech vibe
    theme: "dark", // White chip on dark image
    link: "#"
  },
  {
    id: 2,
    title: "Placement Analytics",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop", // 3D/Abstract vibe
    theme: "highlight", // Yellow chip on colorful image
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio AI Tool",
    category: "FinTech / Python",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", // Structural/Architectural vibe
    theme: "light", // White chip on light image
    link: "https://github.com/AkashSharma19/Portfolio-analysis-V2-"
  }
];

// --- Sub-Component: Project Card ---
const ProjectCard = ({ project }) => {
  const isHighlight = project.theme === "highlight";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative w-full aspect-square overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-gray-100"
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradient (for readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {/* Floating Info Chip */}
      <div className="absolute bottom-6 left-6 right-6">
        <div
          className={`
            flex items-center justify-between p-4 rounded-xl border-2 border-black transition-colors duration-300
            ${isHighlight ? 'bg-[#DFFF00]' : 'bg-white'}
          `}
        >
          <div>
            <h3 className="font-bold text-lg md:text-xl leading-tight font-sans">
              {project.title}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mt-1">
              {project.category}
            </p>
          </div>

          {/* Arrow Button */}
          <a
            href={project.link}
            className={`
              w-10 h-10 rounded-full border-2 border-black flex items-center justify-center transition-transform group-hover:rotate-45
              ${isHighlight ? 'bg-black text-[#DFFF00]' : 'bg-[#DFFF00] text-black'}
            `}
          >
            <FiArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-24 bg-white font-sans overflow-hidden">

      {/* Background Decor (Lime Blob from reference) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6F9C9]/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#65a30d] font-bold tracking-wider uppercase text-sm mb-2 block">
            Work Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-black capitalize leading-tight">
            We Are Creating Something <br />
            <span className="relative inline-block">
               Different Layout
              {/* Underline SVG decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#DFFF00]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footer / See More Button */}
        <div className="flex items-center gap-6">
          {/* The Line */}
          <div className="h-[2px] bg-black/10 flex-grow rounded-full" />

          {/* The Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#DFFF00] px-8 py-3 rounded-full border-2 border-black font-bold shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            See More Projects <FiCheckCircle size={18} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}