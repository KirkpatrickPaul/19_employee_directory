import React from 'react';
import './style.css';
import headerLogo from './headerLogo.png';

function Header() {
  return (
    <header className='header'>
      <img src={headerLogo} alt='Three Fold Repetition Logo' />
      <h5>
        Three Fold <span>Repetition</span>
      </h5>
    </header>
  );
}

export default Header;
