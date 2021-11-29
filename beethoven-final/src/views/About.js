import React from 'react';
import './css/about.css';
import {Link} from "react-router-dom";
const About = () => {
    const pdf_file = <svg className="resource-container__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
    const github = <svg className="github-container__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
    return (
    
    <div className= "container">
        <div className= "container-image"></div>
                    
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
               
                <div className="github-container">
                <div className="tooltip">
                    <a href="https://github.com/VladCaterov/beethoven-final-project"  rel="noreferrer" target="_blank">
                        {/* <div className="tooltip"> */}
                            {github}        
                            <span className="tooltiptext">Vist Our Github</span>
                    </a> 
                    </div>
                </div>
            </div>
            
            <div className="no-header-container">
                <div className= "description-container">
                    <h2 className="description-container__h2">Description</h2>
                     <div className="main-heading-border"></div>
                    <h3 className="description-container__h3">Why did we decide to make this website?</h3>
                    
                    <p className="description-container__p">
                        Coming from a heavy Computer Science background we thought to combine our passion for
                        coding and the knowledge that we have gained from this course to create a truly unique
                        and interesting project we were both proud of. We thought that making a website would
                        be the best outlet to communicate our ideas and we have learned a lot throughout the 
                        process.
                    </p>
                    
                    <h3 className="description-container__h3">Why did we pick this research?</h3>
                    <p className="description-container__p">
                        We decided to research the topic of imagery associated with Beethoven's work because we were taught in class that Beethoven was one of the first composers to use emotion in his music. This lead us to look into topics regarding the emotional reception of Beethoven's work, which yielded interesting research papers.
                    </p>
                    
                    <div className="description-row-container">
                        <h3 className="description-row-container__h3">What did we learn from this?</h3>
                        <p className="description-row-container__p">
                            From this research and media project, we learned a lot about the relationship between audio, and the emotions which work hand-in-hand with the visuals to that audio.
                        </p>
                    </div>
                    
                    <div className="description-row-container">
                        <h3 className="description-row-container__h3">Why did we use Wombo?</h3>
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
                                {pdf_file}
                                <span className="tooltiptext">Emotional Reception of Ludwig van Beethoven's Music - The Authors Own Research</span>
                            </div>
                        </a>
    
                    </div>
                    <div className="resource-container">
                        
                        <a href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1005&context=unpresssamples" rel="noreferrer" target="_blank">
                            <div className="tooltip">
                                {pdf_file}
                                
                                <span className="tooltiptext">The Critical Reception of Beethoven's Compositions by His German Contemporaries, Volume 2</span>
                            </div>
                        </a>
                        

                    </div>
                    <div className = "resource-container">
                        <a href="https://dspace.uni.lodz.pl/bitstream/handle/11089/9681/rela-2013-0001.pdf?sequence=1&isAllowed=y" rel="noreferrer" target="_blank"> 
                            <div className="tooltip">
                                {pdf_file}
                                <span className="tooltiptext">REMEMBER GERHARD RICHTER IN THE THUNDERSTORM OF BEETHOVEN: THE INFLUENCE OF CROSS-SENSORY COUPLING ON MEMORY, INTERCULTURAL COMMUNICATION, AND THE VERBALIZATION OF PAINTINGS AND SOUNDS</span>
                            </div>
                        </a>
                        
                    </div>
                </div>
                {/* <div className="slideshow-container">
                    <iframe className="beethoven-9th" width="1015" height="761" src="https://www.youtube.com/embed/t3217H8JppI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
                </div> */}
            </div>
        </div>
    </div>
    
    );
}

export default About;