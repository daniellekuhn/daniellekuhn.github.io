import React from 'react';
import styles from './Projects.module.css'
import Gigl from './Project/Gigl';
import Trivia from './Project/Trivia';
import ArrToZone from './Project/ArrToZone';
import { HashLink as Link } from 'react-router-hash-link';
import world from './Images/world2.jpeg'
import Image from 'react-image-webp';
import world_web from './Images/world2.webp'
import arrtozone_web from './Images/rsz_arrtozone.webp'
import arrtozone from './Images/rsz_arrtozone.png'
import LazyLoad from 'react-lazy-load';


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
                                <Image
                                    src={arrtozone}
                                    webp={arrtozone_web}
                                    className={styles['projectImg'] + " embed-responsive-item p-3"}
                                />
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
        <LazyLoad offset={6000}>
            <Image
                src={world}
                webp={world_web}
                className={styles['spaceImage']}
            />
        </LazyLoad>
    </div>
)
}

export default Projects;


