import React, { useState } from 'react'

import "./card.css"
const Card = (props) => {
    const [count , setCount]=useState(0)
    function handleClick(){
        setCount(count+1)
    };
  return (
    <div className='card'>
      <img src={props.image} alt="" />
      <h4>{props.name}</h4>
      <p>{props.price}</p>

      <button onClick={handleClick}>{props.btn} {count}</button>
    </div>
  )
}

export default Card
