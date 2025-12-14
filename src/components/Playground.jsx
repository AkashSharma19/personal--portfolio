import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Lightbulb, Gavel, ArrowRight, MessageSquare } from 'lucide-react';
import IdeaGenerator from './IdeaGenerator';
import PrioritizationGame from './PrioritizationGame';
import StakeholderGame from './StakeholderGame';

export default function Playground() {
  const [activeTab, setActiveTab] = useState('generator'); // 'generator' | 'prioritizer'

  return (
    <section id="playground" className="relative w-full py-24 bg-[#fafafa] border-t-2 border-black font-sans overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-black text-[#DFFF00] border-2 border-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <Gamepad2 size={16} /> Product Playground
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-none">
            Test My <span className="underline decoration-wavy decoration-[#DFFF00]">Instincts</span>
          </h2>
        </div>

        {/* --- THE LAYOUT GRID --- */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* LEFT COLUMN: The Control Panel (Sidebar) */}
          <div className="w-full md:w-64 flex flex-col gap-4 sticky top-24">

            <div className="hidden md:block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Select Mode
            </div>

            {/* Button 1: Ideation */}
            <button
              onClick={() => setActiveTab('generator')}
              className={`group relative flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                activeTab === 'generator'
                  ? 'bg-[#DFFF00] border-black shadow-[4px_4px_0px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-white border-transparent hover:border-black hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Lightbulb size={20} className={activeTab === 'generator' ? "fill-black" : ""} />
                <span className="font-black uppercase tracking-wide">Ideation</span>
              </div>
              {activeTab === 'generator' && <ArrowRight size={16} />}
            </button>

            {/* Button 2: Execution */}
            <button
              onClick={() => setActiveTab('prioritizer')}
              className={`group relative flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                activeTab === 'prioritizer'
                  ? 'bg-[#DFFF00] border-black shadow-[4px_4px_0px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-white border-transparent hover:border-black hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Gavel size={20} className={activeTab === 'prioritizer' ? "fill-black" : ""} />
                <span className="font-black uppercase tracking-wide">Execution</span>
              </div>
              {activeTab === 'prioritizer' && <ArrowRight size={16} />}
            </button>

            {/* Button 3: Comms */}
            <button
              onClick={() => setActiveTab('stakeholder')}
              className={`group relative flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                activeTab === 'stakeholder'
                  ? 'bg-[#DFFF00] border-black shadow-[4px_4px_0px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-white border-transparent hover:border-black hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare size={20} className={activeTab === 'stakeholder' ? "fill-black" : ""} />
                <span className="font-black uppercase tracking-wide">Comms</span>
              </div>
              {activeTab === 'stakeholder' && <ArrowRight size={16} />}
            </button>

            {/* Decorative Context Box (Desktop Only) */}
            <div className="hidden md:block mt-6 bg-black text-white p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <p className="text-xs leading-relaxed opacity-80">
                "Product Management is 50% dreaming up big ideas and 50% killing bad ones."
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Game Container */}
          <div className="flex-1 w-full h-[550px] bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_#000] relative">
            <AnimatePresence mode="wait">
              {activeTab === 'generator' ? (
                <motion.div
                  key="generator"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <IdeaGenerator />
                </motion.div>
              ) : activeTab === 'prioritizer' ? (
                <motion.div
                  key="prioritizer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <PrioritizationGame />
                </motion.div>
              ) : (
                <motion.div
                  key="stakeholder"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <StakeholderGame />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}