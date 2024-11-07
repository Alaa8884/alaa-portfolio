import { motion } from 'framer-motion';
import my_resume from '../../assets/resume/my-resume.pdf';
import myPhoto from '../../assets/images/my_photo.webp';

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
    transition: { duration: 1.2, ease: 'easeInOut' },
  },
};

function Hero() {
  return (
    <section>
      <div className="relative flex min-h-screen flex-col flex-wrap items-center justify-center text-white md:flex-row">
        <motion.div
          className="w-full p-8 md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="mb-6 mt-14 text-center text-xl md:text-start md:text-2xl lg:text-3xl"
            variants={textVariants}
          >
            Hey there! 🖐️ My name is
          </motion.p>
          <motion.h1
            className="mb-7 text-center font-new-mono text-2xl md:text-start md:text-4xl lg:text-5xl"
            variants={textVariants}
          >
            Alaa <span className="ml-3">Mohammed</span>
          </motion.h1>
          <motion.p
            className="mb-4 text-xl md:text-2xl lg:text-3xl"
            variants={textVariants}
          >
            Frontend developer React.js with 1 year of experience.
          </motion.p>
          <motion.p
            className="text-xl leading-8 md:text-2xl lg:text-3xl"
            variants={textVariants}
          >
            I&apos;m currently seeking for a new opportunity so helping bring
            new visions to life through interactive digital solutions.
          </motion.p>
          <motion.a
            className="mt-8 flex items-center justify-center justify-self-end md:justify-self-start"
            href={my_resume}
            download
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}
          >
            <button className="group relative min-h-[50px] w-40 overflow-hidden rounded-2xl border border-purple-500 text-purple-500 bg-stone-50 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-300 hover:text-white hover:before:h-full hover:after:h-full">
              <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-300 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-300 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center font-semibold group-hover:text-white">
                Download Resume
              </span>
            </button>
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
            className="h-[300px] w-[300px] rounded-3xl md:h-[350px] md:w-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
