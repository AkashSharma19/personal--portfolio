import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Briefcase, ChevronRight, Zap, TrendingUp, Users } from 'lucide-react';

export default function ExperienceModal({ data, onClose }) {
  const [activeTab, setActiveTab] = useState(data[0]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* MAIN CARD: Neo-Brutalist "File Folder" */}
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="relative w-full max-w-5xl bg-[#f0f0f0] border-4 border-black shadow-[12px_12px_0px_0px_#000] rounded-none md:rounded-3xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[650px]"
      >

        {/* --- LEFT SIDEBAR: The Directory --- */}
        <div className="w-full md:w-1/3 bg-white border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col">

          {/* Header */}
          <div className="p-6 bg-black text-[#DFFF00]">
            <h3 className="text-xl font-black uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={20} /> Career Log
            </h3>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {data.map((job) => {
              const isActive = activeTab.id === job.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setActiveTab(job)}
                  className={`w-full text-left p-4 border-2 transition-all relative group ${
                    isActive
                      ? 'bg-[#DFFF00] border-black shadow-[4px_4px_0px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                      : 'bg-white border-black hover:bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-xs font-black uppercase tracking-widest ${isActive ? 'text-black' : 'text-gray-500'}`}>
                      {job.period.split(' - ')[0]}
                    </span>
                    {isActive && <ChevronRight size={16} />}
                  </div>
                  <div className="font-black text-sm uppercase leading-tight">
                    {job.company}
                  </div>
                  <div className="text-xs font-bold truncate mt-1">
                    {job.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- RIGHT CONTENT: The Case File --- */}
        <div className="flex-1 bg-white relative flex flex-col h-full overflow-hidden">

          {/* Close Button (Absolute) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white text-black p-2 hover:bg-[#DFFF00] border-2 border-black transition-colors rounded-full shadow-[4px_4px_0px_0px_#000]"
          >
            <X size={20} />
          </button>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >

                {/* Job Header */}
                <div className="mb-8 border-b-4 border-black pb-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase rounded-full">
                      {activeTab.type}
                    </span>
                    <span className="bg-gray-200 text-black border border-black px-3 py-1 text-xs font-bold uppercase rounded-full flex items-center gap-1">
                      <MapPin size={12} /> {activeTab.location}
                    </span>
                    <span className="bg-gray-200 text-black border border-black px-3 py-1 text-xs font-bold uppercase rounded-full flex items-center gap-1">
                      <Calendar size={12} /> {activeTab.period}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] mb-2">
                    {activeTab.role}
                  </h2>
                  <h3 className="text-xl font-bold text-gray-500 uppercase">
                    @ {activeTab.company}
                  </h3>
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col gap-8">

                  {/* 1. The "Hook" (Summary) */}
                  <p className="text-lg font-medium text-black border-l-8 border-[#DFFF00] pl-4">
                    {activeTab.summary}
                  </p>

                  {/* 2. Key Metrics (The "Money" Slide) */}
                  <div className="grid grid-cols-3 gap-4">
                    {activeTab.metrics.map((m, i) => (
                      <div key={i} className="bg-white border-2 border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_#000] text-center hover:bg-[#DFFF00] transition-colors group">
                        <m.icon size={20} className="mx-auto mb-2 opacity-50 group-hover:opacity-100" />
                        <div className="text-xl md:text-3xl font-black leading-none mb-1">{m.value}</div>
                        <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 3. Detailed Bullets */}
                  <div>
                    <h4 className="font-black uppercase text-sm mb-4 border-b-2 border-gray-200 inline-block">
                      Impact & Responsibilities
                    </h4>
                    <ul className="space-y-3 list-none">
                      {activeTab.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-800">
                          <span className="mt-1.5 w-2 h-2 bg-black rounded-full shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4. Tech Stack */}
                  <div>
                    <h4 className="font-black uppercase text-sm mb-3 text-gray-400">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeTab.skills.map(skill => (
                        <span key={skill} className="bg-black text-[#DFFF00] px-3 py-1 text-xs font-bold uppercase rounded border-2 border-transparent hover:border-[#DFFF00] hover:bg-gray-900 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
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