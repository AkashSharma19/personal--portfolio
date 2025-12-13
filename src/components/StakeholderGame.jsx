import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, User, AlertCircle, HeartHandshake, ShieldAlert } from 'lucide-react';

// --- Game Scenarios ---
const SCENARIOS = [
  {
    id: 1,
    role: "Lead Engineer",
    name: "David",
    avatarColor: "bg-blue-500",
    message: "We can't ship the 'Dark Mode' by Friday. The legacy code is a mess and refactoring will take 2 weeks. Scope is too big.",
    options: [
      { text: "We promised the CEO! Just work late?", score: -20, feedback: "David hates you now. Morale plummeted." },
      { text: "Okay, what if we ship it buggy and fix it later?", score: -10, feedback: "Tech debt increased. David is annoyed." },
      { text: "Let's cut the custom themes for V1. Just basic Dark Mode?", score: 20, feedback: "Negotiation success! David agrees." }
    ]
  },
  {
    id: 2,
    role: "VP of Sales",
    name: "Sarah",
    avatarColor: "bg-green-500",
    message: "I have a client worth $50k who needs a 'PDF Export' button NOW or they won't sign. Can you squeeze it into this sprint?",
    options: [
      { text: "No. The roadmap is locked.", score: -10, feedback: "Sales team thinks you're a blocker." },
      { text: "Sure! We'll drop everything else.", score: -10, feedback: "Engineers are rioting. Roadmap destroyed." },
      { text: "We can't do it this sprint, but I can prioritize it for next sprint?", score: 20, feedback: "Good compromise. Deal saved." }
    ]
  },
  {
    id: 3,
    role: "The CEO",
    name: "Elon (Not that one)",
    avatarColor: "bg-purple-500",
    message: "I had a dream about AI-powered toasters. We need to pivot the entire product to focus on Toaster-GPT. Thoughts?",
    options: [
      { text: "That sounds... interesting? Let's do it!", score: -20, feedback: "Focus lost. Company bankrupt in 6 months." },
      { text: "That's stupid. No.", score: -20, feedback: "You were fired immediately." },
      { text: "Interesting vision. Let's do a quick market validation test first?", score: 20, feedback: "Crisis averted with data. Good PMing." }
    ]
  }
];

export default function StakeholderGame() {
  const [round, setRound] = useState(0);
  const [chatLog, setChatLog] = useState([]);
  const [capital, setCapital] = useState(50); // Starting "Political Capital"
  const [gameOver, setGameOver] = useState(false);
  const chatContainerRef = useRef(null);

  const scenario = SCENARIOS[round];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  // Initial Message Load
  useEffect(() => {
    if (!gameOver && round < SCENARIOS.length) {
      // Clear log for new round or keep history? Let's keep history for "Chat" feel
      // But for simplicity, let's just add the new incoming message
      const timer = setTimeout(() => {
        setChatLog(prev => [
          ...prev,
          { type: 'incoming', text: SCENARIOS[round].message, name: SCENARIOS[round].name, color: SCENARIOS[round].avatarColor }
        ]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [round, gameOver]);

  const handleReply = (option) => {
    // 1. Add User Reply
    setChatLog(prev => [...prev, { type: 'outgoing', text: option.text }]);

    // 2. Calculate Result
    const newCapital = Math.min(100, Math.max(0, capital + option.score));
    setCapital(newCapital);

    // 3. Add System Feedback
    setTimeout(() => {
      setChatLog(prev => [...prev, { type: 'system', text: option.feedback, isPositive: option.score > 0 }]);

      // 4. Next Round or Game Over logic
      setTimeout(() => {
        if (newCapital <= 0) {
          setGameOver(true); // Fired
        } else if (round < SCENARIOS.length - 1) {
          setRound(r => r + 1);
        } else {
          setGameOver(true); // Win
        }
      }, 1500);
    }, 600);
  };

  const resetGame = () => {
    setRound(0);
    setChatLog([]);
    setCapital(50);
    setGameOver(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 relative overflow-hidden">

      {/* Header: Political Capital Bar */}
      <div className="bg-white border-b-2 border-black p-4 flex justify-between items-center z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white p-2 rounded-lg"><MessageSquare size={20} /></div>
          <div>
            <div className="text-xs font-bold uppercase text-gray-400">Stakeholder Simulator</div>
            <div className="text-sm font-black uppercase">Slack (99+)</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
            <span>Political Capital</span>
            <span>{capital}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full border border-black overflow-hidden">
             <motion.div
               className={`h-full ${capital > 50 ? 'bg-[#DFFF00]' : 'bg-red-500'}`}
               initial={{ width: '50%' }}
               animate={{ width: `${capital}%` }}
             />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {chatLog.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex w-full ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.type === 'incoming' && (
                <div className={`w-8 h-8 rounded-full border-2 border-black flex-shrink-0 mr-2 flex items-center justify-center text-white text-xs font-bold ${msg.color}`}>
                  {msg.name[0]}
                </div>
              )}

              {msg.type === 'system' ? (
                <div className={`text-xs font-bold uppercase px-3 py-1 rounded-full border border-black ${msg.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} mx-auto`}>
                  {msg.text}
                </div>
              ) : (
                <div className={`max-w-[80%] p-4 rounded-xl border-2 border-black text-sm font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] ${
                  msg.type === 'outgoing' ? 'bg-[#DFFF00] rounded-tr-none' : 'bg-white rounded-tl-none'
                }`}>
                  {msg.type === 'incoming' && <div className="text-xs font-bold text-gray-400 mb-1 uppercase">{msg.name}</div>}
                  {msg.text}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Game Over Screen Overlay */}
        {gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 text-center bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_#000] mx-auto mt-8 max-w-sm"
          >
            {capital > 0 ? (
              <>
                <HeartHandshake size={48} className="mx-auto mb-4 text-[#DFFF00] fill-black" />
                <h3 className="text-2xl font-black uppercase mb-2">Promoted!</h3>
                <p className="text-sm text-gray-600 mb-6">You kept everyone happy without ruining the product.</p>
              </>
            ) : (
              <>
                <ShieldAlert size={48} className="mx-auto mb-4 text-red-500" />
                <h3 className="text-2xl font-black uppercase mb-2">Fired!</h3>
                <p className="text-sm text-gray-600 mb-6">You ran out of political capital.</p>
              </>
            )}
            <button onClick={resetGame} className="bg-black text-white px-6 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform">
              Try Again
            </button>
          </motion.div>
        )}

      </div>

      {/* Input Area (Choices) */}
      {!gameOver && scenario && (
        <div className="bg-white border-t-2 border-black p-4 z-20">
          <div className="text-[10px] font-bold uppercase text-gray-400 mb-2 text-center">Select your reply</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {scenario.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleReply(opt)}
                className="text-left text-xs font-bold p-3 rounded-lg border-2 border-transparent hover:border-black hover:bg-gray-100 transition-all active:scale-95 bg-gray-50"
              >
                "{opt.text}"
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}