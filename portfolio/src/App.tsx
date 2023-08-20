import React from 'react';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Stack from './Component/Stack/Stack';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <About />
      <Header />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
