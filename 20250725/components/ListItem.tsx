
import React from 'react';
import { motion } from 'framer-motion';

interface ListItemProps {
  text: string;
  isHovered: boolean;
  isFaded: boolean;
  onMouseEnter: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    },
  },
};

const ListItem: React.FC<ListItemProps> = ({ text, isHovered, isFaded, onMouseEnter }) => {
  const itemClasses = `
    transition-all duration-300 ease-in-out flex items-start
    ${isHovered ? 'font-bold text-teal-600' : 'text-gray-700'}
    ${isFaded ? 'opacity-40' : 'opacity-100'}
  `;

  return (
    <motion.li
      className={itemClasses}
      variants={itemVariants}
      onMouseEnter={onMouseEnter}
    >
      <span className="mr-4 mt-1.5 flex-shrink-0">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={`transition-colors duration-300 ${isHovered ? 'text-teal-500' : 'text-gray-400'}`}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.03 6.03a.75.75 0 0 1 0 1.06l-4.97 4.97 4.97 4.97a.75.75 0 0 1-1.06 1.06L9.5 12.53l-5.47-5.47a.75.75 0 0 1 1.06-1.06L10 10.94l6.03-4.91z" transform="rotate(180 12 12)"/>
        </svg>
      </span>
      <span className="text-lg md:text-xl leading-relaxed">
        {text.replace(/^-\s*/, '').replace(/^\d\.\s*/, '')}
      </span>
    </motion.li>
  );
};

export default ListItem;
