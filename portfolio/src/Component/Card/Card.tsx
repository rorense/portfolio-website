import React from 'react';
import card from "./Card.module.css";
import { Link } from 'react-router-dom';

interface Props {
  img1: string;
  img2: string;
  title: string;
  desc: string;
  link: string;
}

export const Card: React.FC<Props> = ({ img1, img2, title, desc, link }) => {
    return (
        <div className={card.card}>
            <div className={card.card_left}>
                <img className={card.img1} src={ img1 } alt="" />
                <img className={card.img2} src={ img2 } alt="" />
            </div>
            <div className={card.card_right}>
                <h1>{ title }</h1>
                <span>{ desc }</span>
                <br />
                <Link className={card.link} to={ link }>Click here for demo</Link>
            </div>
        </div>
    );
};
