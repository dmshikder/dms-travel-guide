import dms from "../../images/dms.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="image">
        <img src={dms} alt="" />
      </div>

      <div className="about-me">
        <p>
          Hi! I am <span className="text-primary">Dost Mohammad Shikder</span> . I have completed my post graduation on
          Information system security. My future goal is to be a full stack
          engineer within next 6 month /1 year and get a job in a prestigious
          company where I can develop and explore my skills from expertise. I
          love to travel and As a tourist guide you can find me a good partner
          for your joyful time. Please contact me if you want to explore
          Beautiful Bangladesh with me.
        </p>
      </div>
    </div>
  );
};

export default About;
<h2>this is about</h2>;
