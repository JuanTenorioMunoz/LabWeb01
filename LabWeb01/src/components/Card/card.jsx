import './card.css'

const Card = ({slogan, description, image}) => {

    const descriptionArray = description

    return (
    <div className="card-info">
        <img className="card-image" src={image}></img>
        <h1 className="slogan">{slogan}</h1>
        {descriptionArray.map((paragraph,index)=> {
            return(
                <p key={index} className='description'>{paragraph}</p>
            )
        })}
    </div>
    )
    
}

export default Card;