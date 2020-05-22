import React from 'react';
import styles from './Image.module.css'

const ImageBar = () => {
    let imgStyles = ["d-block"]
    imgStyles.push(styles['image'])

    return (
        <div id="home" className={styles['background']}>
            <div id="carouselExampleCaptions" className="carousel slide carouselImg" style={{marginTop: "56px"}} data-ride="carousel">
                <div className="carousel-inner">
                    <img className={imgStyles.join(' ')} src="https://i.imgur.com/q89EAFa.jpg" alt="..."></img>
                        <div className={styles['header']}>
                            <div className={styles['headerText']}>
                                <div>Hello!</div>
                                <div>I'm</div>
                                <div>Danielle</div>
                                <div>Kuhn</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ImageBar;
