import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} The Heritage Recovery. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
