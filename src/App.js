import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Work from './Components/Work';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
     
      <Contact />

    </div>
  );
}

export default App;

