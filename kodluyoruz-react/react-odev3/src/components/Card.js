import React from 'react'

export default function Card(props) {

  

  return (
    <div>
        <div className="card" >
  <img className="card-img-top" src={`https://www.weatherbit.io/static/img/icons/${props.iconcode}.png `} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text maxtemp">{props.maxtemp}&deg;</p>
    <p className="card-text mintemp">{props.mintemp}&deg;</p>
  </div>
</div>
    </div>
  )
}
