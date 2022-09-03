import React from 'react'

const Card = ({img,title}) => {
  return (
    <div>
    <div className="row">
         <div className="card col-3 " style={{"width": "18rem" , "height":"330px"}}>
  <img src={img} className="card-img-top" height="180px" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> </h5>
    <p className="card-text">{title}</p>
    
  </div>
</div>
</div>

    </div>
  )
}

export default Card