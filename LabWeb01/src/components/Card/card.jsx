import './card.css'

const Card = ({slogan, description, image}) => {

    const descriptionArray = description

    return (
    <div className="card-info">
        <img className="card-image" src={image}></img>
        <img className="slogan" src={slogan}></img>
        {descriptionArray.map((paragraph,index)=> {
            return(
                <p key={index} className='description'>{paragraph}</p>
            )
        })}
    </div>
    )
    
}

export default Card;