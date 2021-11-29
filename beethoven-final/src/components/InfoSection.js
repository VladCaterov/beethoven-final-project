import './InfoSection.css';

function InfoSection(props){
    return(
        <div className="wrapper">
            <div className="background-div background-div__blur" style={{backgroundImage: `url(${props.source})`}}>

            </div>
                <div className="content-container">
                    <div className="content__audio-container">
                        <audio src="https://upload.wikimedia.org/wikipedia/commons/1/14/Moonlight_Sonata_Movement_4.wav" controls/>
                    </div>
                    <div className="content__image-container">
                        <div className="image-container__image" style={{backgroundImage: `url(${props.source})`}}></div>
                    </div>
                    <div className="content__info-container">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default InfoSection;