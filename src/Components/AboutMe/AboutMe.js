import React from 'react';
import styles from './About.module.css';
import Card from './Card'

const AboutMe = () => {
    return (
        <div>
        <div id="AboutMe" className={styles['header']}>
            <div className={styles['footer'] + " container"}>
            <div className={styles['headerTitle']}>About Me</div>
        <div className={styles['background']}>
            <div className="row">
                <div className="col-lg-4 mb-3 d-flex justify-content-center">
                    <Card/>
                </div>
                <div className="col-lg-8">
                    <p>My name is Danielle Kuhn and I am a front-end developer with full-stack experience.</p>
                    <p>I entered the tech industry about five years ago when I founded a <a style={{color: "#404040", textDecoration: "underline"}} href="https://pingpongpayments.com/">Fintech company</a> because I love solving complex problems, especially through the use of technology. Throughout that journey I realized 
                    that I am enamored with engineering challenges and what can be accomplished with code. It became my goal to learn how to build software like we had created for our customers and I've
                    been creating applications ever since! </p>
                    <p>In addition to my tech background, I am also a credential Actuary with six years of actuarial science experience. Throughout my actuarial career, I have always gravitated to the more technical parts of the profession and love developing complex actuarial models.  </p>
                    <p>In order to take my engineering skills to the next level, I recently spent the last four months building software applications with other developers at Hack Reactor. I had the incredible opportunity to advance my JavaScript and React skills along with diving into a variety of other technologies.</p> 
                </div>
            </div>
            </div>
        </div>
    </div>
    <img className={styles['spaceImage']} src="https://i.imgur.com/3syZHXm.jpg" alt="Background"></img>
    </div>
    )
}

export default AboutMe;

