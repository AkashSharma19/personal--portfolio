import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';

// --- Data from Resume ---
const experienceData = [
  {
    id: 1,
    company: "Masters' Union",
    role: "Assistant Product Manager",
    location: "Gurugram, India",
    type: "Full Time",
    date: "Apr 2025 - Present",
    desc: "Driving strategy and operational excellence. Leading high-impact product innovations and reducing friction in user journeys.",
    logo: FaBriefcase, // Placeholder icon
    highlight: true // This mimics the green card in your reference
  },
  {
    id: 2,
    company: "Masters' Union",
    role: "Product Analyst",
    location: "Gurugram, India",
    type: "Full Time",
    date: "Jun 2023 - May 2025",
    desc: "Authored 100+ PRDs and prioritized features for LMS platforms. Reduced engineering rework by 80% through clear wireframing.",
    logo: FaBriefcase,
    highlight: false
  },
  {
    id: 3,
    company: "Masters' Union",
    role: "Operations Intern",
    location: "Gurugram, India",
    type: "Internship",
    date: "Apr 2023 - Jun 2023",
    desc: "Built Power BI dashboards reducing KPI reporting time by 30%. Developed IT solutions that cut costs by 15%.",
    logo: FaBriefcase,
    highlight: false
  },
  {
    id: 4,
    company: "Readily Mobility",
    role: "Marketing Intern",
    location: "Remote / Hybrid",
    type: "Internship",
    date: "May 2022 - Jul 2022",
    desc: "Managed creative teams and secured partnerships with 15% of target workshops. Increased team productivity by 30%.",
    logo: FaBriefcase,
    highlight: false
  }
];

const educationData = [
  {
    id: 1,
    company: "MDI",
    role: "PGDM (Management)",
    location: "Murshidabad",
    type: "Post Grad",
    date: "2021 - 2023",
    desc: "Secured victories in three Inter-College competitions at IIM Rohtak, MDI Gurgaon, and IMT Ghaziabad.",
    logo: FaGraduationCap,
    highlight: true
  },
  {
    id: 2,
    company: "Vardhaman College",
    role: "B.Sc. Mathematics",
    location: "Bijnor",
    type: "Bachelor's",
    date: "2016 - 2019",
    desc: "Specialized in Mathematics. Built a strong foundation in analytical thinking and problem-solving.",
    logo: FaGraduationCap,
    highlight: false
  }
];

// --- Components ---

const InfoCard = ({ item }) => {
  const isHighlight = item.highlight;
  const Icon = item.logo;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className={`
        relative p-6 rounded-2xl border-2 border-black flex flex-col gap-4 h-full
        ${isHighlight
          ? 'bg-[#DFFF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
          : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:border-black transition-all'
        }
      `}
    >
      {/* Header: Icon & Location */}
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-full border-2 border-black ${isHighlight ? 'bg-white' : 'bg-[#E6F9C9]'}`}>
          <Icon size={24} />
        </div>
        <div className="text-xs font-bold opacity-60 flex items-center gap-1">
          <FiMapPin size={12} /> {item.location}
        </div>
      </div>

      {/* Badge */}
      <div>
        <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
          {item.type}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-black font-sans leading-tight mb-1">{item.company}</h3>
        <p className="font-bold text-sm opacity-80 mb-3">{item.role}</p>
        <p className="text-sm font-medium leading-relaxed opacity-70">
          {item.desc}
        </p>
      </div>

      {/* Footer: Date */}
      <div className="mt-auto pt-4 border-t-2 border-black/10 flex items-center gap-2 text-xs font-bold">
        <div className="bg-black text-white p-1 rounded-full">
          <FiCalendar size={12} />
        </div>
        {item.date}
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education'

  const data = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section id="experience" className="w-full py-24 bg-[#fafafa] border-b-2 border-black font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header with Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[#65a30d] font-bold tracking-wider uppercase text-sm mb-2 block">
              Working Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-xl">
              We Provide 5 Years Experience For Service.
            </h2>
          </div>

          {/* Toggle Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('experience')}
              className={`
                px-8 py-3 rounded-full border-2 border-black font-bold flex items-center gap-2 transition-all
                ${activeTab === 'experience'
                  ? 'bg-[#DFFF00] shadow-[4px_4px_0px_0px_#000]'
                  : 'bg-black text-white hover:bg-gray-900'}
              `}
            >
              Experience
              {activeTab === 'experience' && <FiArrowRight size={16} />}
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`
                px-8 py-3 rounded-full border-2 border-black font-bold flex items-center gap-2 transition-all
                ${activeTab === 'education'
                  ? 'bg-[#DFFF00] shadow-[4px_4px_0px_0px_#000] text-black'
                  : 'bg-black text-white hover:bg-gray-900'}
              `}
            >
              Education
              {activeTab === 'education' && <FiArrowRight size={16} />}
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {data.map((item) => (
              <InfoCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}