const VideoContainer = ({section, title, video}) => {

    return(
        <div className="video-container">
            <h1 className="video-section">{section}</h1>
            <h2 className="video-title">{title}</h2>
            <iframe className="contained-video" title="YouTube video player" frameborder="0" allowfullscreen src={video}>
                
            </iframe>
        </div>
    )

}

export default VideoContainer;