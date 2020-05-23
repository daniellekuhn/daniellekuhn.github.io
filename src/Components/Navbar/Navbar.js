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
            <Link className="navbar-brand" to={`${process.env.PUBLIC_URL}/#home`}>Danielle Kuhn</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item ml-3">
                    <Link className="nav-link" to={`${process.env.PUBLIC_URL}/#AboutMe`}>About Me</Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link" to={`${process.env.PUBLIC_URL}/#MyProjects`}>Software Projects</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;





