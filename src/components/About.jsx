import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBookOpen, FaMicrochip } from 'react-icons/fa';
import { FiTerminal } from 'react-icons/fi';

// --- Reusable Components ---

const BentoCard = ({ title, icon: Icon, children, className = "" }) => (
  <motion.div
    whileHover={{ translateX: 4, translateY: 4, boxShadow: '2px 2px 0px 0px #000' }}
    className={`bg-white border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 ${className}`}
  >
    <div className="flex items-center gap-3 border-b-2 border-black pb-3 mb-2">
      <div className="bg-[#DFFF00] p-2 rounded-lg border-2 border-black">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-xl uppercase font-sans tracking-tight">{title}</h3>
    </div>
    <div className="text-gray-800 font-medium leading-relaxed">
      {children}
    </div>
  </motion.div>
);

const Tag = ({ text }) => (
  <span className="bg-[#E6F9C9] px-3 py-1 rounded-full border-2 border-black text-sm font-bold whitespace-nowrap hover:bg-[#DFFF00] transition-colors cursor-default">
    {text}
  </span>
);

// --- Main About Component ---

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 bg-white border-b-2 border-black font-sans overflow-hidden">

      {/* Background Decoration (Abstract Grid) */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block bg-[#111] text-[#DFFF00] px-4 py-2 text-lg font-bold uppercase transform -rotate-2 border-2 border-transparent shadow-[4px_4px_0px_0px_#DFFF00] mb-4">
            Who is Akash?
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
            Bridging Logic <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>& Creativity.</span>
          </h2>
        </motion.div>

        {/* The Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. Main Bio (Spans 8 columns) */}
          <div className="md:col-span-8">
            <BentoCard title="The Narrative" icon={FiTerminal} className="h-full bg-[#f8f8f8]">
              <p className="mb-4 text-lg">
                I am an <span className="font-black bg-[#DFFF00] px-1">Assistant Product Manager</span> currently driving operational excellence at Masters' Union.
                With a background in <span className="font-bold underline decoration-wavy decoration-[#DFFF00]">Mathematics</span>, I don't just guess—I calculate.
              </p>
              <p className="text-lg">
                I specialize in turning chaotic workflows into streamlined products. Whether it's reducing grading time by 60% with AI or building N8N automations to cut manual effort, I focus on <b>high-impact</b> outcomes.
              </p>
            </BentoCard>
          </div>

          {/* 2. Key Stats (Spans 4 columns) */}
          <div className="md:col-span-4">
            <BentoCard title="Impact" icon={FaAward} className="bg-[#E6F9C9] h-full">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🏆</span>
                  <span><strong>2x Director's Awards</strong> for Product Innovation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🚀</span>
                  <span><strong>80% Reduction</strong> in engineering rework via clear PRDs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">📉</span>
                  <span><strong>40% Efficiency Boost</strong> through Automation.</span>
                </li>
              </ul>
            </BentoCard>
          </div>

          {/* 3. Tech Stack (Spans 6 columns) */}
          <div className="md:col-span-6">
            <BentoCard title="My Arsenal" icon={FaMicrochip}>
              <div className="flex flex-wrap gap-2">
                <Tag text="Figma" />
                <Tag text="Notion" />
                <Tag text="SQL" />
                <Tag text="Power BI" />
                <Tag text="N8N Automation" />
                <Tag text="Jira" />
                <Tag text="Miro" />
                <Tag text="Google Analytics" />
                <Tag text="ClickUp" />
              </div>
            </BentoCard>
          </div>

          {/* 4. Education (Spans 6 columns) */}
          <div className="md:col-span-6">
            <BentoCard title="Education" icon={FaBookOpen}>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-bold text-lg">PGDM (MBA)</h4>
                  <p className="text-sm text-gray-600">Management Development Institute (2021-2023)</p>
                </div>
                <div className="border-l-4 border-[#DFFF00] pl-4">
                  <h4 className="font-bold text-lg">B.Sc Mathematics</h4>
                  <p className="text-sm text-gray-600">Vardhaman College (2016-2019)</p>
                </div>
              </div>
            </BentoCard>
          </div>

        </div>
      </div>
    </section>
  );
}