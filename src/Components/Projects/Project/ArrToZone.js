import React from 'react';
import styles from './Project.module.css'

const ArrToZone = () => {
    return (
            <div>
                <div className={styles['underline2'] + " container"}>
                    <div className={styles['descriptionTitle']}>
                        ArrToZone
                    </div>
                    <div className="row">
                            <div className="col-lg-8">
                                <div style={{fontSize: "16px", fontWeight:"bold"}}>
                                Recreation of AutoZone's website with a pirate theme
                                </div>
                                <div style={{fontSize: 12}} className="mb-1">Recreation of AutoZone's website with a pirate theme using service-ordiented architecture. I built out the navigation and search component, including frontend and backend.  
                                </div>
                                <div style={{fontSize: 12}} className="mb-2"><b>Tech Stack: </b> 
                                <div className="d-flex justify-content-center">
                                <table className={styles['table']}>
                                    <tbody>
                                        <tr>
                                            <td className={styles['rows']}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
                                            <td className={styles['rows']}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js" width="60px"/></td>
                                            <td className={styles['rows']}><img src="https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2018/02/20/AWS-Elastic-Beanstalk-Logo.png" alt="AWS" title="AWS" width="90px"/></td>
                                            <td className={styles['rows']}><img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios" width="60px"/></td>
                                        </tr>
                                        <tr>
                                            <td className={styles['rows']}><img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="Bootstrap" title="Bootstrap" width="60px"/></td>
                                            <td className={styles['rows']}><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="60px"/></td>
                                            <td className={styles['rows']}><img src="https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Docker-Logo-White-RGB_Vertical-BG_0.png?itok=8Tuac9I3" alt="Docker" title="Docker" width="50px"/></td>
                                            <td className={styles['rows']}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/272px-MySQL.svg.png" alt="MySQL" title="MySQL" width="60px"/></td>
                                        </tr>
                                    </tbody>
                                </table>  
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-center">
                                <img src="https://media.giphy.com/media/S9Ka79Bc2nwVEeadn4/giphy.gif" width="250" alt="..."></img>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default ArrToZone;


                             
//  <b>ArrToZone website: </b>Recreation of AutoZone's website with a pirate theme