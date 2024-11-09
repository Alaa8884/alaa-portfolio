import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
const aboutVariantsFromLeft = {
  hidden: { opacity: 0, y: 70, x: -350 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};
const aboutVariantsFromRight = {
  hidden: { opacity: 0, y: 70,x: 350 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

function About() {
  return (
    <section
      className="about-section mx-auto md:min-h-screen px-4 pt-7 md:px-6"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="text-center">
        <h2 className="mt-2 text-2xl font-extrabold leading-8 tracking-tight md:text-3xl">
          <span className="mr-2 text-purple-500">Hi,</span> I&apos;m Alaa
          Mohammed
        </h2>
        <motion.p className="mt-4 text-xl lg:mx-auto">
          A Frontend Developer with expertise in web development
        </motion.p>
      </div>
      <motion.p
        className="mt-4 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={aboutVariantsFromLeft}
      >
        I started my self-learner journey in web development two years ago with
        a passion for creating intuitive and scalable applications.
      </motion.p>
      <motion.p
        className="mt-4 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={aboutVariantsFromRight}
      >
        With proficiency in the Frontend devlopment tools (HTML5, CSS3,
        Bootstrap, Sass, Javascript, React, Redux, MaterialUI, Styled Component,
        Framer Motion), i have built Projects such as admin dashboard, food
        ordering website , banking account app , and even a admin panel for
        hotel reservation dashboard.
      </motion.p>
      <motion.p
        className="mt-4 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={aboutVariantsFromLeft}
      >
        {' '}
        My projects demonstrate my ability to integrate powerful solutions with
        sleek, user-friendly frontend designs.
      </motion.p>
      <motion.p
        className="mt-4 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={aboutVariantsFromRight}
      >
        As I am passionate about learning new technologies and keeping myself
        up-to-date with the latest trends in web development, seeking to have an
        opportunity that matches my skills.
      </motion.p>
    </section>
  );
}

export default About;
