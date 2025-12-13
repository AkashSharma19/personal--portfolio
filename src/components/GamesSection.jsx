import React, { useState } from 'react';
import IdeaGenerator from './IdeaGenerator';
import PrioritizationGame from './PrioritizationGame';

export default function GamesSection() {
  const [activeGame, setActiveGame] = useState('idea'); // 'idea' or 'pm'

  return (
    <section className="w-full border-t-2 border-black">
      {/* Tabs */}
      <div className="sticky top-0 z-10 flex justify-center gap-4 py-8 bg-gray-100 border-b border-gray-300">
        <button
          onClick={() => setActiveGame('idea')}
          className={`px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs border-2 border-black transition-all ${
            activeGame === 'idea'
              ? 'bg-[#DFFF00] text-black shadow-[4px_4px_0px_0px_#000]'
              : 'bg-white text-gray-700 hover:bg-gray-200'
          }`}
        >
          Unicorn Generator
        </button>
        <button
          onClick={() => setActiveGame('pm')}
          className={`px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs border-2 border-black transition-all ${
            activeGame === 'pm'
              ? 'bg-[#DFFF00] text-black shadow-[4px_4px_0px_0px_#000]'
              : 'bg-white text-gray-700 hover:bg-gray-200'
          }`}
        >
          Ruthless PM
        </button>
      </div>

      {/* Game Content */}
      {activeGame === 'idea' ? <IdeaGenerator /> : <PrioritizationGame />}
    </section>
  );
}