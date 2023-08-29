import React from 'react';
import contact from "./Contact.module.css";

// Contact form component
export const Contact: React.FC = () => {
  return (
    <div className={contact.contact} id="contact">
      <div className={contact.contact_title}>
        <h1 className={contact.h1}>Contact</h1>
      </div>
      <div className={contact.contact_body}>
        <span>Let's Build Together...</span>
      </div>
      <div className={contact.contact_btn}>
        <a href='mailto:rkorense@gmail.com' className={contact.button}>Contact Me</a>
      </div>
    </div>
  )
}