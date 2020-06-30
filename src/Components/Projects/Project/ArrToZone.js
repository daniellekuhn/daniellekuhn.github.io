import React from 'react';
import styles from './Project.module.css'
import Image from 'react-image-webp';
import LazyLoad from 'react-lazy-load';
import arrtozonestack from './Images/arrtozoneTech.png'
import arrtozonestack_web from './Images/arrtozoneTech.webp'

const ArrToZone = () => {
    return (
            <div id="ArrToZone" className="pt-1">
                <h2 className={styles['descriptionTitle']}>ArrToZone</h2>
                <div className={styles['underline'] + " container pt-3"}>
                    <div className="row">
                            <div className="col-lg-7">
                            <div className={styles['projectHeader']}>
                                Recreation of AutoZone's website with a pirate theme
                                </div>
                                <div className={styles['projectOverview'] + " mb-1"}>Recreation of AutoZone's website with a pirate theme using service-ordiented architecture. I built out the navigation and search component, including frontend and backend.&nbsp;   
                                    <a className={styles['viewGithub']} href="https://github.com/daniellekuhn/AutoZone-replica-SOA">
                                       View on Github!
                                    </a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src={arrtozonestack}
                                        webp={arrtozonestack_web}
                                        className={styles['techStack']}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center">
                                    <LazyLoad offset={4000}>
                                    <video autoPlay loop muted playsInline className={styles['demoArrToZone']}>  
                                        <source src="ArrToZone.mp4" type="video/mp4"></source>   
                                    </video> 
                                    </LazyLoad>
                                {/* <img className={styles['demoArrToZone']} src="https://media.giphy.com/media/S9Ka79Bc2nwVEeadn4/giphy.gif" alt="..."></img> */}
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default ArrToZone;

                             
