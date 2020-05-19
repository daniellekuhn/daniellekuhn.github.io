import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import ImageBar from '../Components/ImageBar/ImageBar'
import AboutMe from '../Components/AboutMe/AboutMe'
import Projects from '../Components/Projects/Projects'
import Experience from '../Components/Experience/Experience'
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={ImageBar}></Route>
        <Route path="/AboutMe" exact component={AboutMe}></Route>
        <Route path="/MyProjects" exact component={Projects}></Route>
        <Route path="/Experience" exact component={Experience}></Route>
    </BrowserRouter>
  );
}

export default App;
