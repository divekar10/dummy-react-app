import React, { CSSProperties } from 'react'

const Card = () => {

    const style : CSSProperties ={
        borderStyle:'solid',
        height:'50px',
        width:'50px'
    }

  return (
    <div>
        <div style={style}>Card 1</div>

    </div>
  )
}

export default Card