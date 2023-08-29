import React from 'react';
import footer from "./Footer.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { HashLink as Link } from 'react-router-hash-link';
import exampleCV from '../CV/CV.pdf';

// Bottom footer component
export const Footer: React.FC = () => {
  return (
    <div className={footer.footer}>
      <div className={footer.left}>
        <Link to="#header"><img className={footer.black_logo} src="/photo/ryan_dev_logo_black.png" alt="" /></Link>
        <span>Designed and Built by Ryan Orense</span>
      </div>
      <div className={footer.right}>
        <div className={footer.icons}>
          <Link className={footer.icon} to="https://github.com/rorense" target='_blank' title='GitHub'><GitHubIcon /></Link>
          <Link className={footer.icon} to="https://www.linkedin.com/in/ryan-orense/" target='_blank' title='LinkedIn'><LinkedInIcon /></Link>
          <Link className={footer.icon} to="mailto:rkorense@gmail.com" title='Email'><EmailIcon  /></Link>
          <Link className={footer.link} to={ exampleCV } target="_blank" rel="noopener noreferrer" title='Open CV'><DescriptionIcon /></Link>
        </div>
      </div>
    </div>
  )
}