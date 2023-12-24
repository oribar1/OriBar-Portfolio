/*import React, { useState } from 'react';
import './ProjectCard.css'; 

const FlippingCard = ({ id, img, url, title, back }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <a
      key={id}
      href={url}
      target='_blank'
      rel='noreferrer'
      className={`project ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className='card-content front'>
          <img src={img} alt={title} className='img' />
          <h5>{title}</h5>
        </div>
        <div className='card-content back'> 
          <p>{back}</p>
        </div>
      </div>
    </a>
  );
};

export default FlippingCard;*/
