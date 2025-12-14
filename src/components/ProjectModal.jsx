import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Search, Zap, BarChart3, GitMerge, Users } from 'lucide-react';

const iconMap = {
  Zap,
  Users,
  BarChart3
};


export default function ProjectModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-4 overflow-y-auto">

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* The PRD Card */}
      <motion.div
        initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-4xl bg-white md:rounded-3xl border-t-2 md:border-2 border-black shadow-2xl overflow-hidden flex flex-col md:max-h-[90vh]"
      >

        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white border-b-2 border-black p-4 md:p-6 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{product.status}</span>
            </div>
            <h2 className="text-lg md:text-xl font-black uppercase leading-none">{product.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white text-black border-2 border-black rounded-full hover:bg-[#DFFF00] transition-colors shadow-[4px_4px_0px_0px_#000]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-0 pb-20">

          {/* HERO IMAGE */}
          <div className="h-64 md:h-80 w-full overflow-hidden border-b-2 border-black relative group">
            <img src={product.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-lg md:text-2xl">{product.tagline}</p>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-12">

            {/* SECTION 1: THE PROBLEM (Data First) */}
            <section className="grid grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h3 className="text-xs font-black uppercase text-gray-400 mb-2 flex items-center gap-2">
                  <Search size={14} /> The Problem
                </h3>
                <div className="text-5xl font-black text-red-500 mb-2">{product.problem.stat}</div>
                <p className="text-sm font-bold text-gray-600 leading-tight">{product.problem.context}</p>
              </div>
              <div className="md:col-span-2 bg-red-50 p-6 rounded-xl border border-red-100 italic font-medium text-gray-700">
                "{product.problem.quote}"
              </div>
            </section>

            {/* SECTION 2: DISCOVERY & INSIGHT */}
            <section>
              <h3 className="text-xs font-black uppercase text-gray-400 mb-4 flex items-center gap-2">
                <Users size={14} /> User Research
              </h3>
              <p className="text-lg font-medium text-gray-900 leading-relaxed border-l-4 border-black pl-6">
                {product.discovery}
              </p>
            </section>

            {/* SECTION 3: THE SOLUTION (Architecture) */}
            <section className="bg-gray-50 border-2 border-black rounded-xl p-6 md:p-8">
              <h3 className="text-xs font-black uppercase text-gray-400 mb-4 flex items-center gap-2">
                <GitMerge size={14} /> The Solution Architecture
              </h3>
              <p className="mb-6 font-medium text-gray-800">{product.solution}</p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {product.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white border border-black rounded-lg text-xs font-bold uppercase shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* SECTION 4: THE TRADE-OFF (PM Superpower) */}
            <section>
              <h3 className="text-xs font-black uppercase text-gray-400 mb-4">The Strategic Pivot</h3>
              <div className="bg-[#DFFF00]/20 p-6 rounded-xl border-l-4 border-[#DFFF00]">
                <p className="font-bold text-sm text-gray-500 uppercase mb-2">Decision Point:</p>
                <p className="text-base font-bold text-black">
                  {product.tradeoff}
                </p>
              </div>
            </section>

            {/* SECTION 5: IMPACT (Metrics) */}
            <section>
              <h3 className="text-xs font-black uppercase text-gray-400 mb-6">Success Metrics</h3>
              <div className="grid grid-cols-3 gap-4">
                {product.metrics.map((m, i) => {
                  const IconComponent = iconMap[m.icon];
                  return (
                    <div key={i} className="bg-black text-[#DFFF00] p-6 rounded-xl border-2 border-transparent hover:border-[#DFFF00] transition-all">
                      <IconComponent size={24} className="mb-2 opacity-80" />
                      <div className="text-4xl font-black mb-1">{m.value}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/60">{m.label}</div>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>
        </div>

        {/* Floating CTA */}
        <div className="absolute bottom-6 right-6 md:right-10">
          <button className="bg-[#DFFF00] text-black border-2 border-black px-6 py-3 rounded-full font-black uppercase shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2">
            View Live Product <ArrowUpRight size={18} />
          </button>
        </div>

      </motion.div>
    </div>
  );
}