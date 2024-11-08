import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import BackGround from './components/ui/BackGround';

function App() {
  return (
    <>
      <BackGround />
      <Header />
      <main className="relative z-30 mx-auto max-w-7xl overflow-x-hidden antialiased">
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default App;
