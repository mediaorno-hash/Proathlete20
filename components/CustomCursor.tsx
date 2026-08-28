
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 400, mass: 0.1 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[data-hover="true"]');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center hidden md:flex will-change-transform"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="relative flex items-center justify-center border border-white/20"
        style={{ width: 40, height: 40 }}
        animate={{
          scale: isHovering ? 2 : 1,
          borderColor: isHovering ? '#CCFF00' : 'rgba(255,255,255,0.2)',
          rotate: isHovering ? 45 : 0
        }}
      >
        {/* Reticle Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white/40" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-white/40" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-white/40" />

        <motion.span 
          className="z-10 text-black font-black uppercase text-[6px] tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          style={{ rotate: -45 }}
        >
          ANALYZE
        </motion.span>

        {/* Center Dot */}
        <div className="w-[2px] h-[2px] bg-[#CCFF00] rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
