import React from 'react';
// import Image from 'react-image-webp';
import styles from './Image.module.css';
import web from './image.jpg';
import output from './output.webp';
import output_main from './output_main.webp'
import mobile from './Image_mobile.jpg'
import Image from 'react-image-webp';

const ImageBar = () => {
    return (
        <div>
            <div className={styles['imgContainer']}>
                <Image
                    id="home" 
                    src={web}
                    webp={output_main}
                    className={styles['imageWeb'] + " img-responsive"}
                />
                <Image
                    src={mobile}
                    webp={output}
                    className={styles['imageMobile'] + " img-responsive"} 
                />    
            </div>    
                <div className={styles['header']}>
                    <div className="container">
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
