import React from 'react';
import { Header } from './Component/Header/Header';
import { About } from './Component/About/About';
import { Stack } from './Component/Stack/Stack';
import { Projects } from './Component/Projects/Projects';
import { Contact } from './Component/Contact/Contact';
import { Footer } from './Component/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header ok={ true } text='Hi'/>
      <About />
      <Stack />
      <span>My Work so far...</span>
      <Projects 
        title='E-Commerice Website' 
        img='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY
        2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80' 
        desc='This is a ecommerce website'
        link=''/>
      <Contact />
      <Footer />
    </div>
  );
}
