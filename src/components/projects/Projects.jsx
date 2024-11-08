import { PROJECTS } from '../../assets/constants';
import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';


function Projects() {
  return (
    <section className="overflow-hidden px-6 py-9 mx-1" id="projects">
     <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((item, index) => (
          <ProjectCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
