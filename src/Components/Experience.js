import React from 'react';
// import './App.css';

const Experience = () => {
    return (
        <div>
            <div className="container mt-3">
                <div className="d-flex justify-content-center mt-4">
                <h3 style={{borderBottom: "2px solid #6666ff"}} href="/AboutMe">Experience</h3>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <div className="embed-responsive embed-responsive-1by1">
                        <img src="https://i.imgur.com/SGomD7x.jpg" alt="..." className="embed-responsive-item"></img>
                    </div>
                    <div>
                        <p className="mb-0">Danielle Kuhn</p>
                        <p className="mb-0">danielle.r.kuhn@gmail.com</p>
                        <p className="mb-0">Github | Linkedin </p>
                    </div>
                </div>
                <div className="col-8">
                    <p>My name is Danielle Kuhn and I am a full-stack software engineer. I love building seamless, dynamic applications for users!</p>
                    <p>I entered the tech industry about five years ago when 
                    I founded a <a style={{color: "black"}} href="https://pingpongpayments.com/">Fintech company</a> because I love solving complex problems, especially through the use of technology. Throughout that journey I realized 
                    that I am enamored with engineering challenges and what can be accomplished with code. So I decided to follow my passion in software engineering and 
                    have been creating applications ever since. </p>
                    <p>Check out my <a style={{color: "black"}} href="https://github.com/daniellekuhn">portfolio</a> for some of my recent applications!</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Experience;


