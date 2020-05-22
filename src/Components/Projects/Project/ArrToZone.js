import React from 'react';
import styles from './Project.module.css'

const ArrToZone = () => {
    return (
            <div id="ArrToZone" className="pt-1">
                <div className={styles['underline'] + " container pt-3"}>
                    <div className="text-center">
                        <a href="https://github.com/daniellekuhn/AutoZone-replica-SOA" className={styles['descriptionTitle']}>
                            ArrToZone
                        </a>
                    </div>
                    <div className="row">
                            <div className="col-lg-7">
                            <div className={styles['projectHeader']}>
                                Recreation of AutoZone's website with a pirate theme
                                </div>
                                <div className={styles['projectOverview'] + " mb-1"}>Recreation of AutoZone's website with a pirate theme using service-ordiented architecture. I built out the navigation and search component, including frontend and backend.  
                                </div>
                                <div className="d-flex justify-content-center">
                                <table className={styles['table']}>
                                    <tbody>
                                        <tr>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React"/></td>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js"/></td>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2018/02/20/AWS-Elastic-Beanstalk-Logo.png" alt="AWS" title="AWS"/></td>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios"/></td>
                                        </tr>
                                        <tr>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="Bootstrap" title="Bootstrap"/></td>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express"/></td>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Docker-Logo-White-RGB_Vertical-BG_0.png?itok=8Tuac9I3" alt="Docker" title="Docker"/></td>
                                            <td className={styles['rowsArrToZone']}><img className={styles['logoImagesArrToZone']} src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/272px-MySQL.svg.png" alt="MySQL" title="MySQL"/></td>
                                        </tr>
                                    </tbody>
                                </table>  
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex justify-content-center">
                                <img className={styles['demoArrToZone']} src="https://media.giphy.com/media/S9Ka79Bc2nwVEeadn4/giphy.gif" alt="..."></img>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default ArrToZone;


                             
