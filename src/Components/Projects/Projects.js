import React from 'react';
import styles from './Projects.module.css'
import Gigl from './Project/Gigl';
import Trivia from './Project/Trivia';
import ArrToZone from './Project/ArrToZone'

const Projects = () => {
    return (
    <div id="MyProjects" className={styles['background']}>
        <div className={styles['footer']}>
        <div className="container">
        <div className={styles['headerTitle']}>Software Projects</div>
            <div className="row text-center">
                <div className="col-4 d-flex flex-column px-0">
                    <div className={styles['projectTitle']}>Gigl</div>
                    <div className="embed-responsive embed-responsive-1by1 w-100">
                        <a href="https://github.com/hratx47-gigl/Gigl-Website">
                            <img src="https://i.imgur.com/wpHMheM.png" alt="..." className={styles['projectImg'] + " embed-responsive-item"}></img>
                        </a>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column px-0">
                <div className={styles['projectTitle']}>Trivia App</div>
                    <div className="embed-responsive embed-responsive-1by1 w-100">
                        <img src="https://i.imgur.com/X6GsFrg.png" alt="..." className={styles['projectImg'] + " embed-responsive-item"}></img>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column px-0">
                <div className={styles['projectTitle']}>ArrToZone</div>
                    <div className="embed-responsive embed-responsive-1by1 w-100">
                        <img src="https://i.imgur.com/PTfA5gx.png" alt="..." className={styles['projectImg'] + " embed-responsive-item"}></img>
                    </div>
                </div>
            </div>
            <div className={styles['clickFor']}>Click for Github repo!</div>
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


/* <div className="container">
                    
                    <div className="row">
                        <div className="col-4">
                            <div className={styles['projectContainer']}>
                                <img className={styles['projectImg1']} src="https://i.imgur.com/wpHMheM.png" alt="..."></img>
                            </div>
                        </div>
                        <div className="col-4">
                            <img className={styles['projectImg1']} src="https://i.imgur.com/X6GsFrg.png" alt="..."></img>
                        </div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
            <div>
                 */