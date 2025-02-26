import "./Featurette.css"
import MyButton from "../MyButton/MyButton"

const Featurette = ({id, db}) => {

    const featurette = db.filter((item) => item.id === id);

    featurette.map((featurette)=>{
        return(
        <div className="featurette-container">

            <img className="featurette-banner" src={featurette.banner}></img>

            <div className="featurette-text-container">
                <h1 className="featurette-title">{featurette.title}</h1>
                <h2 className="featurette-subtitle">{featurette.subtitle}</h2>
                {featurette.description.map((paragraph)=>{
                    return(
                        <p className="featurette-paragraph">{paragraph}</p>
                    )
                })}

                <MyButton text={featurette.buttonText}></MyButton>
            </div>
        </div>
        )
    })

    
}

export default Featurette