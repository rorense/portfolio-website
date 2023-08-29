import React from 'react';
import header from "./Header.module.css";
import { HashLink as Link } from 'react-router-hash-link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import exampleCV from '../CV/CV.pdf';

// Header component
export const Header: React.FC = () => {
  return (
    <div className={header.header} id="header">
      <div className={header.left}>
        <img src="/photo/ryan_dev_logo.png" alt="" />
      </div>
      <div className={header.right}>
        <Link className={header.link} to="#about">About</Link>
        <Link className={header.link} to="#stack">Stack</Link>
        <Link className={header.link} to="#projects">Projects</Link>
        <Link className={header.link} to="#contact">Contact</Link>
        <Link className={header.link} to="https://github.com/rorense" target='_blank' title='GitHub'><GitHubIcon /></Link>
        <Link className={header.link} to="https://www.linkedin.com/in/ryan-orense/" target='_blank' title='LinkedIn'><LinkedInIcon /></Link>
        <Link className={header.link} to={ exampleCV } target="_blank" rel="noopener noreferrer" title='Open CV'><DescriptionIcon /></Link>
      </div>
    </div>
  )
}