import { MENULINKS } from '../../assets/constants';
import MobileMenu from './MobileMenu';

function NavBar() {
  
  return (
    <nav>
      <div className="mx-auto flex max-w-6xl items-center justify-between bg-stone-950/30 p-4 backdrop-blur-lg md:my-2 md:rounded-xl">
        <h1 className="font-new-mono text-2xl uppercase tracking-widest md:text-4xl">
          <a href="#">Alaa. M</a>
        </h1>
        <div className="hidden space-x-8 md:hidden lg:flex">
          {MENULINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white transition duration-300 hover:text-purple-400 text-lg font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}

export default NavBar;
