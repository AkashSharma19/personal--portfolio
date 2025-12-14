import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Briefcase, Zap, TrendingUp, Users, ChevronRight } from 'lucide-react';

export default function ExperienceModal({ data, onClose }) {
  const [activeTab, setActiveTab] = useState(data[0]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-4">

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* MAIN CARD */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-5xl h-[90vh] md:h-[650px] bg-[#f0f0f0] border-t-4 md:border-4 border-black md:rounded-3xl shadow-[0px_-10px_0px_0px_rgba(0,0,0,0.2)] md:shadow-[12px_12px_0px_0px_#000] overflow-hidden flex flex-col md:flex-row"
      >

        {/* --- NAVIGATION AREA --- */}
        {/* Mobile: Horizontal Scroll | Desktop: Vertical Sidebar */}
        <div className="w-full md:w-1/3 bg-white border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col shrink-0">

          {/* Header (Hidden on extremely small screens to save space if needed) */}
          <div className="p-4 md:p-6 bg-black text-[#DFFF00] flex justify-between items-center">
            <h3 className="text-sm md:text-xl font-black uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={16} /> <span className="hidden md:inline">Career Log</span><span className="md:hidden">Experience</span>
            </h3>
            {/* Close Button for Mobile (Top Right) */}
            <button onClick={onClose} className="md:hidden text-[#DFFF00]">
              <X size={24} />
            </button>
          </div>

          {/* LIST CONTAINER */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto bg-gray-50 no-scrollbar">
            {data.map((job) => {
              const isActive = activeTab.id === job.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setActiveTab(job)}
                  className={`
                    shrink-0 p-4 border-r-2 md:border-r-0 md:border-b-2 border-black md:border-transparent text-left transition-all relative group
                    ${isActive
                      ? 'bg-[#DFFF00] md:border-black md:shadow-[inset_4px_0px_0px_0px_#000]'
                      : 'bg-white hover:bg-gray-100'
                    }
                    w-[85vw] md:w-full /* Mobile: Cards are wide but peek slightly */
                  `}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-black' : 'text-gray-500'}`}>
                      {job.period.split(' - ')[0]}
                    </span>
                    {isActive && <ChevronRight size={16} className="hidden md:block" />}
                  </div>
                  <div className="font-black text-sm uppercase leading-tight truncate">
                    {job.company}
                  </div>
                  <div className="text-xs font-bold truncate mt-1 opacity-80">
                    {job.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="flex-1 bg-white relative flex flex-col overflow-hidden">

          {/* Desktop Close Button */}
          <button
            onClick={onClose}
            className="hidden md:block absolute top-4 right-4 z-10 bg-black text-white p-2 hover:bg-[#DFFF00] hover:text-black border-2 border-transparent hover:border-black transition-colors rounded-full"
          >
            <X size={20} />
          </button>

          <div className="flex-1 overflow-y-auto p-5 md:p-10 pb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >

                {/* Job Title Section */}
                <div className="mb-6 border-b-4 border-black pb-4">
                   <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-black text-white px-2 py-1 text-[10px] font-bold uppercase rounded">
                      {activeTab.type}
                    </span>
                    <span className="bg-gray-100 text-black border border-black px-2 py-1 text-[10px] font-bold uppercase rounded flex items-center gap-1">
                      <MapPin size={10} /> {activeTab.location}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-5xl font-black uppercase leading-[0.9] mb-1">
                    {activeTab.role}
                  </h2>
                  <h3 className="text-sm md:text-xl font-bold text-gray-500 uppercase">
                    @ {activeTab.company}
                  </h3>
                </div>

                {/* Mobile Scroll Hint (Optional) */}
                <div className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  ↓ Scroll for details
                </div>

                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Summary */}
                  <p className="text-base md:text-lg font-medium text-black border-l-4 md:border-l-8 border-[#DFFF00] pl-4">
                    {activeTab.summary}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {activeTab.metrics.map((m, i) => (
                      <div key={i} className="bg-white border-2 border-black p-2 md:p-4 shadow-[2px_2px_0px_0px_#000] text-center">
                        <m.icon size={16} className="mx-auto mb-1 opacity-50" />
                        <div className="text-lg md:text-3xl font-black leading-none mb-1">{m.value}</div>
                        <div className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {activeTab.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-800">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                     {activeTab.skills.map(skill => (
                        <span key={skill} className="bg-black text-[#DFFF00] px-2 py-1 text-[10px] md:text-xs font-bold uppercase rounded border-2 border-transparent">
                          {skill}
                        </span>
                      ))}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}