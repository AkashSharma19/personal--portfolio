import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Database, BarChart3, Workflow, Users, Layout, Zap, Trophy, TrendingUp, Clock } from 'lucide-react';

// --- Components ---

// 1. The "Trophy Case" Card (Visual Award Highlight)
const AwardCard = () => (
  <motion.div 
    whileHover={{ y: -5, rotate: 1 }}
    className="relative bg-[#DFFF00] border-2 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_#000] overflow-hidden flex flex-col justify-between h-full min-h-[300px]"
  >
    {/* Decorative Background Pattern */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 bg-black text-[#DFFF00] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
        <Trophy size={14} /> Recognition
      </div>
      <h3 className="text-3xl md:text-4xl font-black uppercase leading-none mb-2">
        Director's <br/> Award
      </h3>
      <p className="font-bold text-black/80">Received 2x for Innovation.</p>
    </div>

    {/* The Visual (3D Cup/Badge Image) */}
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-4 -right-4 w-40 h-40 md:w-48 md:h-48"
    >
       {/* Placeholder for a 3D Trophy/Award Image */}
       <img 
         src="https://cdn3d.iconscout.com/3d/premium/thumb/trophy-cup-3d-icon-download-in-png-blend-fbx-gltf-file-formats--champion-award-winner-prize-reward-sport-vol-1-pack-sports-icons-4860368.png?f=webp" 
         alt="Award Trophy"
         className="w-full h-full object-contain drop-shadow-xl"
       />
    </motion.div>
  </motion.div>
);

// 2. Stat Cards (Visualizing your Impact)
const StatCard = ({ icon: Icon, value, label, color = "bg-white" }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`${color} border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-center gap-2`}
  >
    <div className="flex items-center gap-3 mb-2 opacity-60">
      <Icon size={24} />
      <span className="text-xs font-black uppercase tracking-widest">{label}</span>
    </div>
    <div className="text-5xl font-black tracking-tighter">{value}</div>
  </motion.div>
);

// --- Main About Component ---

export default function AboutSection() {
  const skills = [
    { name: "Figma", icon: Figma },
    { name: "Power BI", icon: BarChart3 },
    { name: "SQL", icon: Database },
    { name: "N8N Automation", icon: Workflow },
    { name: "Notion", icon: Layout },
    { name: "Jira", icon: Users },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-white border-b-2 border-black font-sans overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E6F9C9]/50 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Narrative & Skills (Spans 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Headline */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border-2 border-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-white mb-6 shadow-[4px_4px_0px_0px_#000]">
                Who is Akash?
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">
                I Don't Just Guess. <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>I Calculate.</span>
              </h2>
            </motion.div>

            {/* Bio Text */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl leading-relaxed font-medium text-gray-800"
            >
              I am an <b>Assistant Product Manager</b> with a background in Mathematics. Currently driving operational excellence at <b>Masters' Union</b>, I specialize in reducing friction. 
              <br/><br/>
              My philosophy is simple: <b>High Impact, Low Drag.</b> I build systems that save time and products that make sense.
            </motion.p>

            {/* Static Skill Pills (Clean Layout) */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 opacity-50">My Toolkit</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 px-5 py-3 border-2 border-black rounded-full bg-white hover:bg-[#E6F9C9] transition-colors cursor-default"
                  >
                    <skill.icon size={18} />
                    <span className="font-bold text-sm uppercase">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visuals & Stats (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 1. The Big Award Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
            >
              <AwardCard />
            </motion.div>

            {/* 2. Impact Stat Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <StatCard 
                  icon={Clock} 
                  value="60%" 
                  label="Faster Grading" 
                  color="bg-[#fafafa]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <StatCard 
                  icon={TrendingUp} 
                  value="100+" 
                  label="Hours Saved" 
                  color="bg-[#fafafa]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}