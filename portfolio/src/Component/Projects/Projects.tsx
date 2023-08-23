import React from 'react'
import projects from "./Projects.module.css"
import { Card } from '../Card/Card';

export const Projects: React.FC = () => {
  return (
    <div className={projects.projects} id="projects">
      <hr />
      <div className={projects.project_heading}>
        <h1 className={projects.h1}>My Work so far</h1>
      </div>

      <Card 
        img1='' 
        img2=''
        title='E-Commerice Site' 
        desc="This is a website ghghghghhghghghghghghghghghhghg" 
        link='https://ryandevshop.tech/'
        gitlink='https://github.com/rorense/ecommerce'
        key={ 1 }/>

      <Card 
        img1='/screenshot/Rbook1.png'
        img2="/screenshot/Rbook2.png"
        title='R Book'
        desc='This is my version of facebook.'
        link='https://r-book-e7c62.web.app/'
        gitlink='https://github.com/rorense/Facebook_Clone'
        key={ 2 }
      />

      <Card 
        img1=''
        img2=''
        title='Spotify Jamming'
        desc='This is a facebook clone'
        link=''
        gitlink='https://github.com/rorense/spotify-jamming'
        key={ 3 }
      />
      <hr />
    </div>
  )
}