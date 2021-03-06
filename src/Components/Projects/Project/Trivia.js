import React from 'react';
import styles from './Project.module.css'
import LazyLoad from 'react-lazy-load';
import Image from 'react-image-webp';
import triviaTech from './Images/triviaTech.png';
import triviaTech_web from './Images/triviaTech.webp'

const Trivia = () => {
    return (
            <div id="TriviaApp" className="pt-1">
                <h2 className={styles['descriptionTitle']}>Trivia App</h2>
                <div className={styles['underline'] + " container pt-3"}>
                    <div className="row">
                            <div className="col-lg-7">
                            <div className={styles['projectHeader']}>
                                Multiple-choice trivia application that is compatible with iOS, Android, and web browser
                                </div>
                                <div className={styles['projectOverview'] + " mb-1"}>I built a full-stack trivia application, compatible with iOS, Android, and web browser for friends and family to play while in quarantine!
                                Current trivia questions include multiple-choice Geography and Computer questions! &nbsp;
                                    <a className={styles['viewGithub']} href="https://github.com/daniellekuhn/DKTriviaApp">
                                        View on Github!
                                    </a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src={triviaTech}
                                        webp={triviaTech_web}
                                        alt="tech-stack"
                                        className={styles['techStack']}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center">
                                <LazyLoad offset={4000}>
                                <video autoPlay loop muted playsInline className={styles['demoTrivia']}> 
                                    <source src="Trivia1.mp4" type="video/mp4"></source>   
                                </video> 
                                </LazyLoad>
                                <LazyLoad offset={4000}>
                                <video autoPlay loop muted playsInline className={styles['demoTrivia']}>  
                                    <source src="Trivia3.mp4" type="video/mp4"></source>   
                                </video> 
                                </LazyLoad>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Trivia;

