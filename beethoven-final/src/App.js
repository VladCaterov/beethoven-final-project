import "./App.css";
import InfoSection from "./components/InfoSection";
import Carousel from "nuka-carousel";
import image1 from "./images/moonlight.png";
import image2 from "./images/personal-memories.png";
import image3 from "./images/relaxation.png";
import image4 from "./images/stress.png";
import image5 from "./images/therapy.png";
import image6 from "./images/fear-dread-pain.png";
import image7 from "./images/horror.png";

function App() {
  return (
    <div className="landing-page">
      <Carousel>
        <InfoSection
          source={image1}
          description="Participants from a group were told to look at two paintings by the artist Sighard Gille - one symbolizing life, the other symbolizing death. The painting above - depicting dark blue elders withering was decided by the group to reflect Beethoven’s Moonlight Sonata. (Martinez, 2013) "
          audio=""
        />
        <InfoSection
          source={image2}
          description="Beethoven's 9th Symphony arouses personal memories, according to the same study by Martinez. For this image, we decided to use Wombo.ai to use AI to generate an image representing the emotion of nostalgia and personal memories."
          audio=""
        />
        <InfoSection
          source={image3}
          description='According to research done by Klaudia Krawczyk, Egmont Overture draws out a "low intensity" feeling of relaxation from the listener (Krawczyk, 2019). The above image was generated by Wombo.ai with the input "relaxation."'
          audio=""
        />
        <InfoSection
          source={image4}
          description={`Krawczyk also notes that some of Beethoven's later works were at a point in his life where he was more stressed - which was often reflected in his works. The image above was generated by Wombo.ai with the input "stress."`}
          audio=""
        />
        <InfoSection source={image5} description="" audio="" />
        <InfoSection source={image6} description="" audio="" />
        <InfoSection source={image7} description="" audio="" />
      </Carousel>
    </div>
  );
}

export default App;
