import { PROJECTS } from '../../assets/constants';
import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';
import ProjectButton from './ProjectButton';
import { RiGithubFill } from '@remixicon/react';

function Projects() {
  return (
    <section
      className="projects-section mx-1 overflow-hidden px-6 py-9 flex flex-col"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="w-[180px] rounded-2xl text-white shadow-md shadow-purple-500 self-center">
        <ProjectButton btnColor="black" href="https://github.com/Alaa8884">
          <RiGithubFill size={20} /> All GitHub Repo
        </ProjectButton>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((item, index) => (
          <ProjectCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
