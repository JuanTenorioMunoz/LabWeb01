import MyButton from "../MyButton/MyButton"

const Hero = ({image,logo,}) => {
    return(
        <div className="Hero">
            <img id="hero-image" src={image}></img>
            <img id="hero-logo" src={logo}></img>

            <div id="hero-buttons">
                <MyButton text={"BUY NOW"}></MyButton>
                <MyButton text={"WATCH TRAILER"}></MyButton>
            </div>
        </div>
    )
}