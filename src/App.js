import React from 'react';
import Navbar from './Components/Navbar'
import ImageBar from './Components/ImageBar'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import './App.css';

function App() {
  return (
    <div>
    <Navbar/>
    <ImageBar/>
    <AboutMe/>
    <Skills/>
    <Experience/>
    </div>
  );
}

export default App;
