import Card from './components/Card/card'
import Hero from './components/Hero/Hero'
import MyHeader from './components/MyHeader/Header'
import gameInfo from './db/db'
import './App.css'


function App() {

  return (
    <>

    <MyHeader></MyHeader>
    <Hero image={"https://images.ctfassets.net/u73tyf0fa8v1/ILvL75mZNtImSfKerDXnp/d896e2442d635c3265f977d37f09f44a/Web_Header_2540x13002.jpg?w=1920&q=75"}></Hero>  

    <div className='cards-container'>
      {gameInfo.map((card, index)=>{
        return (
        <Card 
          key={index}
          slogan={card.slogan} 
          availability={card.availability} 
          description={card.description}>
        </Card>)
      })}
    </div>

    <div className='cards-container'>
      {gameInfo.map((card, index)=>{
        return (
        <Card 
          key={index}
          slogan={card.slogan} 
          availability={card.availability} 
          description={card.description}>
        </Card>)
      })}
    </div>

    </>
  )
}

export default App
