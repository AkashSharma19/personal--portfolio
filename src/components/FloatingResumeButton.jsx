import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Download } from 'lucide-react';

export default function FloatingResumeButton() {
  return (
    <motion.a
      href="/Akash Sharma Resume.pdf" // Ensure this file is in your 'public' folder
      download="Akash_Sharma_Resume.pdf" // The name the file will have when downloaded
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#DFFF00] px-6 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-shadow cursor-pointer group"
    >
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-bold uppercase tracking-wider text-black/60">Get my CV</span>
        <span className="text-sm font-black uppercase text-black">Download</span>
      </div>

      <div className="bg-black text-[#DFFF00] p-2 rounded-full group-hover:rotate-12 transition-transform">
        <Download size={20} strokeWidth={3} />
      </div>
    </motion.a>
  );
}