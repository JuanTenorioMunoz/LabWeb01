import Card from './components/Card/card'
import MyHeader from './components/MyHeader/Header'
import gameInfo from './db/db'
import './App.css'


function App() {

  return (
    <>

    <MyHeader></MyHeader>

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
