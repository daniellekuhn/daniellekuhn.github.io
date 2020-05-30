import React from 'react';
import styles from './Image.module.css';
import mobile from './image.jpg'

const ImageBar = () => {
    return (
        <div id="home" className={styles['background']}>
            <div id="carouselExampleCaptions" className="carousel slide carouselImg" style={{marginTop: "56px"}} data-ride="carousel">
                {/* <div className="wrapper"> */}
                    <div className={styles['imgContainer']}>
                        <img className={styles['image'] + " img-responsive"} src={mobile} alt="..."></img>
                    </div>    
                        <div className={styles['header']}>
                            <div className={styles['headerText']}>
                                <div>Hello!</div>
                                <div>I'm</div>
                                <div>Danielle</div>
                                <div>Kuhn</div>
                            </div>
                        </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ImageBar;
