import React from 'react';
import styles from './Project.module.css'

const Trivia = () => {
    return (
            <div id="TriviaApp" className="pt-1">
                <div className={styles['descriptionTitle']}>Trivia App</div>
                <div className={styles['underline'] + " container pt-3"}>
                        {/* <a href="https://github.com/daniellekuhn/DKTriviaApp">
                            
                        </a> */}
                    
                    <div className="row">
                            <div className="col-lg-7">
                            <div className={styles['projectHeader']}>
                                Multiple-choice trivia application that is compatible with iOS, Android, and web browser
                                </div>
                                <div className={styles['projectOverview'] + " mb-1"}>I built a full-stack trivia application, compatible with iOS, Android, and web browser for friends and family to play while in quarantine!
                                Current trivia questions include multiple-choice Geography and Computer questions!
                                </div>
                                <div>
                                    <a className={styles['viewGithub']} href="https://github.com/daniellekuhn/DKTriviaApp">
                                        View on Github!
                                    </a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <table className={styles['table']}>
                                    <tbody>
                                        <tr>
                                            <td  className={styles['rowsTrivia']}><img className={styles['logoImagesTrivia']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React"/></td>
                                            <td  className={styles['rowsTrivia']}><img className={styles['logoImagesTrivia']} src="https://firebase.google.com/images/brand-guidelines/logo-built_white.png" alt="Firebase" title="Firebase"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center">
                                <img className={styles['demoTrivia']} src="https://thumbs.gfycat.com/WhoppingLightIrishterrier-size_restricted.gif" alt="..."></img>&nbsp;&nbsp;
                                <img className={styles['demoTrivia']} src="https://im3.ezgif.com/tmp/ezgif-3-21a42acf0853.gif" alt="..."></img>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Trivia;


/* <b>Mobile trivia app:</b> Multiple-choice trivia application that is compatible with iOS, Android, and web browser	 */
                              
//  <b>ArrToZone website: </b>Recreation of AutoZone's website with a pirate theme