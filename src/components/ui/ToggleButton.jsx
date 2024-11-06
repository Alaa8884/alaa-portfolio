/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="fixed right-[20px] top-[12px] z-50 h-[50px] w-[50px] cursor-pointer rounded-full border-none bg-transparent"
    >
      <svg width="22" height="22" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}

export default ToggleButton;
