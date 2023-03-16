import React from 'react'


 const Card = (cardinfo) => {
  return (
    <div className='bg-white p-2 mt-2 shadow-md rounded-md'>{cardinfo.title}</div>
  )
}
export default Card;
