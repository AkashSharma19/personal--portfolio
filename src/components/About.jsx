import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Database, Code2, BarChart3, Workflow, Users, Layout, Zap, Search, PenTool } from 'lucide-react';

// --- Data: Your Skills from Resume ---
const skills = [
  { name: "Figma", icon: Figma }, // [cite: 5]
  { name: "Power BI", icon: BarChart3 }, // [cite: 7]
  { name: "SQL", icon: Database },
  { name: "N8N Automation", icon: Workflow }, // [cite: 18]
  { name: "Notion", icon: Layout }, // [cite: 5]
  { name: "Jira", icon: Users }, // [cite: 8]
  { name: "Google Analytics", icon: Search }, // [cite: 38]
  { name: "Miro", icon: Zap }, // [cite: 5]
  { name: "Wireframing", icon: PenTool }, // [cite: 6]
];

// --- Sub-Component: Skill Pill ---
const SkillPill = ({ name, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -5, boxShadow: '4px 4px 0px 0px #000' }}
    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000] cursor-default transition-all hover:bg-[#DFFF00]"
  >
    <Icon size={18} strokeWidth={2.5} />
    <span className="font-bold font-sans uppercase tracking-wide text-sm">{name}</span>
  </motion.div>
);

// --- Main About Component ---
export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden font-sans border-b-2 border-black">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        {/* 1. Minimal Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block border-2 border-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-[#DFFF00] mb-6 shadow-[4px_4px_0px_0px_#000]">
            Who is Akash?
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-black">
            I Bring <span className="underline decoration-wavy decoration-[#DFFF00] underline-offset-8">Logic</span> To <br />
            Product Chaos.
          </h2>
        </motion.div>

        {/* 2. The Bio Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800 max-w-2xl mx-auto">
            I am an <b>Assistant Product Manager</b> with a background in Mathematics. I don't just guess—I calculate. [cite: 1, 33]
          </p>
          <br />
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Currently driving operational excellence at <b>Masters' Union</b>, I specialize in reducing friction. Whether it's cutting grading time by 60% with AI or building N8N automations to save hours of manual effort, my goal is always the same: <b>High Impact, Low Drag.</b> [cite: 10, 25, 18]
          </p>
        </motion.div>

        {/* 3. Static Tech Stack (Replaces Marquee) */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">My Toolkit</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillPill key={skill.name} name={skill.name} icon={skill.icon} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}