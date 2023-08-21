import React from 'react';
import "./Header.css";
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
  text: string;
  ok: boolean;
}

export const Header: React.FC<Props> = ({text}) => {
  return (
    <div className='header'>
      {/* Left side component */}
      <div className="left">
        <h2>ryan.dev</h2>
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