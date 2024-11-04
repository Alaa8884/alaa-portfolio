import { motion } from 'framer-motion';

const circleVariants = {
  animate01: {
    scale: [1, 1.2, 1],
    x: [0, 100, 0],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  animate02: {
    scale: [1, 1.1, 1],
    x: [0, 120, 0],
    y: [0, -60, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  animate03: {
    scale: [1, 1.3, 1],
    x: [0, 160, 0],
    y: [0, 70, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  animate04: {
    scale: [1, 1.4, 1],
    x: [0, 100, 0],
    y: [0, -80, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  animate05: {
    scale: [1, 1.5, 1],
    x: [0, 180, 0],
    y: [0, 90, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  animate06: {
    scale: [1, 1.6, 1],
    x: [0, 200, 0],
    y: [0, -100, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

function BackGround() {
  return (
    <div className="--main-background pointer-events-none fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden opacity-70 blur-[100px] filter">
      <motion.div
        className="absolute h-[250px] w-[350px] rounded-full bg-indigo-500"
        variants={circleVariants}
        animate="animate01"
      ></motion.div>
      <motion.div
        className="absolute h-[260px] w-[360px] rounded-full bg-indigo-500"
        variants={circleVariants}
        animate="animate02"
      ></motion.div>
      <motion.div
        className="absolute h-[270px] w-[370px] rounded-full bg-indigo-500"
        variants={circleVariants}
        animate="animate03"
      ></motion.div>
      <motion.div
        className="absolute h-[280px] w-[380px] rounded-full bg-purple-500"
        variants={circleVariants}
        animate="animate04"
      ></motion.div>
      <motion.div
        className="absolute h-[290px] w-[390px] rounded-full bg-purple-500"
        variants={circleVariants}
        animate="animate05"
      ></motion.div>
      <motion.div
        className="absolute h-[300px] w-[400px] rounded-full bg-purple-500"
        variants={circleVariants}
        animate="animate06"
      ></motion.div>
    </div>
  );
}

export default BackGround;
