import React from 'react';
import styles from './Project.module.css';
import LazyLoad from 'react-lazy-load';
import Image from 'react-image-webp';
import techStack from './Images/giglTech.png'
import techStack_web from './Images/giglTech.webp'

const Gigl = () => {
    return (
            <div id="Gigl" className="pt-1">
                <h2 className={styles['descriptionTitle']}>Gigl</h2>
                <div className={styles['underline'] + " container pt-3"}>
                        
                    
                    <div className="row">
                            <div className="col-lg-7">
                                <div className={styles['projectHeader']}>
                                    Marketplace that allows clients to book freelancers for their upcoming events
                                </div>
                                <div className={styles['projectOverview'] + " mb-1"}>Have an event coming up and need talent? Gigl is a platform that connects clients to local freelancers such as photographers, bartenders, artists, and entertainers. Our website allows clients to post upcoming gigs and select a performer that meets their needs. It also permits talented peformers to create a profile, view gigs in their area, and apply for them! &nbsp;
                                    <a className={styles['viewGithub']} href="https://github.com/hratx47-gigl/Gigl-Website" >
                                     View on GitHub!
                                    </a>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <Image
                                        src={techStack}
                                        webp={techStack_web}
                                        alt="tech-stack"
                                        className={styles['techStack']}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center">
                                <LazyLoad offset={4000}>
                                    <video autoPlay loop muted playsInline className={styles['demo']}> 
                                        <source src="Gigl1.mp4" type="video/mp4"></source>   
                                    </video> 
                                </LazyLoad>
                                <LazyLoad offset={4000}>
                                <video autoPlay loop muted playsInline className={styles['demo']}>  
                                    <source src="gigl2.mp4" type="video/mp4"></source>   
                                </video> 
                                </LazyLoad>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Gigl;


/* <b>Mobile trivia app:</b> Multiple-choice trivia application that is compatible with iOS, Android, and web browser	 */
                              
//  <b>ArrToZone website: </b>Recreation of AutoZone's website with a pirate theme