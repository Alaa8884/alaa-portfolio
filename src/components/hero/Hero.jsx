import { motion } from 'framer-motion';
import myPhoto from '../../assets/images/my_photo.webp';
import {  RiArrowDownDoubleFill, } from '@remixicon/react';
import Button from '../ui/Button';

const textVariants = {
  hidden: { opacity: 0, x: -100, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.2, ease: 'linear' },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const imageVariants = {
  hidden: { clipPath: 'inset( 50% 0 50%)' },
  visible: {
    clipPath: 'inset( 0% 0 0%)',
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

function Hero() {
  return (
    <section>
      <div className="relative flex min-h-screen flex-col-reverse flex-wrap items-center justify-center text-white md:flex-row">
        <motion.div
          className="w-full p-5 md:w-1/2 md:p-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="mb-4 mt-3 text-center text-xl md:mb-6 md:mt-14 md:text-start md:text-2xl lg:text-3xl"
            variants={textVariants}
          >
            Hey there! 🖐️ My name is
          </motion.p>
          <motion.h1
            className="mb-7 text-center font-new-mono text-2xl md:text-start md:text-[28px] lg:text-5xl"
            variants={textVariants}
          >
            Alaa <span className="ml-3">Mohammed</span>
          </motion.h1>
          <motion.p
            className="mb-4 text-base md:text-2xl"
            variants={textVariants}
          >
            Frontend developer React.js with 1 year of experience.
          </motion.p>
          <motion.p
            className="text-base leading-8 md:text-2xl"
            variants={textVariants}
          >
            Building interactive digital solutions that drive business growth.
          </motion.p>
          <motion.a
            className="mt-8 flex items-center justify-center justify-self-end md:justify-self-start"
            href={"#contact"}
            variants={textVariants}
          >
            <Button btnAnimated="primary">
              {' '}
             Contact Me <RiArrowDownDoubleFill className="ml-3" size={20} />
            </Button>
          </motion.a>
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-center p-6 md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={myPhoto}
            alt="My photo"
            width={350}
            height={350}
            className="mt-12 h-[200px] w-[200px] rounded-3xl md:mt-0 md:h-[350px] md:w-[350px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
