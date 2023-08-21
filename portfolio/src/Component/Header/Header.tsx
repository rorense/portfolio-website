import React from 'react';
import "./Header.css";

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
        <h3>About</h3>
        <h3>Stack</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
    </div>
  )
}