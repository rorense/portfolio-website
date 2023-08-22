import React from 'react';
import header from "./Header.module.css";
import { HashLink as Link } from 'react-router-hash-link';

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
      </div>
    </div>
  )
}