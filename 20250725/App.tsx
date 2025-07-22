
import React from 'react';
import { motion } from 'framer-motion';
import { meetingSections } from './constants';
import { MeetingSection } from './types';
import Section from './components/Section';
import GeometricShapes from './components/GeometricShapes';

const App: React.FC = () => {
  return (
    <main className="relative w-full overflow-x-hidden">
      <GeometricShapes />
      <div className="relative z-10 h-screen w-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
        {meetingSections.map((section: MeetingSection, index: number) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            points={section.points}
            mainVisual={String(index + 1).padStart(2, '0')}
            isFirst={index === 0}
          />
        ))}

        {/* Final Section */}
        <div className="h-screen w-full snap-start flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-gray-700 tracking-tighter">
              討論議題結束
            </h2>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default App;
