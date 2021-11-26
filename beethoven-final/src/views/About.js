import React from 'react';
import './css/about.css';

const About = () => {
    return (
    
    <div className= "container">
        <div className= "container-image"></div>
        <div className= "about-container">
            <div className="header-container">
                <h1 className="header-container__h1">About Our Project</h1> 
                <p className="header-container__p">
                    Made with love by Ekagra Luthra and Vladimir Caterov ♥
                </p>
            </div> 
            <div className= "description-container">
                <h2 className="description-container__h2">Description</h2>
                <p className="description-container__p">Hello World</p>
            </div>
            <div className="resources-container">
                <div className = "resource-container">
                    <a href="https://www.researchgate.net/publication/342523101_Emotional_Reception_of_Ludwig_van_Beethoven%27s_Music_-_The_Authors_Own_Research" rel="noreferrer" target="_blank"> 
                        <img src="/images/pdf_logo.png"
                        alt="Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research"
                        title="Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research"
                        className="resource-container__img"
                        />
                    </a>
                    <p className="resource-container__p">Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research</p>
                </div>
                <div className = "resource-container">
                    <a href="https://link.springer.com/content/pdf/10.1007/s10548-012-0227-0.pdf" rel="noreferrer" target="_blank"> 
                        <img src="/images/pdf_logo.png"
                        alt="Emotions, Arousal, and Frontal Alpha Rhythm Asymmetry During Beethoven’s 5th Symphony"
                        title="Emotions, Arousal, and Frontal Alpha Rhythm Asymmetry During Beethoven’s 5th Symphony"
                        className="resource-container__img"
                        />
                    </a>

                    <p className="resource-container__p">Emotions, Arousal, and Frontal Alpha Rhythm Asymmetry During Beethoven’s 5th Symphony</p>

                </div>
                <div className = "resource-container">
                    <a href="https://dspace.uni.lodz.pl/bitstream/handle/11089/9681/rela-2013-0001.pdf?sequence=1&isAllowed=y" rel="noreferrer" target="_blank"> 
                        <img src="/images/pdf_logo.png"
                        alt="REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS"
                        title="REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS"
                        className="resource-container__img"
                        />
                    </a>
                    <p className="resource-container__p">REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS</p>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default About;