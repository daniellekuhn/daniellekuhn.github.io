import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import ImageBar from '../Components/ImageBar/ImageBar'
import AboutMe from '../Components/AboutMe/AboutMe'
import Projects from '../Components/Projects/Projects'
import ContactMe from '../Components/ContactMe/ContactMe'
// import Experience from '../Components/Experience/Experience'
import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
    <div id="home" className={styles['background']}>
        <Navbar/>
        <ImageBar/>
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
