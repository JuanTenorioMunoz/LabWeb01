import "./Featurette.css"
import MyButton from "../MyButton/MyButton"

const Featurette = ({title, subtitle, description, id, banner, buttonText}) => {
    return(
        <div className="featurette-container">

            <img className="featurette-banner" src={banner}></img>

            <div className="featurette-text-container">
                <h1 className="featurette-title">{title}</h1>
                <h2 className="featurette-subtitle">{subtitle}</h2>
                {description.map((paragraph)=>{
                    return(
                        <p className="featurette-paragraph">{paragraph}</p>
                    )
                })}

                <MyButton text={buttonText}></MyButton>
            </div>
        </div>
    )
}

export default Featurette