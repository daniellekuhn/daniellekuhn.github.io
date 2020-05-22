import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import ImageBar from '../Components/ImageBar/ImageBar'
import AboutMe from '../Components/AboutMe/AboutMe'
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer'
import { HashRouter } from 'react-router-dom'
import styles from './App.module.css'

function App() {
  return (
    <HashRouter>
    <div id="home" className={styles['background']}>
        <Navbar/>
        <ImageBar/>
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
