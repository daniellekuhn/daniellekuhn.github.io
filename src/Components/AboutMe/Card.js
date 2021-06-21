import React from 'react'
import styles from './About.module.css'
import Image from 'react-image-webp';
import self from './self.png'
import self_web from './self.webp'

const Card = () => {
    return(
        <div className={styles['cardSize'] + " card d-flex justify-content-center"}>
            <div className={styles['imageBar']}>
                <div className={styles['imageContainer']}>
                    <Image
                        src={self}
                        webp={self_web}
                        alt="danielle-kuhn"
                        className={styles['profileImage'] + " img-responsive"}
                    />
                </div>
            </div>
            <div className={styles['cardBody']}>
                <div className={styles['nameText']}>
                    <div>Danielle Kuhn</div>
                </div>
                <div className={styles['emojis']}>
                    <span role="img" aria-label="activites">👩‍💻🏃‍♀️⛷🌎🐈🐈</span>
                </div>
                <div className={styles['line']}>
                    ---------
                </div>
                <div className={styles['titleText']}>
                    <div>Software Engineer, Cofounder, Actuary</div>
                    <div>University of Wisconsin alum</div>                </div>
                <div className={styles['line']}>
                    ---------
                </div>
                <div className={styles['logoContainer']}>
                    <div className="container">
                    <div className="row">
                    <div className="col-3"></div>
                    <div className="col-2">
                        <a href="https://github.com/daniellekuhn">
                            <img className={styles['logoGithub']} src="https://image.flaticon.com/icons/svg/2111/2111425.svg" alt="Github"></img>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="https://www.linkedin.com/in/danielle-kuhn/" >
                            <img className={styles['logoLinkedin']} src="https://image.flaticon.com/icons/svg/1384/1384014.svg" alt="Linkedin"></img>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="mailto:danielle@daniellekuhn.com">
                            <img className={styles['logoLinkedin']} src="https://image.flaticon.com/icons/svg/1782/1782765.svg" alt="MailTo"></img>
                        </a>
                    </div>
                    </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Card