import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
const aboutVariants = {
  hidden: { opacity: 0, x: -250, },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};



function About() {
  return (
    <section className="about-section mx-auto px-4 py-9 md:px-6" id="about">
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
        variants={aboutVariants}
      >
        I started my self-learner journey in web development two years ago with
        a passion for creating intuitive and scalable applications.
      </motion.p>
      <motion.p className="mt-4 text-lg" initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={aboutVariants}>
        With proficiency in the Frontend devlopment tools (HTML5, CSS3,
        Bootstrap, Sass, Javascript, React, Redux, MaterialUI, Styled Component,
        Framer Motion), i have built Projects such as admin dashboard, food
        ordering website , banking account app , and even a admin panel for
        hotel reservation dashboard.
      </motion.p>
      <motion.p className="mt-4 text-lg" initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={aboutVariants}>
        {' '}
        My projects demonstrate my ability to integrate powerful solutions with
        sleek, user-friendly frontend designs.
      </motion.p>
      <motion.p className="mt-4 text-lg" initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={aboutVariants}>
        As I am passionate about learning new technologies and keeping myself
        up-to-date with the latest trends in web development, seeking to have an
        opportunity that matches my skills.
      </motion.p>
      <img
        // src={MernStack}
        alt=""
        className="mt-4 w-52 rounded-lg p-2"
      />
    </section>
  );
}

export default About;
