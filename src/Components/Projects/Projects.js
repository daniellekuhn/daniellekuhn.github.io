import React from 'react';
import styles from './Projects.module.css'
import Gigl from './Project/Gigl';
import Trivia from './Project/Trivia';
import ArrToZone from './Project/ArrToZone';
import { HashLink as Link } from 'react-router-hash-link';
import world from './world2.jpeg'

const Projects = () => {
    return (
    <div id="MyProjects" className={styles['background']}>
        <div className={styles['footer']}>
        <div className="container">
        <h1 className={styles['headerTitle']}>Software Projects</h1>
            <div className="row text-center">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="container">
                        <div className="embed-responsive embed-responsive-1by1 w-70">
                            <Link to="/#Gigl">
                                <img src="https://i.imgur.com/7ulDwMp.png" alt="..." className={styles['projectImg'] + " embed-responsive-item p-3"}></img>       
                            </Link>
                        </div>
                        <div className={styles['imageFooter']}>
                            Gigl
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="container">
                    <div className="embed-responsive embed-responsive-1by1 w-70">
                        <Link to="/#TriviaApp">
                            <img src="https://i.imgur.com/mQlCuhR.png" alt="..." className={styles['projectImg'] + " embed-responsive-item p-3"}></img>
                        </Link>
                    </div>
                    <div className={styles['imageFooter']}>
                        Trivia App
                    </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="container">
                        <div className="embed-responsive embed-responsive-1by1 w-70">
                            <Link to="/#ArrToZone">
                                <img src="https://i.imgur.com/g87OHG0.png" alt="..." className={styles['projectImg'] + " embed-responsive-item p-3"}></img>
                            </Link>
                        </div>
                        <div className={styles['imageFooter']}>
                            ArrToZone
                        </div>
                    </div>
                </div>
            </div>
            <Gigl />
            <Trivia />
            <ArrToZone />
        </div>
        </div> 
        <img className={styles['spaceImage']} src={world} alt="Background"></img>   
    </div>
)
}

export default Projects;


