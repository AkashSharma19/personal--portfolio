import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowRight, X, Zap, BarChart3 } from 'lucide-react';

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
    logo: Briefcase, // Placeholder icon
    highlight: true, // This mimics the green card in your reference
    metrics: [
      { label: "Grading Efficiency", value: "+60%", desc: "Reduced grading time using AI automation." },
      { label: "Manual Effort", value: "-20hrs", desc: "Saved per week via N8N workflows." },
      { label: "User Adoption", value: "90%", desc: "For new LMS features shipped." },
      { label: "Stakeholders", value: "15+", desc: "Managed cross-functional teams." }
    ],
    stack: ["Jira", "Figma", "SQL", "N8N"]
  },
  {
    id: 2,
    company: "Masters' Union",
    role: "Product Analyst",
    location: "Gurugram, India",
    type: "Full Time",
    date: "Jun 2023 - May 2025",
    desc: "Authored 100+ PRDs and prioritized features for LMS platforms. Reduced engineering rework by 80% through clear wireframing.",
    logo: Briefcase,
    highlight: false,
    metrics: [
      { label: "Data Accuracy", value: "99%", desc: "Cleaned legacy student databases." },
      { label: "Reports", value: "Weekly", desc: "Automated executive dashboards." },
      { label: "Rework Reduction", value: "-80%", desc: "Through clear wireframing." }
    ],
    stack: ["Excel", "Python", "Tableau"]
  },
  {
    id: 3,
    company: "Masters' Union",
    role: "Operations Intern",
    location: "Gurugram, India",
    type: "Internship",
    date: "Apr 2023 - Jun 2023",
    desc: "Built Power BI dashboards reducing KPI reporting time by 30%. Developed IT solutions that cut costs by 15%.",
    logo: Briefcase,
    highlight: false,
    metrics: [
      { label: "Reporting Time", value: "-30%", desc: "Reduced KPI reporting time." },
      { label: "Cost Savings", value: "15%", desc: "Cut costs with IT solutions." },
      { label: "Applications", value: "500+", desc: "Processed per month." }
    ],
    stack: ["Power BI", "Salesforce"]
  },
  {
    id: 4,
    company: "Readily Mobility",
    role: "Marketing Intern",
    location: "Remote / Hybrid",
    type: "Internship",
    date: "May 2022 - Jul 2022",
    desc: "Managed creative teams and secured partnerships with 15% of target workshops. Increased team productivity by 30%.",
    logo: Briefcase,
    highlight: false,
    metrics: [
      { label: "Partnerships", value: "15%", desc: "Of target workshops secured." },
      { label: "Productivity", value: "+30%", desc: "Increased team productivity." }
    ],
    stack: ["Canva", "Google Ads", "Notion"]
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
    logo: GraduationCap,
    highlight: true,
    metrics: [
      { label: "Competitions Won", value: "3", desc: "Inter-College victories." }
    ],
    stack: []
  },
  {
    id: 2,
    company: "Vardhaman College",
    role: "B.Sc. Mathematics",
    location: "Bijnor",
    type: "Bachelor's",
    date: "2016 - 2019",
    desc: "Specialized in Mathematics. Built a strong foundation in analytical thinking and problem-solving.",
    logo: GraduationCap,
    highlight: false,
    metrics: [
      { label: "Specialization", value: "Mathematics", desc: "Analytical foundation." }
    ],
    stack: []
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
          <MapPin size={12} /> {item.location}
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
          <Calendar size={12} />
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

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.company]) acc[item.company] = [];
    acc[item.company].push(item);
    return acc;
  }, {});

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        const currentIndex = data.findIndex(item => item.id === selectedItem.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : data.length - 1;
        setSelectedItem(data[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = data.findIndex(item => item.id === selectedItem.id);
        const nextIndex = currentIndex < data.length - 1 ? currentIndex + 1 : 0;
        setSelectedItem(data[nextIndex]);
      } else if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, data]);

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
              {activeTab === 'experience' && <ArrowRight size={16} />}
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
              {activeTab === 'education' && <ArrowRight size={16} />}
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {data.map((item) => (
              <InfoCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Details */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">

              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedItem(null)}
              />

              {/* Main Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white w-full max-w-5xl h-[600px] rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:flex-row font-sans"
              >

                {/* LEFT SIDEBAR: Career Navigation */}
                <div className="w-full md:w-1/3 bg-gray-50 border-r-2 border-black p-6 overflow-y-auto">
                  <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Career Timeline</h3>
                  <div className="space-y-4">
                    {Object.entries(groupedData).map(([company, roles]) => (
                      <div key={company}>
                        <div className="text-xs font-bold uppercase mb-2 opacity-70">{company}</div>
                        <div className="space-y-2 ml-4">
                          {roles.map((role) => (
                            <button
                              key={role.id}
                              onClick={() => setSelectedItem(role)}
                              className={`w-full text-left p-3 rounded-xl border-2 transition-all group ${
                                selectedItem.id === role.id
                                  ? 'bg-black border-black text-white shadow-[4px_4px_0px_0px_#DFFF00]'
                                  : 'bg-white border-transparent hover:border-black hover:bg-white text-gray-500 hover:text-black'
                              }`}
                            >
                              <div className="font-black leading-tight text-sm">
                                {role.role}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT CONTENT: Role Details */}
                <div className="flex-1 p-8 md:p-10 flex flex-col overflow-y-auto relative bg-white">

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-10 bg-white border-2 border-black rounded-full p-2 hover:bg-[#DFFF00] transition-colors shadow-[4px_4px_0px_0px_#000]"
                  >
                    <X size={24} />
                  </button>

                  {/* Header */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedItem.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-[#DFFF00] border border-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                          <Zap size={12} className="fill-black" /> {selectedItem.type}
                        </div>
                        <h2 className="text-3xl font-black uppercase leading-none mb-2">
                          {selectedItem.role}
                        </h2>
                        <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase">
                          <span className="flex items-center gap-1"><MapPin size={14} /> {selectedItem.location}</span>
                          <span className="flex items-center gap-1"><Calendar size={14} /> {selectedItem.date}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base font-medium text-gray-800 leading-relaxed mb-8 max-w-2xl border-l-4 border-[#DFFF00] pl-4">
                        {selectedItem.desc}
                      </p>

                      {/* Achievements */}
                      {selectedItem.achievements && selectedItem.achievements.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Key Achievements</h4>
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

                      {/* Tech Stack Footer */}
                      {selectedItem.stack && selectedItem.stack.length > 0 && (
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Tool Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.stack.map((tool) => (
                              <span key={tool} className="px-3 py-1.5 rounded-lg border border-black text-xs font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}