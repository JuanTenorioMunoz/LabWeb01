import Card from "../Card/card"

const CardsContainer = ({cardsInfo}) => {
    return(

        <div className='cards-container'>
            {cardsInfo.map((card, index)=>{
                return (
                <Card 
                key={index}
                slogan={card.slogan} 
                availability={card.availability} 
                description={card.description}>
                </Card>)
            })}
        </div>

    )
}

export default CardsContainer

