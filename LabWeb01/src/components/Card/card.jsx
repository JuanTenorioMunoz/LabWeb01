const Card = ({slogan, availability, description, image}) => {
    <div className="card-info">
        <img className="card-image"></img>
        <p className="availability">{availability}</p>
        <h1 className="slogan">{slogan}</h1>
        <p className="description">{description}</p>
    </div>
}

export default Card;