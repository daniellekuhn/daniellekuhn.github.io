import React from 'react'
import styles from './About.module.css'

const Card = () => {
    return(
        <div className={styles['cardSize'] + " card"}>
            <div className={styles['imageBar']}>
                <div className={styles['imageContainer']}>
                    <img className={styles['profileImage']} src="https://i.imgur.com/pF9A0ox.jpg" alt="..."></img>
                </div>
            </div>
            <div className={styles['cardBody']}>
                <div className={styles['nameText']}>
                    <div>Danielle Kuhn</div>
                </div>
                <div className={styles['line']}>
                    ---------
                </div>
                <div className={styles['titleText']}>
                    <div>Front-End Developer, Actuary,</div>
                    <div>and FinTech Cofounder</div>
                </div>
                <div className={styles['line']}>
                    ---------
                </div>
                <div className={styles['logoContainer']}>
                    <a href="https://github.com/daniellekuhn">
                        <img className={styles['logoGithub']} src="https://image.flaticon.com/icons/svg/2111/2111425.svg" alt="Github"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/danielle-kuhn/">
                        <img className={styles['logoLinkedin']} src="https://image.flaticon.com/icons/svg/1384/1384014.svg" alt="Linkedin"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card