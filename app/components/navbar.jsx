'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link href="/" className="logo">
          Faheem Portfolio
        </Link>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <nav className={`menu-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/education" onClick={() => setIsOpen(false)}>Education</Link></li>
          <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
