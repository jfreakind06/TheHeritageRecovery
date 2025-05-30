import React, { useState } from 'react';
import '../styles/Header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="site-header">
      <img src="/logo.jpeg" alt="Heritage Recovery logo" className="logo" />
      <nav className={menuOpen ? 'open' : ''}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Header;
