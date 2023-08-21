import React from 'react';
import "./Stack.css";

export const Stack: React.FC = () => {
  return (
    <div className='stack'>
      <h2>My Tech Stack</h2>
      <div className="icons">
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
