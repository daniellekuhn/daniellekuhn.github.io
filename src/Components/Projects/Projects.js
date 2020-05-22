import React from 'react';
import styles from './Projects.module.css'
import Gigl from './Project/Gigl';
import Trivia from './Project/Trivia';
import ArrToZone from './Project/ArrToZone';

const Projects = () => {
    return (
    <div id="MyProjects" className={styles['background']}>
        <div className={styles['footer']}>
        <div className="container">
        <div className={styles['headerTitle']}>Software Projects</div>
            <div className="row text-center">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="container">
                        <div className="embed-responsive embed-responsive-1by1 w-70">
                            <a href="/#Gigl">
                                <img src="https://i.imgur.com/7ulDwMp.png" alt="..." className={styles['projectImg'] + " embed-responsive-item p-3"}></img>
                            </a>
                        </div>
                        <div className={styles['imageFooter']}>
                            Gigl
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="container">
                    <div className="embed-responsive embed-responsive-1by1 w-70">
                        <a href="/#TriviaApp">
                            <img src="https://i.imgur.com/mQlCuhR.png" alt="..." className={styles['projectImg'] + " embed-responsive-item p-3"}></img>
                        </a>
                    </div>
                    <div className={styles['imageFooter']}>
                        Trivia App
                    </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="container">
                        <div className="embed-responsive embed-responsive-1by1 w-70">
                            <a href="/#ArrToZone">
                                <img src="https://i.imgur.com/g87OHG0.png" alt="..." className={styles['projectImg'] + " embed-responsive-item p-3"}></img>
                            </a>
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
        <img className={styles['spaceImage']} src="https://i.imgur.com/3syZHXm.jpg" alt="Background"></img>   
    </div>
)
}

export default Projects;


