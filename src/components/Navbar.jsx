import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="p-4 flex items-center justify-between bg-limestone shadow-md fixed w-full top-0 z-50">
      <img src="./Limestone logo.png" alt="logo of limestone nutrition"  className="w-20 h-20 object-contain"/>
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>
      <ul className="hidden md:flex space-x-6 text-sm">
        <li><a href="#menu" className="hover:text-slateDeep">Menu</a></li>
        <li><a href="#about" className="hover:text-slateDeep">About</a></li>
        <li><a href="#location" className="hover:text-slateDeep">Location</a></li>
      </ul>

      {/* small scren */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#D6D2C4] shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#location" onClick={() => setMenuOpen(false)}>Location</a></li>
        </ul>
      )}
    </nav>
  )
}
