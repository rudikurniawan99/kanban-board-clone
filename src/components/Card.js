import React from 'react'

const Card = ({card}) => {
  return (
    <div>
      {card.map(item =>(
        <p key={item.id} >{item.title}</p>
      ))}
    </div>
  )
}

export default Card
