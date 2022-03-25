import React, { useState } from 'react';

const Tour = (props) => {

  const { id, name, info, image, price, deleteTour } = props
  const [readmore, setReadMore]= useState(false)

  const handleReadMore = ()=> {
    setReadMore(!readmore)
  }

  return (
    
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <p className='tour-price'>{price}</p>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={handleReadMore}>
            {!readmore ? 'Read more': 'Show less'}
          </button>
        </p>
        <button onClick={()=>deleteTour(id)} className='delete-btn'>
          Not interested
        </button>
      </footer>
    </article>
  )
};

export default Tour;
