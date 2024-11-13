/* eslint-disable react/prop-types */
import { RiGithubFill, RiPlayCircleFill } from '@remixicon/react';
import { motion } from 'framer-motion';
import ProjectButton from './ProjectButton';

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    rotate: -70,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ese: 'easeInOut',
      type: 'spring',
      bounce: 0.4,
    },
  },
};

function ProjectCard({ item }) {
  const { image, name, description, gitHubLink, liveDemoLink, tech } = item;
  return (
    <motion.div
      className="relative mb-5 h-[319px] w-[300] overflow-hidden rounded-lg transition-transform md:w-[350px]"
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <img
        src={image}
        alt={`${name} image`}
        className="absolute inset-0 h-full w-full transition-opacity duration-300"
        loading="lazy"
      />
      <div className="relative z-20 flex h-full flex-col justify-between bg-black/60 p-4 text-white">
        <h2 className="mb-4 text-2xl font-medium">{name}</h2>
        <div className="flex flex-col justify-between">
          <p className="mb-3 flex-grow text-base">{description}</p>
          <div className="mb-4 flex items-center justify-end gap-2">
            {tech.map((el, i) => (
              <p
                key={i}
                className="rounded-2xl border-2 border-purple-500 p-1 text-center text-xs"
              >
                {el}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-1 lg:gap-5">
            <ProjectButton href={gitHubLink} btnColor="black">
              <RiGithubFill size={20} /> GitHub Repo
            </ProjectButton>
            <ProjectButton href={liveDemoLink} btnColor="purple">
              {' '}
              <RiPlayCircleFill size={20} />
              Live Demo
            </ProjectButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
