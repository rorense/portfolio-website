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
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
