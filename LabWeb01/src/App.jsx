import Card from './components/Card/card'
import Hero from './components/Hero/Hero'
import CardsContainer from './components/CardsContainer/CardsContainer'
import Navbar from './components/MyHeader/Navbar'
import {gameInfo, featuretteInfo} from './db/db'
import VideoContainer from './components/VideoContainer/VideoContainer'
import Featurette from './components/Featurette/Featurette'
import './App.css'


function App() {

  return (
    <>

    <Navbar></Navbar>

    <Hero image={"https://images.ctfassets.net/u73tyf0fa8v1/ILvL75mZNtImSfKerDXnp/d896e2442d635c3265f977d37f09f44a/Web_Header_2540x13002.jpg?w=1920&q=75"}></Hero> 

    <Featurette id={0} db={featuretteInfo}></Featurette>

    <CardsContainer cardsInfo={gameInfo}></CardsContainer>

    <Featurette id={1} db={featuretteInfo}></Featurette>

    <VideoContainer 
      section="Media"
      title="Immerse yourself in Crusader Kings III"
      video="https://www.youtube.com/embed/xjn66Cl3pMA"
    ></VideoContainer>

    <Featurette id={2} db={featuretteInfo}></Featurette>

    </>
  )
}

export default App
