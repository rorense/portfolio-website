import React from 'react';
import about from "./About.module.css";

// The about component.
export const About: React.FC = () => {
  return (
    <div className={about.about}>
      <div className={about.brief}>
        <span>Hi, I am Ryan, i am a junior developer with emphasis on efficiency and design</span>
      </div>
      <hr />
      <div className={about.title} id="about">
        <h1 className={about.h1}>About Me</h1>
      </div>
      <div className={about.content}>
        <div className={about.photo}>
          <img src="/photo/ryan_photo.JPG" alt="picture"/>
        </div>
        <div className={about.about_me}>
          <p>Hi there! My name is Ryan Orense and I am a proud self-taught developer from Auckland! I have a degree in Mechanical Engineering and have professional and industrial experience in the field. But over the past couple of years, I have been enlightened by how technology and coding can affect the world today!
          </p>
          <p>My first encounter with code started in my first year of my Engineering degree, learning Matlab and C as part of my first year papers. Back then, I absolutely <b>HATED</b> and despised coding as it was technically difficult and I could not for the life of me figure out how it was supposed to be fun. But through my past work experiences and seeing how the world revolves around technology,I have realised how important and enticing coding can be!
          </p>
          <p>Since then, I have been taking initiative in learning, finishing the Postgraduate Certificate in Information technology offered by the University of Auckland, and undertaking other online courses to build on my skills. I have even started free-lancing, talking to my own sets of clients helping them meet their own specifications and objectives! I am now looking for a full time position where I can utilise my skills to contribute to the overall success of the company.
          </p>
        </div>
      </div>
    </div>
  )
}
