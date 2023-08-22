import React from 'react';
import stack from "./Stack.module.css";

export const Stack: React.FC = () => {
  return (
    <div className={stack.stack} id="stack">
      <p>My Tech Stack</p>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Et praesentium enim excepturi officia eveniet consequatur autem fugit, 
        corrupti dolorum nostrum unde! Maiores ut vero minima repellat corporis 
        impedit totam voluptatem?</span>
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
