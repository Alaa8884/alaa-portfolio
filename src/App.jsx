import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import BackGround from './components/ui/BackGround';

function App() {
  return (
    <>
      <BackGround />
      <Header />
      <main className=' antialiased overflow-x-hidden max-w-7xl mx-auto relative z-30'>
      <Hero/>

      </main>
    </>
  );
}

export default App;
