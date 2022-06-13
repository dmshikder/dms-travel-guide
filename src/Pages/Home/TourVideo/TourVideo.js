import './TourVideo.css';
const TourVideo = () => {
    return (
        <div>
            <iframe className="video"   src="https://www.youtube.com/embed/rDYdeq3JW_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default TourVideo;