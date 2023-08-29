import React from 'react';
import { Header } from './Component/Header/Header';
import { About } from './Component/About/About';
import { Stack } from './Component/Stack/Stack';
import { Projects } from './Component/Projects/Projects';
import { Contact } from './Component/Contact/Contact';
import { Footer } from './Component/Footer/Footer';
import "./App.css";

// Main App component
export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
