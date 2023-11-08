import React, { useEffect, useState } from 'react';
import './cardStyle.css';

function Card() {
    const [letter, setLetter] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            setLetter(event.key);
        };
    
        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    return (
        <div className="card">
            <div className="letter-display">{ letter }</div>
        </div>
    );
}

export default Card;