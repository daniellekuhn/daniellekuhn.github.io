import React from 'react';

const ImageBar = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carouselImg" data-ride="carousel">
                <div className="carousel-inner">
                        <img src="https://i.imgur.com/DRnDNsE.jpg" className="d-block w-100" alt="..."></img>
                    <div className="carousel-item active">
                        <div className="carousel-caption d-none d-md-block">
                            <h5>About Me</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block">
                            <h5>My Projects</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Experience</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default ImageBar;
