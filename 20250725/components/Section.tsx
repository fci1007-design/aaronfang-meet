
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ListItem from './ListItem';

interface SectionProps {
  id: string;
  title?: string;
  points: string[];
  mainVisual: string;
  isFirst?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Section: React.FC<SectionProps> = ({ id, title, points, mainVisual, isFirst = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} id={id} className="h-screen w-full snap-start flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-[12rem] lg:text-[18rem] font-black text-gray-200/80 select-none -translate-x-4 md:-translate-x-8">
            {mainVisual}
          </span>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl transition-all duration-300 ease-out"
            whileHover={{ scale: 1.03, rotate: -1 }}
          >
            {isFirst && title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-800">
                {title}
              </h2>
            )}
            <ul className="space-y-4 md:space-y-5" onMouseLeave={() => setHoveredIndex(null)}>
              {points.map((point, index) => (
                <ListItem
                  key={index}
                  text={point}
                  isFaded={hoveredIndex !== null && hoveredIndex !== index}
                  isHovered={hoveredIndex === index}
                  onMouseEnter={() => setHoveredIndex(index)}
                />
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section;
