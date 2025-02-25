import MyButton from "../MyButton/MyButton"
import "./hero.css"

const Hero = ({image,logo,}) => {
    return(
        <div className="hero">
            <img id="hero-image" src={image}></img>
            <img id="hero-logo" src="https://images.ctfassets.net/u73tyf0fa8v1/78eMnPuCsEMpHS3aZoM54i/48df13a2896e717a8c050d7f8f0180fa/CK3_Logo_Horizontal_White.png?w=3840&q=75"></img>

            <div id="hero-buttons">
                <MyButton text={"BUY NOW"}></MyButton>
                <MyButton text={"WATCH TRAILER"}></MyButton>
            </div>

            <div id="gradient"></div>
        </div>
    )
}

export default Hero