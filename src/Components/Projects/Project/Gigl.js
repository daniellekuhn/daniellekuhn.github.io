import React from 'react';
import styles from './Project.module.css'

const Gigl = () => {
    return (
            <div>
                <div className={styles['underline'] + " container"}>
                    <div className={styles['descriptionTitle']}>
                        Gigl
                    </div>
                    <div className="row">
                            <div className="col-lg-7">
                                <div style={{fontSize: "16px", fontWeight:"bold"}}>
                                    Marketplace that allows clients to book freelancers for their upcoming events
                                </div>
                                <div style={{fontSize: 12}} className="mb-1">Have an event coming up and need talent? Gigl is a platform that connects clients to local freelancers such as photographers, bartenders, artists, and entertainers. Our website allows clients to post upcoming gigs and select a performer that meets their needs. It also allows talented peformers to create a profile, view gigs in their area, and apply for them!</div>
                                <div style={{fontSize: 12}} className="mb-2"><b>Tech Stack: </b> 
                                <div className="d-flex justify-content-center">
                                    <table className={styles['table']}>
                                    <tbody>
                                        <tr>
                                            <td  className={styles['rows']}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
                                            <td  className={styles['rows']}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js" width="60px"/></td>
                                            <td  className={styles['rows']}><img src="https://www3.assets.heroku.com/assets/logo-purple-08fb38cebb99e3aac5202df018eb337c5be74d5214768c90a8198c97420e4201.svg" alt="Heroku" title="Heroku" width="60px"/></td>
                                        </tr>
                                        <tr>
                                            <td  className={styles['rows']}><img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios" width="60px"/></td>
                                            <td  className={styles['rows']}><img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="React Router" title="React Router" width="45px"/></td>
                                            <td  className={styles['rows']}><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="60px"/></td>
                                        </tr>
                                        <tr>
                                            <td  className={styles['rows']}><img src="https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png" alt="Jest" title="Jest" width="60px"/></td>
                                            <td  className={styles['rows']}><img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="Bootstrap" title="Bootstrap" width="60px"/></td>
                                            <td  className={styles['rows']}><img src="https://www.logolynx.com/images/logolynx/f4/f436442c17fa509c78e28aa28c76b923.png" alt="MongoDB" title="MongoDB" width="60px"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles['websiteLink']}><a style={{color: "#E8E8E8"}} href="https://hratx47-gigl.herokuapp.com"> Check it out!</a></div>
                                </div>
                            </div>
                            <div className="col-lg-5 pr-2 d-flex justify-content-center">
                                <img src="https://thumbs.gfycat.com/AmazingJovialAoudad-size_restricted.gif" height="300" alt="..."></img>&nbsp;&nbsp;
                                <img src="https://thumbs.gfycat.com/MixedSeparateGraywolf-size_restricted.gif" height="300" alt="..."></img>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Gigl;


/* <b>Mobile trivia app:</b> Multiple-choice trivia application that is compatible with iOS, Android, and web browser	 */
                              
//  <b>ArrToZone website: </b>Recreation of AutoZone's website with a pirate theme