import React from "react";
import projects from "./Projects.module.css";
import { Card } from "../Card/Card";

// Project component
export const Projects: React.FC = () => {
  return (
    <div className={projects.projects} id="projects">
      <hr />
      <div className={projects.project_heading}>
        <h1 className={projects.h1}>My Work so far</h1>
      </div>

      <Card
        img1="/screenshot/bnb1.png"
        img2="/screenshot/bnb2.png"
        title="Bed and Breakfast Rental Site"
        desc="A website where you can rent a bed and breakfast accomodation. It allows users to filter, select and book different accomodations.
        Built using Next JS, MongoDB for the database. Other notable technologies include Tailwind CSS, Axios Prisma and NextAuth "
        link="https://bed-breakfast-khaki.vercel.app/"
        gitlink="https://github.com/rorense/bed-breakfast"
        key={1}
      />

      <Card
        img1="/screenshot/commerce1.png"
        img2="/screenshot/commerce2.png"
        title="E-Commerice Site"
        desc="A simple e-commerce website where users can browse and add items to cart for shopping.
        Front-end created using React with back-end database using Strapi API. Other notable tech stack
        used were CSS flexbox, Redux. Currently under development with a feature being able to use online
        payments and checkout using Stripe API."
        link="https://ryandevshop.tech/"
        gitlink="https://github.com/rorense/ecommerce"
        key={2}
      />

      <Card
        img1="/screenshot/Rbook1.png"
        img2="/screenshot/Rbook2.png"
        title="R Book"
        desc="This is my version clone of the popular social network site, facebook. Front-end created using React and back-end with
        Google Firebase. With Firebase, I incorporated both Google Authetication and Database management, as well as hosting. React 
        Context API for State Management. Users can submit posts and the feed gets updated accordingly."
        link="https://r-book-e7c62.web.app/"
        gitlink="https://github.com/rorense/Facebook_Clone"
        key={3}
      />

      <Card
        img1="/screenshot/jamming1.png"
        img2="/screenshot/jamming2.png"
        title="Spotify Jamming"
        desc="A spotify playlist making app. Users are able to search different songs and add them all to playlist which will be
        added to the user's Spotify account. Front-end created using React and utilised the Spotify API to search songs and get
        user information"
        link="https://rorense.github.io/spotify-jamming/"
        gitlink="https://github.com/rorense/spotify-jamming"
        key={4}
      />
      <hr />
    </div>
  );
};
