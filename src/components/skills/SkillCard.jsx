/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const skillVariantsFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

function SkillCard({ image, children }) {
  return (
    <motion.div
      className="flex w-max items-center gap-1 rounded-lg border border-white object-cover px-2 py-1 shadow-sm shadow-purple-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={skillVariantsFromBottom}
    >
      <div className="h-10 w-12">
        <img
          src={image}
          alt="Skill image"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="font-semibold">{children}</span>
    </motion.div>
  );
}

export default SkillCard;
