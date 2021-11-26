import React from 'react';
import './css/about.css';

const About = () => {
    return (
        <div>
            <img src="/images/ludwig_van_beethoven.jpg" alt="Ludwig Van Beethoven" className="about-container__img"/>
            <div className="about-container">

                <h1 className="about-container__h1">About Beethoven Final</h1>
                <p className="about-container__p">
                    Description of about page
                
                </p>
            </div>
        </div>
    );
}

export default About;