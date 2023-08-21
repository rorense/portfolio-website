import React from 'react'
import "./Projects.css"
import { Link } from "react-router-dom";

interface Props {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export const Projects: React.FC<Props> = ({img, title, desc, link}) => {
  return (
    <div className='projects' id="projects">
      <div className="left">
        <img src={ img } alt="" />
      </div>
      <div className="right">
        <h3>{ title }</h3>
        <span>{ desc }</span>
        <div className="link">
          <Link to="">Click here for a live demo</Link>
        </div>
      </div>
    </div>
  )
}