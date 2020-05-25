import React from 'react';
import styles from './Image.module.css'

const ImageBar = () => {
    // const imageUrl = window.innerWidth >= 650 ? "https://i.imgur.com/49pd7Or.jpg" : "https://i.imgur.com/rMtnFzb.jpg";

    return (
        <div id="home" className={styles['background']}>
            <div id="carouselExampleCaptions" className="carousel slide carouselImg" style={{marginTop: "56px"}} data-ride="carousel">
                <div className="carousel-inner">
                    <div className="wrapper">
                        <img className={styles['image'] + " img-responsive"} src="https://i.imgur.com/mb5VMpf.jpg" alt="..."></img>
                    </div>    
                        <div className={styles['header']}>
                            <div className={styles['headerText']}>
                                <div>Hello! I'm</div>
                                <div>Danielle Kuhn</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ImageBar;
