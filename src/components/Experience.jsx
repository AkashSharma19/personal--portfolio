import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowRight, X, Zap, BarChart3, TrendingUp, Users } from 'lucide-react';
import ExperienceModal from './ExperienceModal';

// --- Data from Resume ---
const experienceData = [
  {
    id: 'mu-apm',
    company: "Masters' Union",
    role: "Assistant Product Manager",
    location: "Gurugram, India",
    type: "Full Time",
    period: "Apr 2024 - Present",
    summary: "Spearheaded the digital transformation of the grading infrastructure, moving from manual spreadsheets to an AI-first ecosystem.",
    logo: Briefcase,
    highlight: true,
    metrics: [
      { label: "Efficiency", value: "+60%", icon: Zap },
      { label: "Wkly Savings", value: "20hrs", icon: TrendingUp },
      { label: "Adoption", value: "90%", icon: Users }
    ],
    bullets: [
      "Led product strategy for the new LMS grading module.",
      "Developed N8N workflows that automated 500+ student record updates weekly.",
      "Managed 15+ stakeholders across Academic & Tech teams."
    ],
    skills: ["Product Strategy", "N8N", "SQL", "Jira"]
  },
  {
    id: 'mu-pa',
    company: "Masters' Union",
    role: "Product Analyst",
    location: "Gurugram, India",
    type: "Full Time",
    period: "Jan 2023 - Mar 2024",
    summary: "Owned the data reporting pipeline for student engagement, providing weekly insights to the Dean's office.",
    logo: Briefcase,
    highlight: false,
    metrics: [
      { label: "Data Accuracy", value: "99%", icon: Zap },
      { label: "Reports", value: "Weekly", icon: TrendingUp }
    ],
    bullets: [
      "Cleaned legacy databases impacting 2000+ student records.",
      "Automated the 'At-Risk Student' alert system using Python scripts."
    ],
    skills: ["Python", "Tableau", "Excel"]
  },
  {
    id: 'readily',
    company: "Readily Mobility",
    role: "Marketing Intern",
    location: "Remote",
    type: "Internship",
    period: "Jun 2022 - Aug 2022",
    summary: "Executed go-to-market strategies for the initial launch phase.",
    logo: Briefcase,
    highlight: false,
    metrics: [
      { label: "Leads", value: "500+", icon: Users }
    ],
    bullets: [
      "Managed social media calendar and content distribution.",
      "Conducted competitor analysis to refine pricing strategy."
    ],
    skills: ["Social Media", "Canva", "Copywriting"]
  }
];

const educationData = [
  {
    id: 1,
    company: "MDI",
    role: "PGDM (Management)",
    location: "Murshidabad",
    type: "Post Grad",
    period: "2021 - 2023",
    summary: "Secured victories in three Inter-College competitions at IIM Rohtak, MDI Gurgaon, and IMT Ghaziabad.",
    logo: GraduationCap,
    highlight: true,
    metrics: [
      { label: "Competitions Won", value: "3", icon: Zap }
    ],
    bullets: [],
    skills: []
  },
  {
    id: 2,
    company: "Vardhaman College",
    role: "B.Sc. Mathematics",
    location: "Bijnor",
    type: "Bachelor's",
    period: "2016 - 2019",
    summary: "Specialized in Mathematics. Built a strong foundation in analytical thinking and problem-solving.",
    logo: GraduationCap,
    highlight: false,
    metrics: [
      { label: "Specialization", value: "Mathematics", icon: Zap }
    ],
    bullets: [],
    skills: []
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
          {item.summary}
        </p>
      </div>

      {/* Footer: Date */}
      <div className="mt-auto pt-4 border-t-2 border-black/10 flex items-center gap-2 text-xs font-bold">
        <div className="bg-black text-white p-1 rounded-full">
          <Calendar size={12} />
        </div>
        {item.period}
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education'
  const [modalOpen, setModalOpen] = useState(false);

  const data = activeTab === 'experience' ? experienceData : educationData;

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.company]) acc[item.company] = [];
    acc[item.company].push(item);
    return acc;
  }, {});

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {data.map((item) => (
              <InfoCard key={item.id} item={item} onClick={() => setModalOpen(true)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Details */}
        {modalOpen && <ExperienceModal data={data} onClose={() => setModalOpen(false)} />}

      </div>
    </section>
  );
}