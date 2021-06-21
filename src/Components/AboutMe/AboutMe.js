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
                    <p>My name is Danielle Kuhn and I am a lifelong learner that loves coding, exploring new software, 
                        and building cool products. I recently founded a company and am in the process of designing and 
                        developing the product - I hope to share more information on my site soon! </p>
                    
                    <p>Prior to founding my current company, I worked as a software engineer at Supply Drop, a startup 
                        offering a smart subscription service for home essentials, with an amazing team. I worked across 
                        the stack in React (JavaScript) and Kotlin in addition to using numerous AWS services (e.g. DynamoDB, 
                        Lex for Natural Language Processing).</p>

                    <p>In addition to my experience as a software engineer, I co-founded and was COO of a global payment 
                        company, PingPong Financial. I experienced scaling the company from zero to billions in Total Payment 
                        Volume. I spent the majority of my time leading operations, product launches, and international 
                        expansion, including opening offices in the US and Luxembourg. Prior to that, I worked as an Actuary 
                        at Deloitte Consulting for 7 years and obtained my Associate of the Society of Actuaries credentials.</p> 
                    
                    <p>Outside of my career, I love doing anything active such as fitness classes, skiing, intramural sports 
                        and am in the process of obtaining my diving certification (so that I can explore parts of 71% percent 
                        of the earth!) I also love reading the Wall Street Journal every morning and discussing what’s going 
                        on around the world. Last but not least, I enjoy spending time with our cats, Winston Furchill 
                        and Franklin Pursevelt, that my partner Nate and I adopted during the pandemic.</p>

                    <p>Thanks for checking out my site! Feel free to reach out if you have software questions or want to 
                        explore new technologies together!</p>               
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

