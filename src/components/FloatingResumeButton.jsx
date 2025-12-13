import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import { FiX } from 'react-icons/fi';

export default function FloatingResumeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.button
        onClick={() => setIsModalOpen(true)}
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
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white border-2 border-black rounded-3xl shadow-[8px_8px_0px_0px_#000]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white border-2 border-black rounded-full p-2 hover:bg-[#DFFF00] transition-colors shadow-[4px_4px_0px_0px_#000]"
              >
                <FiX size={24} />
              </button>

              {/* Iframe */}
              <iframe
                src="https://flowcv.com/resume/gemtfbcj41"
                className="w-full h-[80vh] rounded-3xl"
                title="Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}