'use client';

import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { useState, useEffect } from 'react';

const texts = ["Design Engnieer", "Full Stack Developer", "Software Engineer", "Learner"];

export default function RevolvingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: easeInOut }}
          className="absolute"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
