import './card.css'

const Card = ({slogan, availability, image}) => {
    return (
    <div className="card-info">
        <img className="card-image"></img>
        <h1 className="slogan">{slogan}</h1>
        <p className="description">{description}</p>
    </div>
    )
    
}

export default Card;