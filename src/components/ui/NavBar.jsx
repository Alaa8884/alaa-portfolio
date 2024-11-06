import { useState } from 'react';

import { MENULINKS } from '../../assets/constants';
import { RiCloseFill, RiMenuFill } from '@remixicon/react';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick() {
    setMenuOpen(false);
  }
  return (
    <nav>
      <div className="mx-auto flex max-w-6xl items-center justify-between bg-stone-950/30 p-4 backdrop-blur-lg md:my-2 md:rounded-xl">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text font-new-mono text-3xl uppercase tracking- text-transparent md:text-5xl">
          <a href="#">Alaa M.</a>
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
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RiCloseFill className="h-6 w-6" />
            ) : (
              <RiMenuFill className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto flex max-w-6xl flex-col space-y-5 rounded-xl bg-stone-950/30 p-4 backdrop-blur-lg transition duration-200 md:hidden">
          {MENULINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={handleLinkClick}
              className="text-white transition duration-300 hover:text-purple-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
