import React from 'react';
import styles from './Navbar.module.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <div className="fixed-top">
        <nav className={"navbar navbar-expand-lg navbar-dark " +styles['background']}>
        <div className={"container " + styles['overall']}>
            <Link className="navbar-brand" to="/#home">Danielle Kuhn</Link>
            <div className="form-inline ml-auto">
                <Link className={"nav-link text-light " + styles['navLinks']} to="/#AboutMe">About Me</Link>
                <Link className={"nav-link text-light " + styles['navLinks']}  to="/#MyProjects">Software Projects</Link>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;





