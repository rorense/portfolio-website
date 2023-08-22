import React from 'react'
import "./Projects.css"
import { Card } from '../Project_Card/Card';

export const Projects: React.FC = () => {
  return (
    <div className='projects' id="projects">
      <div className="project_heading">
        <span>My Work so far</span>
      </div>

      <Card 
      img1='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?
      ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3
      D%3D&auto=format&fit=crop&w=1539&q=80' 
      img2='https://images.unsplash.com/photo-1496449903678-68ddcb189a24?
      ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3
      D%3D&auto=format&fit=crop&w=1470&q=80'
      title='E-Commerice Site' 
      desc="This is a website ghghghghhghghghghghghghghghhghg" 
      link=''
      key={ 1 }/>

      <Card 
        img1='https://images.unsplash.com/photo-1494253109108-2e30c049369b?
        ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3
        D%3D&auto=format&fit=crop&w=1470&q=80'
        img2='https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixli
        b=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&au
        to=format&fit=crop&w=1470&q=80'
        title='Facebook Clone'
        desc='This is a facebook clone'
        link=''
        key={ 2 }
      />
    </div>
  )
}