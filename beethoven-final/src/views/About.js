import React from 'react';
import './css/about.css';
import {Link} from "react-router-dom";
const About = () => {
    const pdf_file = <svg className="resource-container__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>

    return (
    
    <div className= "container">
        <div className= "container-image"></div>
                    <iframe className="beethoven-9th" width="1015" height="761" src="https://www.youtube.com/embed/t3217H8JppI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       

        <div className= "about-container">
            <div className="head-container">
                <div className="redirect-container">
                    <Link to='/'>
                        <button className="redirect-container__button">
                            <img src="/images/back.svg" alt="Go Back Home"/>
                        </button>
                    </Link>
                </div>
                <div className="header-container">
                    <h1 className="header-container__h1">About Our Project</h1> 
                    <p className="header-container__p">
                        Made with love by Ekagra Luthra and Vladimir Caterov ♥
                    </p>
                </div> 
            </div>
            <div className="no-header-container">
                <div className= "description-container">
                    <h2 className="description-container__h2">Description</h2>
                    <div className="main-heading-border"></div>
                    <h3 className="description-container__h3">Why did we decide to do this?</h3>
                    <p className="description-container__p">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum."
                    </p>
                    <h3 className="description-container__h3">Why did we pick this research?</h3>
                    <p className="description-container__p">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum."
                    </p>
                    <div className="description-row-container">
                        <h3 className="description-row-container__h3">What did we learn from this?</h3>
                        <p className="description-row-container__p">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="description-row-container">
                        <h3 className="description-row-container__h3">Why we used Wombo?</h3>
                        <p className="description-row-container__p">
                            <a href="https://www.wombo.art/" rel="noreferrer" target="_blank">Dream by Wombo</a> is an app that was created by a group of University of Toronto students
                            that creates AI-generated photos by providing a prompt and style. This provided a great and
                            convenient opportunity to input the emotions we found on some of our research because some of it did not have any images.
                        </p>
                    </div>
                    
                </div>
                <div className="resources-container">
                    <div className  = "resource-container">
                        <a href="https://www.researchgate.net/publication/342523101_Emotional_Reception_of_Ludwig_van_Beethoven%27s_Music_-_The_Authors_Own_Research" rel="noreferrer" target="_blank"> 
                            <div className="tooltip">
                                
                                {/* <img src="/images/pdf.svg"
                                alt="Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research"
                                // title="Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research"
                                className="resource-container__img"
                                /> */}
                                {/* <svg className="resource-container__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg> */}
                                {pdf_file}
                                <span className="tooltiptext">Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research</span>
                            </div>
                        </a>
                        {/* <p className="resource-container__p">Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research</p> */}
                    </div>
                    <div className="resource-container">
                        {/* <a href="https://link.springer.com/content/pdf/10.1007/s10548-012-0227-0.pdf" rel="noreferrer" target="_blank">  */}
                        <a href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1005&context=unpresssamples" rel="noreferrer" target="_blank">
                            <div className="tooltip">
                                {/* <img src="/images/pdf_logo.png"
                                alt="Emotions, Arousal, and Frontal Alpha Rhythm Asymmetry During Beethoven’s 5th Symphony"
                                // title="Emotions, Arousal, and Frontal Alpha Rhythm Asymmetry During Beethoven’s 5th Symphony"
                                className="resource-container__img"
                                /> */}
                                {pdf_file}
                                {/* <span className="tooltiptext">Emotions, Arousal, and Frontal Alpha Rhythm Asymmetry During Beethoven’s 5th Symphony</span> */}
                                <span className="tooltiptext">The Critical Reception of Beethoven's Compositions by His German Contemporaries, Volume 2</span>
                            </div>
                        </a>
                        {/* </a> */}

                        {/* <p className="resource-container__p">Emotions, Arousal, and Frontal Alpha Rhythm Asymmetry During Beethoven’s 5th Symphony</p> */}

                    </div>
                    <div className = "resource-container">
                        <a href="https://dspace.uni.lodz.pl/bitstream/handle/11089/9681/rela-2013-0001.pdf?sequence=1&isAllowed=y" rel="noreferrer" target="_blank"> 
                            <div className="tooltip">
                                {/* <img src="/images/pdf_logo.png"
                                alt="REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS"
                                // title="REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS"
                                className="resource-container__img"
                                /> */}
                                {pdf_file}
                                <span className="tooltiptext">REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS</span>
                            </div>
                        </a>
                        {/* <p className="resource-container__p">REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS</p> */}
                    </div>
                </div>
        
            </div>
        </div>
    </div>
    
    );
}

export default About;