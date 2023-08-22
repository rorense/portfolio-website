import React from 'react';
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className="left">
        <h2>ryan.dev</h2>
        <span>Designed and Built by Ryan Orense</span>
      </div>
      <div className="right">
        <div className="icons">
          {/* Git Hub */}
          {/* LinkedIn */}
          {/* Email */}
          {/* CV? */}
        </div>
      </div>
    </div>
  )
}