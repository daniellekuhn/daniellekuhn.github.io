import React from 'react';
import styles from './Navbar.module.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    let aClass = ["nav-link"];
    aClass.push(styles['link'])

    return (
        <div className="fixed-top">
        <nav className={"navbar navbar-expand-lg navbar-dark " +styles['background']}>
        <div className={"container " + styles['overall']}>
            <Link className="navbar-brand" to="/#home">Danielle Kuhn</Link>
            {/* <a className="navbar-brand" href="/">Danielle Kuhn</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item ml-3">
                    <Link className="nav-link" to="/#AboutMe">About Me</Link>
                    {/* <a className={aClass.join(' ')} href="/AboutMe">About Me</a> */}
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link" to="/#MyProjects">Software Projects</Link>
                    {/* <a  href="/MyProjects">My Projects</a> */}
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link" to={{pathname:"Experience"}}>Experience</Link>
                    {/* <a className="nav-link" href="/Experience">Experience</a> */}
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;





