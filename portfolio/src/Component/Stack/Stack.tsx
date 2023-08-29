import React from 'react';
import stack from "./Stack.module.css";

// Tech Stack component
export const Stack: React.FC = () => {
  return (
    <div className={stack.stack} id="stack">
      <hr />
      <div className={stack.title}>
        <h1 className={stack.h1}>My Tech Stack</h1>
      </div>
      <div className={stack.desc}>
        Apart from the formal education I have listed on my CV, I have taken a number of 
        online courses such as <b>Codecademy</b>, <b>Odin Project</b>, <b>Coursera</b> and <b>Udemy</b>. 
        I am always trying to upskill and learn about different technologies.
      </div>
      <div className={stack.icons}>
        <img src="/icons/html.png" title="HTML" alt="" />
        <img src="/icons/css.png" title='CSS' alt="" />
        <img src="/icons/javascript.png" title='JavaScript' alt="" />
        <img src="/icons/react.png" title='React' alt="" />
        <img src="/icons/node.png" title='Node' alt="" />
        <img src="/icons/typescript.png" title='TypeScript' alt="" />
        <img src="/icons/firebase.png" title='Firebase' alt="" />
        <img src="/icons/redux.png" title='Redux' alt="" />
        <img src="/icons/mongodb" title='MongoDB' alt="" />
      </div>
    </div>
  )
}
