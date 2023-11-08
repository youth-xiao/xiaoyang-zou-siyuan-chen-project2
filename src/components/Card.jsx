import React from 'react';
import { useCardData } from './CardDataContext';
import './cardStyle.css';


function Card() {
  const { letter, setLetter } = useCardData();

  return (
    <div className='card'>
      <div className='letter-display'>{letter}</div>
    </div>
  );
}

export default Card;
