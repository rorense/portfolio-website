import React from 'react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { HashLink as Link } from 'react-router-hash-link';
import exampleCV from './CV.pdf';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className="left">
        <Link to="#header"><img className="black_logo"src="/photo/ryan_dev_logo_black.png" alt="" /></Link>
        <span>Designed and Built by Ryan Orense</span>
      </div>
      <div className="right">
        <div className="icons">
          <Link className="icon" to="https://github.com/rorense" target='_blank'><GitHubIcon /></Link>
          <Link className="icon" to="https://www.linkedin.com/in/ryan-orense/" target='_blank'><LinkedInIcon /></Link>
          <Link to="mailto:rkorense@gmail.com" className='icon'><EmailIcon  /></Link>
          <Link className='icon' to={ exampleCV }  download="Ryan Orense CV" target="_blank" rel="noreferrer"><DescriptionIcon /></Link>
        </div>
      </div>
    </div>
  )
}