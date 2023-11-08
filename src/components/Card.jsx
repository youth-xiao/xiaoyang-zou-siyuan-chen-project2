import React, { useEffect, useState } from 'react';
import './cardStyle.css';

function Card({ letter, onKeyPress }) {
  return (
    <div className="card">
      <div className="letter-display">{letter}</div>
    </div>
  );
}

export default Card;