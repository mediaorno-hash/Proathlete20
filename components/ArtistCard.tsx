
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Athlete type is now exported from types.ts
import { Athlete } from '../types';
import { ArrowUpRight, Zap } from 'lucide-react';

interface AthleteCardProps {
  athlete: Athlete;
  onClick: () => void;
}

const AthleteCard: React.FC<AthleteCardProps> = ({ athlete, onClick }) => {
  return (
    <motion.div
      className="group relative h-[500px] w-full overflow-hidden border-b border-r border-white/5 bg-[#0a0a0a] cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      data-hover="true"
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={athlete.image} 
          alt={athlete.name} 
          className="h-full w-full object-cover grayscale brightness-50 will-change-transform"
          variants={{
            rest: { scale: 1, filter: 'grayscale(100%) brightness(0.5)' },
            hover: { scale: 1.05, filter: 'grayscale(0%) brightness(0.8)' }
          }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
           <span className="text-[10px] font-bold tracking-[0.4em] uppercase border border-white/10 px-4 py-2 bg-black/40 backdrop-blur-md">
             {athlete.rank}
           </span>
           <motion.div
             variants={{
               rest: { opacity: 0, scale: 0.8 },
               hover: { opacity: 1, scale: 1 }
             }}
             className="bg-[#CCFF00] text-black p-3 rounded-full"
           >
             <Zap size={20} fill="currentColor" />
           </motion.div>
        </div>

        <div>
          <motion.div
             variants={{
               rest: { y: 20, opacity: 0 },
               hover: { y: 0, opacity: 1 }
             }}
             className="flex gap-4 mb-6"
          >
             {/* Fixed: ensuring metrics are rendered correctly with proper types from Athlete interface. 
                 Since metrics values are string | number, they are valid ReactNode children. */}
             {Object.entries(athlete.metrics).slice(0, 2).map(([key, val]) => (
                <div key={key} className="bg-white/10 backdrop-blur-xl border border-white/5 px-4 py-2">
                   <div className="text-[8px] opacity-40 uppercase tracking-widest">{key}</div>
                   <div className="text-xl font-black italic">{val}</div>
                </div>
             ))}
          </motion.div>

          <div className="overflow-hidden">
            <motion.h3 
              className="font-heading text-4xl font-black italic uppercase text-white leading-[0.8]"
              variants={{
                rest: { y: 0 },
                hover: { y: -5 }
              }}
            >
              {athlete.name}
            </motion.h3>
          </div>
          <motion.p 
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#CCFF00] mt-4"
            variants={{
              rest: { opacity: 0.5 },
              hover: { opacity: 1 }
            }}
          >
            {athlete.discipline}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default AthleteCard;
