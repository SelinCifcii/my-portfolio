import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = ({ nav, handleNav }) => {
  return (
    <div className="hamburger-menu" onClick={handleNav}>
      {nav ? <FaTimes /> : <FaBars />}
    </div>
  );
};

export default HamburgerMenu; 