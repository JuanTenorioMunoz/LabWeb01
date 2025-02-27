import "./VideoContainer.css"
import MyButton from "../MyButton/MyButton"

const VideoContainer = ({section, title, video}) => {

    return(
        <div className="video-container">
            <h1 className="video-section">{section.toUpperCase()}</h1>
            <h2 className="video-title">{title}</h2>
            <iframe className="contained-video" title="YouTube video player" frameborder="0" allowfullscreen src={video}>
            </iframe>
            <div className="arrows-container">
                <MyButton color={"arrow"} size={"small"} type={"arrow"} text={""}></MyButton>
                    <p>1/15</p>
                <MyButton color={"arrow"} size={"small"} type={"arrow"} text={""}></MyButton>
            </div>
        </div>
    )

}

export default VideoContainer;