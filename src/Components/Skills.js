import React from 'react';

const Skills = () => {
    return (
            <div>
                <div className="container mt-3">
                <div className="row mt-3">
                    <div className="mt-4">
                        <h3 style={{borderBottom: "2px solid #6666ff"}} href="/AboutMe">Software Projects</h3>
                        <p>Check out some of my recent applications:</p>
                    </div>
                    <div className="accordion w-100" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b>Gigl website: </b>An online marketplace that allows clients to book freelancers for their upcoming events
                                </button>
                            </h2>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                            {/* container */}
                            <div class="container">
                                    <div class="row">
                                    <div class="col-7">
                                        <div style={{fontSize: 12}} className="mb-1"><b>Website Link: </b> <a href="https://hratx47-gigl.herokuapp.com">https://hratx47-gigl.herokuapp.com</a></div>
                                        <div style={{fontSize: 12}} className="mb-1"><b>Github Repo: </b> <a href="https://github.com/hratx47-gigl/Gigl-Website">https://github.com/hratx47-gigl/Gigl-Website</a></div>
                                        <div style={{fontSize: 12}} className="mb-1"><b>Overview: </b> Have an event coming up and need talent? Gigl is a platform that connects clients to local freelancers such as photographers, bartenders, artists, and entertainers. Our website allows clients to post upcoming gigs and select a performer that meets their needs. It also allows talented peformers to create a profile, view gigs in their area, and apply for them!</div>
                                        <div style={{fontSize: 12}} className="mb-2"><b>Tech Stack: </b> </div>

                                            <table className="border" style={{fontSize: 10, fontWeight: "bold"}}>
                                                <tr>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Node.js" title="Node.js" width="60px"/></td>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://www3.assets.heroku.com/assets/logo-purple-08fb38cebb99e3aac5202df018eb337c5be74d5214768c90a8198c97420e4201.svg" alt="Heroku" title="Heroku" width="60px"/></td>
                                                </tr>
                                                <tr>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" alt="Axios" title="Axios" width="60px"/></td>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="React Router" title="React Router" width="45px"/></td>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="60px"/></td>
                                                </tr>
                                                <tr>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png" alt="Jest" title="Jest" width="60px"/></td>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="Bootstrap" title="Bootstrap" width="60px"/></td>
                                                    <td  width="100" height="50" className="border" align="center"><img src="https://www.logolynx.com/images/logolynx/f4/f436442c17fa509c78e28aa28c76b923.png" alt="MongoDB" title="MongoDB" width="60px"/></td>
                                                </tr>
                                            </table>
                                    </div>
                                    <div class="col-5 pr-2">
                                        <img src="https://thumbs.gfycat.com/AmazingJovialAoudad-size_restricted.gif" height="350" alt="..."></img>&nbsp;&nbsp;
                                        <img src="https://thumbs.gfycat.com/MixedSeparateGraywolf-size_restricted.gif" height="350" alt="..."></img>
                                    </div>
                                    </div>
                            </div>
                            {/* container */}
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" >
                                <b>Mobile trivia app:</b> Multiple-choice trivia application that is compatible with iOS, Android, and web browser	
                                </button>
                            </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true">
                                <b>ArrToZone website: </b>Recreation of AutoZone's website with a pirate theme
                                </button>
                            </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            </div>
                        </div>
                        </div>
        </div>
    </div>
    </div>
    )
}

export default Skills;


