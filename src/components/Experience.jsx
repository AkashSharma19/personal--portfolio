import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { FiMapPin, FiCalendar, FiArrowRight, FiX } from 'react-icons/fi';

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
    highlight: true, // This mimics the green card in your reference
    achievements: [
      "Driving strategy and operational excellence",
      "Leading high-impact product innovations",
      "Reducing friction in user journeys",
      "Cutting grading time by 60% with AI",
      "Building N8N automations to save hours of manual effort"
    ]
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
    highlight: false,
    achievements: [
      "Authored 100+ Product Requirement Documents (PRDs)",
      "Prioritized features for LMS platforms",
      "Reduced engineering rework by 80% through clear wireframing",
      "Conducted user research and data analysis"
    ]
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
    highlight: false,
    achievements: [
      "Built Power BI dashboards reducing KPI reporting time by 30%",
      "Developed IT solutions that cut costs by 15%",
      "Streamlined operational processes"
    ]
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
    highlight: false,
    achievements: [
      "Managed creative teams",
      "Secured partnerships with 15% of target workshops",
      "Increased team productivity by 30%",
      "Developed marketing strategies"
    ]
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
    highlight: true,
    achievements: [
      "Secured victories in three Inter-College competitions at IIM Rohtak, MDI Gurgaon, and IMT Ghaziabad",
      "Developed leadership and strategic thinking skills"
    ]
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
    highlight: false,
    achievements: [
      "Specialized in Mathematics",
      "Built a strong foundation in analytical thinking and problem-solving"
    ]
  }
];

// --- Components ---

const InfoCard = ({ item, onClick }) => {
  const isHighlight = item.highlight;
  const Icon = item.logo;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`
        relative p-6 rounded-2xl border-2 border-black flex flex-col gap-4 h-full
        ${isHighlight
          ? 'bg-[#DFFF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
          : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:border-black transition-all cursor-pointer'
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
        <h3 className="text-lg font-black font-sans leading-tight mb-1">{item.company}</h3>
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
  const [selectedItem, setSelectedItem] = useState(null);
  
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
            <h2 className="text-3xl md:text-4xl font-black leading-tight max-w-xl">
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
              <InfoCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Details */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000]"
              >
                {/* Close Button - Top Right Corner */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 bg-white border-2 border-black rounded-full p-2 hover:bg-[#DFFF00] transition-colors shadow-[4px_4px_0px_0px_#000]"
                >
                  <FiX size={24} />
                </button>

                {/* Item Selector */}
                {data && data.length > 1 && (
                  <div className="p-4 border-b-2 border-black bg-gray-50">
                    <div className="flex flex-wrap gap-2">
                      {data.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={`px-4 py-2 rounded-lg border-2 font-bold text-sm transition-all ${
                            item.id === selectedItem.id
                              ? 'bg-[#DFFF00] border-black'
                              : 'bg-white border-gray-300 hover:border-black'
                          }`}
                        >
                          {item.company} - {item.role}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-8">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#DFFF00] border-2 border-black rounded-lg text-xs font-bold uppercase tracking-widest mb-3">
                        {selectedItem.type}
                      </div>
                      <h2 className="text-3xl font-black uppercase leading-none mb-2">{selectedItem.company}</h2>
                      <p className="text-xl font-bold opacity-80 mb-4">{selectedItem.role}</p>
                      <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                        {selectedItem.desc}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  {selectedItem.achievements && (
                    <div className="mb-10">
                      <h3 className="flex items-center gap-2 text-base font-bold uppercase mb-4">
                        Key Achievements
                      </h3>
                      <ul className="space-y-3">
                        {selectedItem.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Location and Date */}
                  <div className="flex flex-col md:flex-row gap-4 text-sm font-bold">
                    <div className="flex items-center gap-2">
                      <div className="bg-black text-white p-2 rounded-full">
                        <FiMapPin size={14} />
                      </div>
                      {selectedItem.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-black text-white p-2 rounded-full">
                        <FiCalendar size={14} />
                      </div>
                      {selectedItem.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}