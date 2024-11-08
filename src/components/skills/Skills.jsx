import Html from '../../assets/images/Html.png';
import Css from '../../assets/images/CSS.png';
import Javascript from '../../assets/images/JS.png';
import ReactLogo from '../../assets/images/react-icon.png';
import ReduxLogo from '../../assets/images/Redux.png';
import Tailwind from '../../assets/images/Tailwind Css.png';
import Bootstrap from '../../assets/images/Bootstrap.png';
import StyledImage from '../../assets/images/styled-component.webp';
import MaterialUI from '../../assets/images/material.png';
import FramerMotion from '../../assets/images/framer_motion2.webp';
import NextJs from '../../assets/images/next.png';
import Sass from '../../assets/images/Sass.png';
import Github from '../../assets/images/Github3.webp';
import Git from '../../assets/images/git.png';
import SectionHeading from '../ui/SectionHeading';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <section className="skills-section mb-8 min-h-96 px-2 md:px-6" id="skills">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <SkillCard image={Html}>Html</SkillCard>
        <SkillCard image={Css}>Css</SkillCard>{' '}
        <SkillCard image={Bootstrap}>Bootstrap</SkillCard>
        <SkillCard image={Tailwind}>Tailwind</SkillCard>
        <SkillCard image={Sass}>Sass</SkillCard>
        <SkillCard image={Javascript}>Javascript</SkillCard>{' '}
        <SkillCard image={NextJs}>NextJs</SkillCard>
        <SkillCard image={ReactLogo}>React</SkillCard>
        <SkillCard image={ReduxLogo}>Redux</SkillCard>
        <SkillCard image={MaterialUI}>Material UI</SkillCard>
        <SkillCard image={StyledImage}>Styled Component</SkillCard>
        <SkillCard image={FramerMotion}>Framer Motion</SkillCard>
        <SkillCard image={Git}>Git</SkillCard>
        <SkillCard image={Github}>Github</SkillCard>
      </div>
    </section>
  );
}

export default Skills;
