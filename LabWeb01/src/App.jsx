import Card from './components/Card/card'
import gameInfo from './db/db'
import './App.css'


function App() {

  return (
    <>
    <div className='cards-container'>
      {gameInfo.map((card)=>{
        return (<Card slogan={gameInfo.slogan} availability={gameInfo.availability} description={gameInfo.description} image={gameInfo.image}></Card>)
      })}
    </div>
    </>
  )
}

export default App
