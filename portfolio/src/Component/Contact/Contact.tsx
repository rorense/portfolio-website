import React from 'react';
import "./Contact.css";

export const Contact: React.FC = () => {
  return (
    <div className='contact' id="contact">
      <div className="contact_title">
        <h1>Contact</h1>
      </div>
      <div className="contact_body">
        <span>Let's Build Together...</span>
      </div>
      <div className="contact_btn">
        <a href='mailto:rkorense@gmail.com' className='button'>Contact Me</a>
      </div>
    </div>
  )
}