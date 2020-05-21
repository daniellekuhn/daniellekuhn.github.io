import React from 'react';
import styles from './Project.module.css'

const Trivia = () => {
    return (
            <div>
                <div className={styles['underline2'] + " container"}>
                    <div className={styles['descriptionTitle']}>
                        Trivia App
                    </div>
                    <div className="row">
                            <div className="col-lg-8">
                                <div style={{fontSize: "16px", fontWeight:"bold"}}>
                                Multiple-choice trivia application that is compatible with iOS, Android, and web browser
                                </div>
                                <div style={{fontSize: 12}} className="mb-1">I built a full-stack trivia application, compatible with iOS, Android, and web browser for friends and family to play while in quarantine!
                                Current trivia questions include multiple-choice Geography and Computer questions!
                                </div>
                                <div style={{fontSize: 12}} className="mb-2"><b>Tech Stack: </b> 
                                <div className="d-flex justify-content-center">
                                    <table className={styles['table']}>
                                    <tbody>
                                        <tr>
                                            <td  className={styles['rows']}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
                                            <td  className={styles['rows']}><img src="https://firebase.google.com/images/brand-guidelines/logo-built_white.png" alt="Firebase" title="Firebase" width="60px"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center">
                                <img src="https://thumbs.gfycat.com/WhoppingLightIrishterrier-size_restricted.gif" height="250" alt="..."></img>&nbsp;&nbsp;
                                <img src="https://thumbs.gfycat.com/WhoppingLightIrishterrier-size_restricted.gif" height="250" alt="..."></img>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Trivia;


/* <b>Mobile trivia app:</b> Multiple-choice trivia application that is compatible with iOS, Android, and web browser	 */
                              
//  <b>ArrToZone website: </b>Recreation of AutoZone's website with a pirate theme