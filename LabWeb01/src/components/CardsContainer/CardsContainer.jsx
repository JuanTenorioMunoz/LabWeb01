import Card from "../Card/card"
import "./CardsContainer.css"

const CardsContainer = ({cardsInfo = []}) => {
    return(

        <div className='cards-container'>
            <h1 className="cards-title">MAIN FEATURES</h1>
            {cardsInfo.map((card, index)=>{
                return (
                <Card 
                key={index}
                slogan={card.slogan} 
                image={card.image}
                description={card.description}>
                </Card>)
            })}
        </div>

    )
}

export default CardsContainer

