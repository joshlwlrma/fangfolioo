import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import PixelBlast from './components/PixelBlast';
import './App.css';

function App() {
  return (
    <div className="App">
      
<div className="background-layer">
        <PixelBlast
          variant="square"
          pixelSize={10}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.1}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="content-layer">
        <Navbar /> 
        
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}

export default App;