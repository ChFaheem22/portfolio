'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="logo">Faheem Portfolio</p>
      </div>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>

      {menuOpen && (
        <div className="menu-links">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
