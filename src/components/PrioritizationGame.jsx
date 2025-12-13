import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ThumbsUp, ThumbsDown } from 'lucide-react';

// --- Game Data: The Backlog ---
const CARDS = [
  {
    id: 1,
    title: "CEO's 'Vision'",
    desc: "Can we add AI Blockchain NFTs to the login page?",
    impact: "Low Impact",
    effort: "High Effort",
    correct: "kill", // Expected answer
    feedback: "Good call. Saved engineering 3 months of pain.",
  },
  {
    id: 2,
    title: "Critical Bug",
    desc: "Checkout button is broken on mobile devices.",
    impact: "High Impact",
    effort: "Low Effort",
    correct: "ship",
    feedback: "Revenue saved! You are a hero.",
  },
  {
    id: 3,
    title: "Sales Request",
    desc: "Make the logo 500% bigger.",
    impact: "Negative Impact",
    effort: "Low Effort",
    correct: "kill",
    feedback: "Design team sends their regards.",
  },
  {
    id: 4,
    title: "Tech Debt",
    desc: "Refactor the legacy database schema.",
    impact: "High Long-term",
    effort: "High Effort",
    correct: "ship",
    feedback: "Scalability achieved. Devs love you.",
  },
  {
    id: 5,
    title: "Dark Mode",
    desc: "Users keep tweeting about their eyes hurting.",
    impact: "High Delight",
    effort: "Medium Effort",
    correct: "ship",
    feedback: "User satisfaction +100.",
  }
];

export default function PrioritizationGame() {
  const [cards, setCards] = useState(CARDS);
  const [history, setHistory] = useState([]); // To show feedback logs
  const [gameOver, setGameOver] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  // Handle Swipe/Button Action
  const handleDecision = (decision) => {
    if (cards.length === 0) return;

    const currentCard = cards[0];
    const isCorrect = currentCard.correct === decision;

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }

    // Add result to history
    const resultLog = {
      id: currentCard.id,
      text: isCorrect ? `✅ ${currentCard.feedback}` : `❌ Oops. (Ideally you'd ${currentCard.correct} this)`,
    };

    setHistory((prev) => [resultLog, ...prev].slice(0, 2)); // Keep last 2 logs
    setCards((prev) => prev.slice(1)); // Remove top card

    if (cards.length === 1) {
      setTimeout(() => setGameOver(true), 500);
    }
  };

  const resetGame = () => {
    setCards(CARDS);
    setHistory([]);
    setGameOver(false);
    setCorrectCount(0);
  };

  return (
    <div className="w-full py-8 bg-white font-sans flex flex-col items-center overflow-hidden">

      <div className="max-w-xl w-full px-6 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-[#DFFF00] border-2 border-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-[4px_4px_0px_0px_#000]">
            Simulator
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-none mb-3">
            The Ruthless PM
          </h2>
          <p className="font-medium text-gray-500">
            Clear the backlog. Ship value. Kill scope creep.
          </p>
        </div>

        {/* Game Area */}
        <div className="relative w-full h-[320px] flex justify-center items-center mb-4">

          <AnimatePresence>
            {cards.map((card, index) => {
              // Only render top 2 cards for performance
              if (index > 1) return null;
              const isTop = index === 0;

              return (
                <motion.div
                  key={card.id}
                  initial={{ scale: 0.95, y: 10, opacity: 0 }}
                  animate={{
                    scale: isTop ? 1 : 0.95,
                    y: isTop ? 0 : 10,
                    opacity: 1,
                    zIndex: cards.length - index
                  }}
                  exit={{ x: card.decision === 'ship' ? 500 : -500, opacity: 0, rotate: card.decision === 'ship' ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                  drag={isTop ? "x" : false} // Only top card is draggable
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    if (Math.abs(offset.x) > 100) {
                      handleDecision(offset.x > 0 ? 'ship' : 'kill');
                    }
                  }}
                  className="absolute w-full max-w-sm bg-white border-2 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between h-[280px] cursor-grab active:cursor-grabbing"
                >
                  {/* Card Content */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase rounded">
                        Ticket #{card.id}
                      </span>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-bold uppercase text-gray-400">{card.impact}</span>
                        <span className="text-[10px] font-bold uppercase text-gray-400">{card.effort}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-black uppercase leading-tight mb-2">{card.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      "{card.desc}"
                    </p>
                  </div>

                  {/* Swipe Hints (Visual only) */}
                  <div className="flex justify-between mt-6 pt-6 border-t-2 border-dashed border-gray-200 opacity-40">
                    <div className="flex items-center gap-1 text-red-500 font-black uppercase text-xs">
                      <X size={16} /> Kill
                    </div>
                    <div className="flex items-center gap-1 text-green-600 font-black uppercase text-xs">
                      Ship <Check size={16} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty State (Win Screen) */}
          {gameOver && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-[#E6F9C9] p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#000]"
            >
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="text-2xl font-black uppercase mb-2">Backlog Cleared!</h3>
              <p className="text-gray-700 font-medium mb-6">
                {correctCount === 5 ? "Perfect! You are a prioritization master." :
                 correctCount >= 4 ? "Great job! You cleared the backlog efficiently." :
                 correctCount >= 3 ? "Backlog cleared, but with some questionable decisions." :
                 "Backlog cleared... barely. Time to rethink your priorities."}
              </p>
              <button
                onClick={resetGame}
                className="bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Play Again
              </button>
            </motion.div>
          )}
        </div>

        {/* Manual Controls (For accessibility/Desktop) */}
        {!gameOver && (
          <div className="flex gap-3 w-full max-w-sm">
            <button
              onClick={() => handleDecision('kill')}
              className="flex-1 bg-white border-2 border-black py-3 rounded-xl shadow-[4px_4px_0px_0px_#000] hover:bg-red-50 hover:border-red-500 hover:text-red-500 font-black uppercase tracking-widest flex items-center justify-center gap-1 transition-colors text-sm"
            >
              <ThumbsDown size={16} /> Kill
            </button>
            <button
              onClick={() => handleDecision('ship')}
              className="flex-1 bg-[#DFFF00] border-2 border-black py-3 rounded-xl shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] font-black uppercase tracking-widest flex items-center justify-center gap-1 transition-all text-sm"
            >
              Ship <ThumbsUp size={16} />
            </button>
          </div>
        )}

        {/* Feedback Logs (Toast Style) */}
        <div className="mt-4 space-y-1 w-full max-w-sm min-h-[40px]">
          <AnimatePresence>
            {history.map((log, i) => (
              <motion.div
                key={i} // simple key for log list
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs font-bold text-gray-600 bg-gray-100 p-2 rounded border border-gray-300 text-center"
              >
                {log.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}