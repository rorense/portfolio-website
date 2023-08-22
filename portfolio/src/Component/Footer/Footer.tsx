import React from 'react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className="left">
        <h2>ryan.dev</h2>
        <span>Designed and Built by Ryan Orense</span>
      </div>
      <div className="right">
        <div className="icons">
          <Link className="icon" to="https://github.com/rorense" target='_blank'><GitHubIcon /></Link>
          <Link className="icon" to="https://www.linkedin.com/in/ryan-orense/" target='_blank'><LinkedInIcon /></Link>
          <EmailIcon className='icon' />
          <DescriptionIcon className='icon'/>
        </div>
      </div>
    </div>
  )
}