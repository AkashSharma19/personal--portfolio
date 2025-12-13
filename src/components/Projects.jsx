import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, X, Layers, Code, Globe } from 'lucide-react';

// --- 1. Expanded Data with "Gallery" & "Details" ---
const projects = [
  {
    id: 1,
    title: "AI-Powered LMS",
    category: "EdTech Product",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    theme: "dark",
    shortDesc: "Automated grading and proctoring system.",
    // Details for the Pop-up
    longDescription: "A comprehensive Learning Management System designed to reduce faculty workload. Features include AI-driven assessment grading, real-time proctored examinations using computer vision, and personalized student learning paths.",
    techStack: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL"],
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Placement Analytics",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    theme: "highlight",
    shortDesc: "Predictive modeling for student placement.",
    longDescription: "An advanced analytics dashboard that aggregates student performance data to predict placement probabilities. It uses funnel optimization techniques to match candidates with the right companies, increasing placement rates by 30%.",
    techStack: ["Power BI", "SQL", "Python Pandas", "Azure"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio AI Tool",
    category: "FinTech / Python",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    theme: "light",
    shortDesc: "Automated financial portfolio analysis.",
    longDescription: "A custom-built tool that leverages AI to analyze investment portfolios. It provides risk assessment, diversification suggestions, and market trend analysis using historical data.",
    techStack: ["Python", "SciKit-Learn", "FastAPI", "Next.js"],
    gallery: [
      "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=800&auto=format&fit=crop"
    ],
    link: "https://github.com/AkashSharma19/Portfolio-analysis-V2-"
  }
];

// --- 2. The Pop-Up Modal Component ---
const ProjectModal = ({ project, onClose, allProjects, onSelectProject }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose} // Close when clicking outside
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000]"
      >
        {/* Close Button - Top Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white border-2 border-black rounded-full p-2 hover:bg-[#DFFF00] transition-colors shadow-[4px_4px_0px_0px_#000]"
        >
          <X size={24} />
        </button>

        {/* Project Selector (only show if allProjects provided) */}
        {allProjects && (
          <div className="p-4 border-b-2 border-black bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {allProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectProject(p)}
                  className={`px-4 py-2 rounded-lg border-2 font-bold text-sm transition-all ${
                    p.id === project.id
                      ? 'bg-[#DFFF00] border-black'
                      : 'bg-white border-gray-300 hover:border-black'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Modal Header Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden border-b-2 border-black">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Modal Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-8">
            <div>
              <div className="inline-block px-3 py-1 bg-[#DFFF00] border-2 border-black rounded-lg text-xs font-bold uppercase tracking-widest mb-3">
                {project.category}
              </div>
              <h2 className="text-4xl font-black uppercase leading-none mb-4">{project.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {project.longDescription}
              </p>
            </div>

            {/* Visit Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl border-2 border-transparent font-bold hover:bg-[#DFFF00] hover:text-black hover:border-black hover:shadow-[4px_4px_0px_0px_#000] transition-all"
            >
              Visit Project <Globe size={18} />
            </a>
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-10">
            <h3 className="flex items-center gap-2 text-lg font-bold uppercase mb-4">
              <Code size={20} /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 border-2 border-black rounded-lg font-bold text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold uppercase mb-4">
              <Layers size={20} /> Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="group overflow-hidden rounded-xl border-2 border-black h-48 md:h-64 relative">
                  <img
                    src={img}
                    alt={`Gallery ${idx}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- 3. Main Projects Section Component ---
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section id="projects" className="relative w-full py-24 bg-white font-sans overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6F9C9]/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#65a30d] font-bold tracking-wider uppercase text-sm mb-2 block">
            Work Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-black capitalize leading-tight">
            We Are Creating Something <br />
            <span className="relative inline-block">
               Different Layout
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#DFFF00]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)} // Trigger Modal
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative w-full aspect-square overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000] bg-gray-100 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className={`flex items-center justify-between p-4 rounded-xl border-2 border-black transition-colors duration-300 ${project.theme === 'highlight' ? 'bg-[#DFFF00]' : 'bg-white'}`}>
                  <div>
                    <h3 className="font-bold text-lg leading-tight font-sans">{project.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mt-1">{project.category}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center transition-transform group-hover:rotate-45 ${project.theme === 'highlight' ? 'bg-black text-[#DFFF00]' : 'bg-[#DFFF00] text-black'}`}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Projects Button */}
        <div className="flex items-center gap-6">
          <div className="h-[2px] bg-black/10 flex-grow rounded-full" />

          <motion.button
            onClick={() => {
              setSelectedProject(projects[0]);
              setShowAllProjects(true);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#DFFF00] px-8 py-3 rounded-full border-2 border-black font-bold shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            See More Projects <CheckCircle2 size={18} />
          </motion.button>
        </div>

      </div>

      {/* Render Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setSelectedProject(null);
              setShowAllProjects(false);
            }}
            allProjects={showAllProjects ? projects : null}
            onSelectProject={setSelectedProject}
          />
        )}
      </AnimatePresence>

    </section>
  );
}