import React, { useState, useEffect } from 'react';

// Reusable Icon Components to keep JSX clean
const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SocialIcon = ({ path }) => (
  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:shadow-lg transition hover:scale-105 duration-200 text-black">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      {path}
    </svg>
  </a>
);

const TechStackCard = () => {
  const skills = [
    { name: "Product Strategy", color: "bg-blue-100 text-blue-600" },
    { name: "Figma", color: "bg-purple-100 text-purple-600" },
    { name: "Power BI", color: "bg-cyan-100 text-cyan-600" },
    { name: "Agile/Scrum", color: "bg-green-100 text-green-600" },
    { name: "N8N", color: "bg-gray-100 text-black" },
    { name: "Jira", color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div className="bg-white rounded-[40px] p-8 flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">My Toolbox</h3>
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className={`${skill.color} p-4 rounded-2xl flex items-center justify-center font-bold text-sm hover:scale-105 transition transform cursor-default`}>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillMarquee = () => {
  const items = ["Product Strategy", "UI/UX Design", "Data Analytics", "Agile Methodology", "Wireframing", "User Research", "Automation", "Roadmapping"];
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="bg-black rounded-[40px] py-6 overflow-hidden flex items-center relative">
      <div className="flex gap-8 whitespace-nowrap animate-scroll">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
             <span className="text-white text-xl font-medium tracking-wide">{item}</span>
             <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
   const [activeSection, setActiveSection] = useState('home');
   const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
   const [status, setStatus] = useState('idle'); // idle, submitting, success, error

   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus('submitting');
     try {
       const response = await fetch('https://formspree.io/f/xovgbglv', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
       if (response.ok) {
         setStatus('success');
         setFormData({ name: '', email: '', company: '', message: '' });
         setTimeout(() => setStatus('idle'), 3000);
       } else {
         setStatus('error');
         setTimeout(() => setStatus('idle'), 3000);
       }
     } catch (error) {
       setStatus('error');
       setTimeout(() => setStatus('idle'), 3000);
     }
   };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['home', 'skills', 'awards', 'works', 'experience', 'education', 'contact'];
          const scrollPosition = window.scrollY + 150; // Increased offset for better detection

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle scroll events for smoother performance
    let scrollTimeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-[1400px] mx-auto">
      
      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 mb-6">
        <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg flex items-center justify-between w-full max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-yellow-400 rounded-full shadow-sm"></div>
            <span className="font-bold text-lg tracking-wide text-gray-900">AKASH</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {['Home', 'Awards', 'Works', 'Experience', 'Education'].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-yellow-200 text-black font-semibold shadow-sm'
                      : 'hover:bg-yellow-50 hover:text-yellow-700'
                  }`}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300 shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20"></div>

      <main className="space-y-6">

        {/* ROW 1: Intro (Span 2) + Profile (Span 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[550px]">

            {/* Intro Card - Spans 2 columns */}
            <div className="lg:col-span-2 bg-gradient-to-br from-orange-50 via-gray-50 to-teal-50 rounded-[40px] p-8 md:p-12 flex flex-col justify-between">
               <div className="space-y-6 mt-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] text-gray-900">
                    Hey, I’m Akash, a product manager with experience in EdTech
                  </h1>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                    I focus on building scalable products that solve real problems, from AI grading systems to student CRMs.
                  </p>
               </div>
               <div className="flex flex-wrap items-center gap-4 mt-8">
                 <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition transform active:scale-95">Contact me</button>
                 <div className="flex gap-3">
                    <SocialIcon path={<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>} />
                    <SocialIcon path={<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>} />
                    <SocialIcon path={<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>} />
                 </div>
              </div>
           </div>

            {/* Profile Image - Spans 1 column */}
            <div className="bg-yellow-400 rounded-[40px] overflow-hidden relative min-h-[400px]">
                <img src="/profile.png" className="absolute inset-0 w-full h-full object-cover" alt="Profile" />
            </div>
        </div>

        {/* ROW 2: Marquee Strip (Full Width) */}
        <SkillMarquee />


        {/* AWARDS SECTION */}
        <section id="awards" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Awards & Recognition</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Award 1: Gold - Uses Rich Amber Gradient */}
            <div className="bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 rounded-[40px] p-8 md:p-10 text-black relative h-[600px] overflow-hidden shadow-xl group hover:shadow-orange-300/50 transition-all duration-500">
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div> {/* Noise Texture */}
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h2 className="text-3xl font-bold mb-1">Director's Award</h2>
                  <p className="text-black/80 font-medium text-lg">Innovation Excellence 2024</p>
                </div>
              </div>

              {/* Award Image Mockup */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[350px] h-[450px] bg-white/90 backdrop-blur-sm rounded-t-[40px] border-[14px] border-white/40 shadow-2xl">
                <div className="w-full h-full bg-yellow-50 overflow-hidden rounded-t-[30px] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                        <span className="text-4xl">🏆</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Director's Award</h3>
                      <p className="text-base text-gray-600 mb-2">Innovation Excellence</p>
                      <p className="text-sm text-gray-500">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Award 2: Silver - Uses Cool Slate Gradient */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[600px] overflow-hidden shadow-xl hover:shadow-gray-300/50 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h2 className="text-3xl font-bold mb-1">Director's Award</h2>
                  <p className="text-gray-700 font-medium text-lg">Excellence Award 2025</p>
                </div>
              </div>

              {/* Award Ceremony Image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] md:w-[550px] h-[450px] bg-gray-900 rounded-t-[40px] border-[14px] border-gray-900 shadow-2xl">
                <div className="w-full h-full overflow-hidden rounded-t-[30px] relative">
                  <img
                    src="https://lh3.googleusercontent.com/d/1TGytu3BV64C8bmBzpbPqUpqj3JZPN-9O"
                    alt="Award Ceremony"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-yellow-400 text-black px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                    2x WINNER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* PROJECTS SECTION */}
       <section id="works" className="space-y-8">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">My Work</h2>

         {/* Projects Grid - All 4 projects, 2 per row */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

           {/* Project 1: AI Grading Engine - Deep Tech Dark */}
           <div className="bg-gradient-to-br from-purple-200 via-indigo-300 to-blue-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[500px] overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-purple-900/20 transition-all">
                <div className="flex justify-between items-start z-10 relative">
                  <div>
                    <h2 className="text-3xl font-bold mb-1">AI Grading Engine</h2>
                    <p className="text-gray-700 text-lg">SaaS • EdTech</p>
                  </div>
                  <div className="bg-black/10 backdrop-blur-md text-black w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300 border border-black/20">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[350px] h-[350px] bg-gray-900 rounded-t-[40px] border-[12px] border-gray-900 shadow-2xl translate-y-16 group-hover:translate-y-8 transition duration-500 ease-out">
                  <div className="w-full h-full bg-[#1a1b2e] overflow-hidden rounded-t-[30px] relative">
                    <div className="h-12 bg-[#232436] flex items-center px-4 space-x-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                      <div className="w-32 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="w-full h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl"></div>
                      <div className="w-full h-16 bg-[#232436] rounded-lg flex items-center px-4">
                        <div className="w-8 h-8 bg-gray-700 rounded mr-3"></div>
                        <div className="space-y-1">
                          <div className="w-20 h-1.5 bg-gray-500 rounded"></div>
                          <div className="w-16 h-1.5 bg-gray-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
           </div>

           {/* Project 2: Student CRM */}
           <div className="bg-gradient-to-br from-blue-200 via-cyan-300 to-teal-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[500px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
                <div className="flex justify-between items-start z-10 relative">
                  <div>
                    <h2 className="text-3xl font-bold mb-1">Student CRM</h2>
                    <p className="text-gray-600 text-lg">Internal Tool • Operations</p>
                  </div>
                  <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[85%] aspect-video bg-[#1E1F26] rounded-2xl shadow-2xl p-4 group-hover:scale-105 transition duration-500">
                  <div className="flex justify-between items-center mb-6 text-gray-400 text-xs font-semibold tracking-wider">
                    <span>STUDENT DASHBOARD</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  </div>
                  <div className="bg-[#2C2E36] p-4 rounded-xl mb-2">
                    <span className="text-xs text-gray-500 mb-1 block">LEAD STATUS</span>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-3xl font-bold">Qualified</div>
                        <div className="text-xs text-gray-500 mt-1">High Potential</div>
                      </div>
                      <div className="bg-[#1E1F26] px-3 py-1 rounded-full flex items-center gap-2 border border-gray-700">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-bold">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center -my-4 relative z-10">
                    <div className="bg-[#2D2F39] p-2 rounded-lg border-4 border-[#1E1F26]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </div>
                  </div>
                  <div className="bg-[#2C2E36] p-4 rounded-xl mt-2">
                    <span className="text-xs text-gray-500 mb-1 block">CONVERSION</span>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-3xl font-bold">85%</div>
                        <div className="text-xs text-green-400 mt-1">+35% from baseline</div>
                      </div>
                      <div className="bg-[#1E1F26] px-3 py-1 rounded-full flex items-center gap-2 border border-gray-700">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-bold">ENROLLED</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-4 rounded-xl mt-4 transition">
                    View Full Profile
                  </button>
                </div>
           </div>

           {/* Project 3: LMS Migration */}
           <div className="bg-gradient-to-br from-orange-200 via-red-300 to-pink-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[500px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
             <div className="flex justify-between items-start z-10 relative">
               <div>
                 <h2 className="text-3xl font-bold mb-1">LMS Migration</h2>
                 <p className="text-gray-700 text-lg">Platform • Infrastructure</p>
               </div>
               <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                 <ArrowIcon />
               </div>
             </div>
             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[350px] h-[350px] bg-gray-900 rounded-t-[40px] border-[12px] border-gray-900 shadow-2xl translate-y-16 group-hover:translate-y-8 transition duration-500 ease-out">
               <div className="w-full h-full bg-[#1a1b2e] overflow-hidden rounded-t-[30px] relative">
                 <div className="h-12 bg-[#232436] flex items-center px-4 space-x-2">
                   <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                   <div className="w-20 h-2 bg-gray-600 rounded-full"></div>
                 </div>
                 <div className="p-3 space-y-2">
                   <div className="w-full h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl"></div>
                   <div className="w-full h-12 bg-[#232436] rounded-lg flex items-center px-3">
                     <div className="w-6 h-6 bg-gray-700 rounded mr-2"></div>
                     <div className="space-y-1">
                       <div className="w-16 h-1.5 bg-gray-500 rounded"></div>
                       <div className="w-12 h-1.5 bg-gray-600 rounded"></div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* Project 4: Analytics Suite */}
           <div className="bg-gradient-to-br from-green-200 via-emerald-300 to-teal-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[500px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
             <div className="flex justify-between items-start z-10 relative">
               <div>
                 <h2 className="text-3xl font-bold mb-1">Analytics Suite</h2>
                 <p className="text-gray-700 text-lg">Data Product • B2B</p>
               </div>
               <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                 <ArrowIcon />
               </div>
             </div>
             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[85%] aspect-video bg-[#1E1F26] rounded-2xl shadow-2xl p-4 group-hover:scale-105 transition duration-500">
               <div className="flex justify-between items-center mb-6 text-gray-400 text-xs font-semibold tracking-wider">
                 <span>ANALYTICS DASHBOARD</span>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
               </div>
               <div className="bg-[#2C2E36] p-4 rounded-xl mb-2">
                 <span className="text-xs text-gray-500 mb-1 block">REAL-TIME METRICS</span>
                 <div className="flex justify-between items-end">
                   <div>
                     <div className="text-3xl font-bold">99.9%</div>
                     <div className="text-xs text-gray-500 mt-1">Uptime</div>
                   </div>
                   <div className="bg-[#1E1F26] px-3 py-1 rounded-full flex items-center gap-2 border border-gray-700">
                     <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                     <span className="text-sm font-bold">LIVE</span>
                   </div>
                 </div>
               </div>
               <div className="flex justify-center -my-4 relative z-10">
                 <div className="bg-[#4CAF50] p-2 rounded-lg border-4 border-[#1E1F26]">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                 </div>
               </div>
               <div className="bg-[#2C2E36] p-4 rounded-xl mt-2">
                 <span className="text-xs text-gray-500 mb-1 block">DECISION SPEED</span>
                 <div className="flex justify-between items-end">
                   <div>
                     <div className="text-3xl font-bold">+60%</div>
                     <div className="text-xs text-green-400 mt-1">Faster insights</div>
                   </div>
                   <div className="bg-[#1E1F26] px-3 py-1 rounded-full flex items-center gap-2 border border-gray-700">
                     <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                     <span className="text-sm font-bold">IMPROVED</span>
                   </div>
                 </div>
               </div>
               <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-4 rounded-xl mt-4 transition">
                 Explore Dashboard
               </button>
             </div>
           </div>

         </div>
       </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Experience</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Experience 1: APM */}
            <div className="bg-gradient-to-br from-indigo-200 via-purple-300 to-blue-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[400px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Assistant Product Manager</h3>
                  <p className="text-gray-700 text-lg">Masters' Union • Gurugram</p>
                </div>
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                  <ArrowIcon />
                </div>
              </div>
              <div className="mt-4 text-gray-800">
                <p className="text-sm mb-2">Apr 2025 - Present</p>
                <p>Spearheaded the digital transformation of the grading infrastructure, moving from manual spreadsheets to an AI-first ecosystem.</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">APM</span>
                  </div>
                  <span>Product Strategy • AI Integration</span>
                </div>
              </div>
            </div>

            {/* Experience 2: PA */}
            <div className="bg-gradient-to-br from-gray-200 via-slate-300 to-gray-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[400px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Product Analyst</h3>
                  <p className="text-gray-700 text-lg">Masters' Union • Gurugram</p>
                </div>
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                  <ArrowIcon />
                </div>
              </div>
              <div className="mt-4 text-gray-800">
                <p className="text-sm mb-2">Jun 2023 - May 2025</p>
                <p>Owned the data reporting pipeline for student engagement, providing weekly insights to the Dean's office.</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">PA</span>
                  </div>
                  <span>Data Analytics • Reporting</span>
                </div>
              </div>
            </div>

            {/* Experience 3: Operations Intern */}
            <div className="bg-gradient-to-br from-purple-200 via-violet-300 to-indigo-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[400px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Operations Intern</h3>
                  <p className="text-gray-700 text-lg">Masters' Union • Gurugram</p>
                </div>
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                  <ArrowIcon />
                </div>
              </div>
              <div className="mt-4 text-gray-800">
                <p className="text-sm mb-2">Jan 2023 - May 2023</p>
                <p>Supported operational excellence initiatives and process improvements at Masters' Union.</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">OI</span>
                  </div>
                  <span>Operations • Process Improvement</span>
                </div>
              </div>
            </div>

            {/* Experience 4: Research & Marketing Intern */}
            <div className="bg-gradient-to-br from-pink-200 via-rose-300 to-red-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[400px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Research & Marketing Intern</h3>
                  <p className="text-gray-700 text-lg">Readily Mobility • Remote</p>
                </div>
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                  <ArrowIcon />
                </div>
              </div>
              <div className="mt-4 text-gray-800">
                <p className="text-sm mb-2">Jun 2022 - Aug 2022</p>
                <p>Executed go-to-market strategies and conducted market research for the initial launch phase.</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">RMI</span>
                  </div>
                  <span>Market Research • Go-to-Market</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Education</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Education 1: PGDM */}
            <div className="lg:col-span-2 bg-gradient-to-br from-green-200 via-emerald-300 to-teal-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[400px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold mb-1">PGDM (Management)</h3>
                  <p className="text-gray-700 text-lg">MDI • Murshidabad</p>
                </div>
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                  <ArrowIcon />
                </div>
              </div>
              <div className="mt-4 text-gray-800">
                <p className="text-sm mb-2">2021 - 2023</p>
                <p>Secured victories in three Inter-College competitions at IIM Rohtak, MDI Gurgaon, and IMT Ghaziabad.</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">🏆</span>
                  </div>
                  <span>3 Competition Wins</span>
                </div>
              </div>
            </div>

            {/* Education 2: B.Sc */}
            <div className="bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400 rounded-[40px] p-8 md:p-10 text-gray-900 relative h-[400px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold mb-1">B.Sc. Mathematics</h3>
                  <p className="text-gray-700 text-lg">Vardhaman College • Bijnor</p>
                </div>
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-45 transition duration-300">
                  <ArrowIcon />
                </div>
              </div>
              <div className="mt-4 text-gray-800">
                <p className="text-sm mb-2">2016 - 2019</p>
                <p>Specialized in Mathematics. Built a strong foundation in analytical thinking and problem-solving.</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">∑</span>
                  </div>
                  <span>Mathematics Foundation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 text-gray-900 rounded-[40px] p-8 md:p-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">

            {/* LEFT COLUMN: Contact Info */}
            <div className="w-full md:w-1/3 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-none">
                  Let's Build <span className="text-yellow-600">Something</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
                </p>
              </div>
              <div className="flex gap-3 mt-8">
                <SocialIcon path={<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>} />
                <SocialIcon path={<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>} />
                <SocialIcon path={<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>} />
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-200 shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full font-bold py-4 rounded-full transition transform shadow-lg ${
                    status === 'success'
                      ? 'bg-green-500 text-white hover:bg-green-400'
                      : status === 'error'
                      ? 'bg-red-500 text-white hover:bg-red-400'
                      : 'bg-yellow-500 text-black hover:bg-yellow-400'
                  } ${status === 'submitting' ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}`}
                >
                  {status === 'submitting' ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : status === 'success' ? (
                    'Sent!'
                  ) : status === 'error' ? (
                    'Failed'
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;