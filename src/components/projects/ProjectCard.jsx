/* eslint-disable react/prop-types */
import { RiGithubFill,  RiPlayCircleFill } from '@remixicon/react';
import { motion } from 'framer-motion';

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
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
      className="relative h-[300px] w-[300] overflow-hidden rounded-lg transition-transform md:w-[350px] lg:w-[380px] mb-5"
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <img
        src={image}
        alt={`${name} image`}
        className="absolute inset-0 h-full w-full transition-opacity duration-300"
      />
      <div className="relative z-20 flex h-full flex-col justify-between bg-black/60 p-4 text-white">
        <h2 className="mb-4 text-2xl font-medium">{name}</h2>
        <div className="flex flex-col justify-between">
          <p className="mb-3 flex-grow text-base">{description}</p>
          <div className="mb-4 flex items-center justify-end gap-2">
            {tech.map((el, i) => (
              <p
                key={i}
                className="rounded-2xl border-2 border-purple-500 px-2 py-1 text-xs"
              >
                {el}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <a
              className="before:ease before:content-['GitHub Repo'] w-37 relative flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-black bg-stone-500 px-2 py-2 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-40 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300 hover:text-white hover:shadow-stone-700 hover:before:-rotate-180"
              href={gitHubLink}
              target="_blank"
              rel="noopener norefferer"
            >
              <span className="relative z-10 flex items-center justify-center gap-1">
                <RiGithubFill size={20} /> GitHub Repo
              </span>
            </a>{' '}
            <a
              className="before:ease before:content-['GitHub Repo'] relative flex w-32 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-black bg-purple-700 px-2 py-2 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-purple-500 before:text-black before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
              href={liveDemoLink}
              target="_blank"
              rel="noopener norefferer"
            >
              <span className="relative z-10 flex items-center justify-center gap-1"> <RiPlayCircleFill/>
                Live Demo
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
