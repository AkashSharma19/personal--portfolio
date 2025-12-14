import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, Mail, Linkedin, Copy, Loader2, CheckCircle2, Rocket } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#DFFF00] hover:text-black hover:border-[#DFFF00] transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    goal: 'launch a new product',
    email: ''
  });

  // --- NEW: State for the animation sequence ---
  const [status, setStatus] = useState('idle'); // 'idle' | 'deploying' | 'shipped'

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleShip = async (e) => {
    e.preventDefault();
    if (status !== 'idle') return;

    if (!validate()) return;

    // 1. Start "Deployment"
    setStatus('deploying');

    try {
      // 2. Send data to Zapier (using no-cors to avoid CORS issues)
      await fetch(import.meta.env.VITE_ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });

      // Since no-cors doesn't allow checking response, assume success
      setStatus('shipped');

      // 3. Reset after success message (Wait 4 seconds)
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', company: '', goal: 'launch a new product', email: '' }); // Reset form
      }, 4000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-12 border-t-2 border-[#DFFF00] font-sans relative overflow-hidden">
      
      {/* (Keep your existing Left Column code here...) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        
        {/* LEFT COLUMN: Contact Info (Same as before) */}
        <div className="w-full md:w-1/3 flex flex-col justify-between">
            <div>
               <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-none">
                 Let's Build <br/> <span className="text-[#DFFF00]">Something.</span>
               </h2>
               <p className="text-gray-400 text-lg">Don't like forms? No problem.</p>
            </div>
            <div className="flex gap-4">
              <SocialLink icon={FaLinkedin} href="https://linkedin.com/in/akash-sharma-10091999" />
              <SocialLink icon={FaGithub} href="https://github.com/AkashSharma19" />
              <SocialLink icon={FaTwitter} href="#" />
            </div>
        </div>

        {/* RIGHT COLUMN: The "Mad Libs" Form */}
        <div className="flex-1 bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-800 backdrop-blur-sm">
          <form className="text-lg md:text-xl font-bold leading-relaxed text-gray-400" onSubmit={handleShip}>
            
            <span>Hi Akash, my name is </span>
            <input
              type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
              className={`bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-600'} text-[#DFFF00] placeholder:text-gray-600 focus:border-[#DFFF00] focus:outline-none w-[200px] text-center inline-block mx-2`}
            />
            <span> from </span>
            <input
              type="text" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange}
              className={`bg-transparent border-b-2 ${errors.company ? 'border-red-500' : 'border-gray-600'} text-[#DFFF00] placeholder:text-gray-600 focus:border-[#DFFF00] focus:outline-none w-[200px] text-center inline-block mx-2`}
            />
            <span> and I want to </span>
            <select name="goal" value={formData.goal} onChange={handleChange}
              className="bg-transparent border-b-2 border-gray-600 text-[#DFFF00] focus:border-[#DFFF00] focus:outline-none inline-block mx-2"
            >
              <option value="launch a new product">launch a new product</option>
              <option value="grow my business">grow my business</option>
              <option value="build a website">build a website</option>
              <option value="other">other</option>
            </select>
            <span>. You can reach me at </span>
            <input
               type="email" name="email" placeholder="email@address.com" value={formData.email} onChange={handleChange}
               className={`bg-transparent border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} text-[#DFFF00] placeholder:text-gray-600 focus:border-[#DFFF00] focus:outline-none w-[300px] inline-block mx-2`}
            />
            <span> to discuss details.</span>


            {/* --- THE ANIMATED BUTTON --- */}
            <div className="mt-12 relative h-20"> {/* Fixed height to prevent layout jumps */}
              <button 
                onClick={handleShip}
                disabled={status !== 'idle'}
                className={`relative w-full h-full rounded-xl text-xl font-black uppercase tracking-widest overflow-hidden transition-all duration-300 ${
                  status === 'shipped' ? 'bg-green-500 text-white' : 'bg-[#DFFF00] text-black hover:scale-[1.02]'
                }`}
              >
                
                {/* 1. The Progress Bar (Only visible when 'deploying') */}
                {status === 'deploying' && (
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="absolute inset-0 bg-black/10 z-0"
                  />
                )}

                {/* 2. The Text & Icons (Swapping) */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <AnimatePresence mode="wait">
                    
                    {/* STATE: IDLE */}
                    {status === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        Ship This Message <Send size={24} />
                      </motion.div>
                    )}

                    {/* STATE: DEPLOYING */}
                    {status === 'deploying' && (
                      <motion.div
                        key="deploying"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        Deploying to Server... <Loader2 size={24} className="animate-spin" />
                      </motion.div>
                    )}

                    {/* STATE: SHIPPED */}
                    {status === 'shipped' && (
                      <motion.div
                        key="shipped"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        Shipped Successfully <CheckCircle2 size={24} />
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* 3. Rocket Fly-out (Decorative) */}
                <AnimatePresence>
                  {status === 'deploying' && (
                    <motion.div
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: 300, y: -300, opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeIn" }}
                      className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-black"
                    >
                      <Rocket size={32} />
                    </motion.div>
                  )}
                </AnimatePresence>

              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}