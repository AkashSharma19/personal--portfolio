import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Figma, Database, BarChart3, Workflow, Users, Layout, Zap, Star } from 'lucide-react';

// --- Components ---

// 1. Auto-Counting Stat Number
const CountUp = ({ to, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(to);
      const duration = 2000; // 2 seconds
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// 2. The "Pop-Out" Award Card
const AwardCard = () => (
  <div className="relative w-full h-full">
    {/* Rotating Badge - Adds passive motion */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute -top-6 -right-6 z-20 bg-black text-white w-24 h-24 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
    >
       <svg viewBox="0 0 100 100" className="w-full h-full absolute animate-spin-slow">
         <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
         <text className="text-[14px] font-bold uppercase fill-white">
           <textPath href="#curve">
             • Director's Award • Winner •
           </textPath>
         </text>
       </svg>
       <Star fill="#DFFF00" className="text-[#DFFF00]" size={24} />
    </motion.div>

    {/* The Card Itself */}
    <motion.div
      whileHover={{ scale: 1.02 }} // Keep slight hover just in case
      className="relative bg-[#DFFF00] border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_#000] h-full flex flex-col overflow-hidden"
    >
      <div className="relative z-10 mb-6">
        <div className="inline-block bg-black text-[#DFFF00] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
          Double Victory
        </div>
        <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] mb-4">
          Innovation <br/> Excellence
        </h3>
        <p className="font-bold text-black border-l-4 border-black pl-4 leading-tight">
          "Recognized twice for defining the future of EdTech operations."
        </p>
      </div>

      {/* Award Image - Takes remaining space */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex-1 flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop"
          alt="Receiving Award"
          className="w-full h-full object-cover rounded-2xl border-2 border-black"
        />
      </motion.div>
    </motion.div>
  </div>
);

// 3. Sticker Stat Card
const StickerStat = ({ label, value, rotate }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col items-center justify-center text-center transform ${rotate}`}
  >
    <div className="text-5xl md:text-6xl font-black mb-1">
      {value}
    </div>
    <div className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1">
      {label}
    </div>
  </motion.div>
);

// --- Main About Component ---

export default function AboutSection() {
  const skills = [
    { name: "Figma", icon: Figma },
    { name: "Power BI", icon: BarChart3 },
    { name: "SQL", icon: Database },
    { name: "N8N", icon: Workflow },
    { name: "Jira", icon: Users },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-[#fafafa] font-sans overflow-hidden border-b-2 border-black">

      {/* 1. Texture Background (Removes "Plainness") */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      {/* 2. Abstract Blob */}
      <div className="absolute top-20 left-[-100px] w-96 h-96 bg-[#DFFF00] rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER: Massive & Broken */}
        <div className="mb-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-black px-4 py-1 rounded-full bg-white shadow-[4px_4px_0px_0px_#000] mb-6 transform -rotate-1"
          >
            <span className="w-3 h-3 rounded-full bg-[#DFFF00] border border-black animate-pulse"/>
            <span className="text-xs font-black uppercase tracking-widest">Who is Akash?</span>
          </motion.div>

        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT: Narrative + Stats Stickers */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-800 border-l-4 border-[#DFFF00] pl-6">
              I am an <b>Assistant Product Manager</b> with a background in Mathematics. Currently driving operational excellence at <b>Masters' Union</b>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My philosophy is simple: <b>High Impact, Low Drag.</b> Whether it's cutting grading time by 60% with AI or building automation workflows, I build products that make sense.
            </p>

            {/* The "Sticker" Stats - Rotated for 'Collage' feel */}
            <div className="flex gap-6 mt-4">
              <StickerStat
                value={<CountUp to="60" suffix="%" />}
                label="Faster Grading"
                rotate="rotate-[-2deg]"
              />
              <StickerStat
                value={<CountUp to="40" suffix="%" />}
                label="Efficiency Boost"
                rotate="rotate-[2deg] mt-8"
              />
            </div>

            {/* Toolkit Row */}
            <div className="mt-8">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 opacity-50">My Daily Toolkit</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg border border-white/20">
                    <skill.icon size={16} className="text-[#DFFF00]" />
                    <span className="font-bold text-sm uppercase">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: The Hero Award Card */}
          <div className="lg:col-span-6 h-full min-h-[400px]">
            <AwardCard />
          </div>

        </div>
      </div>
    </section>
  );
}