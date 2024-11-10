import { motion } from 'framer-motion';
import { RiDownload2Fill } from '@remixicon/react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import my_resume from '../../assets/resume/my-resume.pdf';


const aboutVariantsFromLeft = {
  hidden: { opacity: 0, y: 70, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};
const aboutVariantsFromRight = {
  hidden: { opacity: 0, y: 70,x: 200 },
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
      className="about-section mx-auto my-9 px-4 pt-7 md:min-h-screen md:px-6"
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
        viewport={{ once: true }}
        variants={aboutVariantsFromLeft}
      >
        I started my self-learner journey in web development two years ago with
        a passion for creating intuitive and scalable applications.
      </motion.p>
      <motion.p
        className="mt-4 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={aboutVariantsFromRight}
      >
        With proficiency in the Frontend devlopment tools (HTML5, CSS3,
        Bootstrap, Sass, Javascript, React, Redux, MaterialUI, Styled Component,
        Framer Motion), I have built projects such as admin dashboard, food
        ordering website , banking account app , and even a admin panel for
        hotel reservation dashboard.
      </motion.p>
      <motion.p
        className="mt-4 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
        viewport={{ once: true }}
        variants={aboutVariantsFromRight}
      >
        As I am passionate about learning new technologies and keeping myself
        up-to-date with the latest trends in web development, seeking to have an
        opportunity that matches my skills.
      </motion.p>
      
        <motion.a
          className="mt-8 flex items-center justify-center justify-self-end"
          href={my_resume}
          download
          rel="noopener noreferrer"
          target="_blank"
          variants={aboutVariantsFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button btnAnimated="secondary">
            {' '}
            Download CV <RiDownload2Fill className="ml-3" size={20} />
          </Button>
        </motion.a>
    
    </section>
  );
}

export default About;
