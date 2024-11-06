import { MENULINKS } from '../../assets/constants';
import MobileMenu from './MobileMenu';

function NavBar() {
  
  return (
    <nav>
      <div className="mx-auto flex max-w-6xl items-center justify-between bg-stone-950/30 p-4 backdrop-blur-lg md:my-2 md:rounded-xl">
        <div className="tracking- bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text font-new-mono text-3xl uppercase text-transparent md:text-5xl">
          <a href="#">
            Alaa <span className="text-white"> M.</span>
          </a>
        </div>
        <div className="hidden space-x-8 md:flex">
          {MENULINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white transition duration-300 hover:text-purple-500"
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
