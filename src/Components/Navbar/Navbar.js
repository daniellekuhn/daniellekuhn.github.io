import React from 'react';
import styles from './Navbar.module.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <div className="fixed-top">
        <nav className={"navbar navbar-expand-lg navbar-dark " +styles['background']}>
        <div className={"container " + styles['overall']}>
            <Link className="navbar-brand" to="/#home">Danielle Kuhn</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ml-3">
                        <Link className="nav-link" to="/#AboutMe">About Me</Link>
                    </li>
                    <li className="nav-item ml-3">
                        <Link className="nav-link" to="/#MyProjects">Software Projects</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;





