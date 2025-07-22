
import React from 'react';
import { motion } from 'framer-motion';

interface ShapeProps {
  className: string;
  animate: object;
  transition: object;
  style: React.CSSProperties;
}

const Shape: React.FC<ShapeProps> = ({ className, animate, transition, style }) => (
  <motion.div
    className={`absolute -z-10 ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={animate}
    transition={transition}
    style={style}
  />
);

const GeometricShapes: React.FC = () => {
  const commonTransition = {
    duration: 40,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <Shape
        className="w-72 h-72 bg-purple-200/50 rounded-full"
        animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 90, 0] }}
        transition={{ ...commonTransition, duration: 45 }}
        style={{ top: '10%', left: '5%' }}
      />
      <Shape
        className="w-48 h-48 bg-teal-200/50"
        style={{ top: '20%', right: '15%', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ ...commonTransition, duration: 35 }}
      />
      <Shape
        className="w-60 h-60 bg-sky-200/50 rounded-xl"
        style={{ bottom: '15%', left: '20%' }}
        animate={{ rotate: [0, -90, 0], x: [0, 40, 0] }}
        transition={{ ...commonTransition, duration: 50 }}
      />
      <Shape
        className="w-32 h-32 bg-rose-200/50 rounded-full"
        style={{ bottom: '5%', right: '5%' }}
        animate={{ y: [0, -100, 0], scale: [1, 0.8, 1] }}
        transition={{ ...commonTransition, duration: 30 }}
      />
       <Shape
        className="w-24 h-24 bg-yellow-200/50"
        style={{ top: '60%', right: '35%', clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
        animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
        transition={{ ...commonTransition, duration: 55 }}
      />
    </div>
  );
};

export default GeometricShapes;
