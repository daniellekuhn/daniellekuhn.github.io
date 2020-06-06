import React from 'react';
import Image from 'react-image-webp';
import styles from './Image.module.css';
import web from './image.jpg';
import output from './output.webp';
import output_main from './output_main.webp'
import mobile from './Image_mobile.jpg'

const ImageBar = () => {
    return (
        <div id="home">
        <div className={styles['background']}>
            <div className={styles['imgContainer']}>
                <Image
                    src={web}
                    webp={output_main}
                    className={styles['imageWeb'] + " img-responsive"}
                />
                    {/* <img className={styles['imageWeb'] + " img-responsive"} src={web} alt="DanielleKuhn"></img> */}
                <Image
                    src={mobile}
                    webp={output}
                    className={styles['imageMobile'] + " img-responsive"} 
                />    
                    {/* <img className={styles['imageMobile'] + " img-responsive"} src={mobile} alt="DanielleKuhn"></img> */}
            </div>    
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
    )
}

export default ImageBar;
