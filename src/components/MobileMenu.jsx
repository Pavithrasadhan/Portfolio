import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
        &times;
      </button>
      <Link to="/" onClick={() => setMenuOpen(false)} className={`block ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        Home
      </Link>
      <Link to="/about" onClick={() => setMenuOpen(false)} className={`block transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        About
      </Link>
      <Link to="/experience" onClick={() => setMenuOpen(false)} className={`block transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        Experience
      </Link>
      <Link to="/education" onClick={() => setMenuOpen(false)} className={`block transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        Education
      </Link>
      <Link to="/projects" onClick={() => setMenuOpen(false)} className={`block transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        Projects
      </Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)} className={`block transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        Contact
      </Link>
    </div>
  );
};