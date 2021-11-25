import './InfoSection.css';
import image from "../images/download.jpg";

function InfoSection(){
    return(
        <div className="wrapper">
            <div className="background-div background-div__blur" style={{backgroundImage: `url(${image})`}}>

            </div>
                <div className="content-container">
                    <div className="content__image-container">
                        <div className="image-container__image" style={{backgroundImage: `url(${image})`}}></div>
                    </div>
                    <div className="content__info-container">
                        <p>
                            This is where information about the art/the music goes.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default InfoSection;