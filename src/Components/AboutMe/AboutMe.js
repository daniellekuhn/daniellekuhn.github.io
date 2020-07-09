import React from 'react';
import styles from './About.module.css';
import Card from './Card';
import computer from './computer.jpg'
import Image from 'react-image-webp';
import computer_web from './computer.webp'

const AboutMe = () => {
    return (
        <div>
        <div className={styles['header']}>
            <div id="AboutMe" className={styles['footer'] + " container"}>
            <h1 className={styles['headerTitle']}>About Me</h1>
        <div className={styles['background']}>
            <div className="row">
                <div className="col-lg-4 mb-3 d-flex justify-content-center">
                    <Card/>
                </div>
                <div className="col-lg-8">
                    <p>My name is Danielle Kuhn and I am a software engineer with both frontend and backend experience. 
                    I entered the tech industry about five years ago when I founded a global payments company because I love solving complex problems, especially through the use of technology. Throughout that journey I realized 
                    that I am enamored with engineering challenges and what can be accomplished with code. It became my goal to learn how to build software like we had created for our customers and I've
                    been creating applications ever since! </p>
                    <p>In addition to my tech background, I am also a credentialed Actuary with six years of actuarial science experience. Throughout my actuarial career, I have always gravitated to the more technical parts of the profession and love developing complex actuarial models.  </p>
                    <p>In order to take my engineering skills to the next level, I recently spent the last four months building software applications with other developers at Hack Reactor. I had the incredible opportunity to advance my JavaScript and React skills along with diving into a variety of other technologies.</p> 
                    <p>Outside of developing apps in my spare time, I love to do anything active outdoors such as running, skiing, or wakesurfing and recently I’ve picked up bird watching! 
                    We also recently adopted two kittens 
                    that are eight weeks old - Winston Furchill and Franklin Pursevelt <span role="img" aria-label="cat">🐈🐈</span>!  
                     Similar to most, I love to visit and learn about other parts of the world. I had the incredible opportunity to work in China, Japan and Luxembourg.</p>
                    <p>Thank you for checking out my website. I hope you enjoy it!</p>               
                </div>
            </div>
            </div>
        </div>
    </div>
            <Image
                src={computer}
                webp={computer_web}
                alt="computer"
                className={styles['spaceImage']}
            />
    </div>
    )
}

export default AboutMe;

