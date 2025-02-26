import Card from "../Card/card";
import "./CardsContainer.css";

const CardsContainer = ({ cardsInfo }) => {
    return (
        <div className="cards-container">
            {cardsInfo.map(({ id, slogan, image, description }) => (
                <Card 
                    key={id} 
                    slogan={slogan} 
                    image={image} 
                    description={description} 
                />
            ))}
        </div>
    );
};

export default CardsContainer;
