import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
      <header className="header">
        <p className="header-brand">
          <img src={logo} className="header-logo" alt="logo" />
          Ohaiiiiii.
        </p>
      </header>
  );
}

export default Header;
