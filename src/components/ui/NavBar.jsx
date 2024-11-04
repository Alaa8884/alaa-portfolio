import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLinkClick() {
    setMenuOpen(false)
  }
  return (
    <nav className=" fixed top-0 left-0 z-50">
      <div className=" flex justify-center items-center max-w-6xl mx-auto md:my-2 bg-stone-950/3 p-4 md:rounded-xl backdrop-blur-lg">
        <div className=" text-white font-mono text-lg uppercase">
          <a href="/">Alaa M.</a>
      </div>
      </div>
    </nav>
  )
}

export default NavBar
