import "./Featurette.css"
import MyButton from "../MyButton/MyButton"

const Featurette = ({id, db}) => {

    const featurette = db.filter((item) => item.id === id);
    
    if (featurette.length != 0) {
        console.log("care " + featurette)

        return (
            <div className="featurette-container">

                {featurette.map((feature, index) => (

                    <div key={index} className="featurette">

                        <img className="featurette-banner" src={feature.banner}/>

                        <div className="featurette-text-container">
                            <h1 className="featurette-title">{feature.title}</h1>
                            <h2 className="featurette-subtitle">{feature.subtitle}</h2>
                            {feature.description.map((paragraph, i) => (
                                <p key={i} className="featurette-paragraph">{paragraph}</p>
                            ))}
                            <MyButton text={feature.buttonText} color={"gold"}/>
                        </div>

                    </div>
                ))}

            </div>
        );

    }
}

export default Featurette