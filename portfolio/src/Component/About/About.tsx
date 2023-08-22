import React from 'react';
import about from "./About.module.css";

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
          <img src="/photo/ryan_photo.JPG" alt="That's me!"/>
        </div>
        <div className={about.about_me}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos alias deserunt incidunt ad? 
            Commodi exercitationem itaque ipsum inventore atque facilis a necessitatibus. Voluptatibus culpa, 
            illum explicabo facilis nihil debitis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit corporis nesciunt blanditiis 
            magnam commodi ipsum culpa in perspiciatis. Delectus repellendus aspernatur optio expedita. Nam iusto rem 
            vel commodi quibusdam!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint eligendi consequatur doloremque 
            iure eveniet quae facere libero maiores vitae cum, repudiandae laudantium laborum fugiat autem iste nesciunt 
            natus? Debitis?</p>
        </div>
      </div>
    </div>
  )
}
