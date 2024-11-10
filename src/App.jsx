import { lazy } from 'react';
import About from './components/about/About';
const Contact = lazy(()=> import('./components/contact/Contact'));
const Footer = lazy(()=> import('./components/footer/Footer'));
const Header = lazy(()=> import('./components/header/Header'));
const Hero = lazy(()=> import('./components/hero/Hero'));
const Projects = lazy(()=> import('./components/projects/Projects'));
const Skills = lazy(()=> import('./components/skills/Skills'));
const BackGround = lazy(()=> import('./components/ui/BackGround'));

function App() {
  return (
    <>
      <BackGround />
      <Header />
      <main className="relative z-30 mx-auto max-w-7xl overflow-x-hidden antialiased">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
