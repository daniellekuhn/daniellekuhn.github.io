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
                                    {/* <table className={styles['tableGigl']}>
                                    <tbody>
                                        <tr>
                                            <td  className={styles['rowsGigl']}><img className={styles['logoImages']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React"/></td>
                                            <td  className={styles['rowsGigl']}><img className={styles['logoImages']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js"/></td>
                                            <td  className={styles['rowsGigl']}><img className={styles['logoImages']} src="https://seekvectorlogo.net/wp-content/uploads/2018/12/heroku-vector-logo.png" alt="Heroku" title="Heroku"/></td>
                                        </tr>
                                        <tr>
                                            <td  className={styles['rowsGigl']}><img className={styles['logoImages']} src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios"/></td>
                                            <td  className={styles['rowsGigl']}><img className={styles['logoImages']} src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="React Router" title="React Router"/></td>
                                            <td  className={styles['rowsGigl']}><img className={styles['logoImages']} src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express"/></td>
                                        </tr>
                                        <tr>
                                            <td  className={styles['rowsGigl']}><img src="https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png" alt="Jest" title="Jest" width="60px"/></td>
                                            <td  className={styles['rowsGigl']}><img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="Bootstrap" title="Bootstrap" width="60px"/></td>
                                            <td  className={styles['rowsGigl']}><img src="https://www.logolynx.com/images/logolynx/f4/f436442c17fa509c78e28aa28c76b923.png" alt="MongoDB" title="MongoDB" width="60px"/></td>
                                        </tr>
                                        </tbody>
                                    </table>  */}
                                    <Image
                                        src={techStack}
                                        webp={techStack_web}
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