import React from 'react'
import Header from '../header/header'
import { Link } from 'react-router-dom'
import game from '../photo/game.png'
import photo from '../photo/word.jpg'

const Word = () => {
  return (
      <div className="container">
<Header />
    <div className="row">
        <div className="col-sm-6">
        <div  className="card" style={{width:"18rem"}}>
  <img src={photo} class="card-img-top" alt="..." />
  <div class="card-body" > 
  
    <Link to={"FIRST"} className="btn btn-primary" style={{display:"block"}}>    
    الكلمه
            </Link>
  </div>
</div>
        </div>
        <div className="col-sm-6">
        <div  className="card" style={{width:"18rem"}}>
  <img src={game} class="card-img-top" alt="..." />
  <div class="card-body" > 
  
    <Link to={"FIRST"} className="btn btn-primary" style={{display:"block"}}>    
    اللعبه
            </Link>
  </div>
</div>
        </div>
    </div>
</div>
  )
}

export default Word
