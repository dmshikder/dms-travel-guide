import Services from "../Services/Services";
import Banner from "./Banner";
import './Home.css';
import TourVideo from "./TourVideo/TourVideo";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <h2 className="tour">Tour Explore</h2>
            <div className="h-video container"><TourVideo></TourVideo></div>
        </div>
    );
};

export default Home;