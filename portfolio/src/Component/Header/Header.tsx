import React from 'react';
import "./Header.css";
import { HashLink as Link } from 'react-router-hash-link';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      {/* Left side component */}
      <div className="left">
        <img src="/ryan_dev_logo.png" alt="" />
      </div>
      {/* Right side component */}
      <div className="right">
        <Link className="link" to="#about">About</Link>
        <Link className="link" to="#stack">Stack</Link>
        <Link className="link" to="#projects">Projects</Link>
        <Link className="link" to="#contact">Contact</Link>
      </div>
    </div>
  )
}