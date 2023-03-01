import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from '../../json/Name';
import photo from "../photo/one.jpg";
import './card.css';

const Dropdow = () => {
  return (
  <>{
    Name.map((item)=>{
      return(
        <div key={item.id} className="card" style={{width:"18rem"}}>
  <img src={photo} class="card-img-top" alt="..." />
  <div class="card-body" > 
  
    <Link to={item.link} className="btn btn-primary" style={{display:"block"}}>
   {item.nama}     
            </Link>
  </div>
</div>
      )
    })

  

}
    </>
  )
}

export default Dropdow
