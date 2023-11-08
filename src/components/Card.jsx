import React, { useEffect, useState } from 'react';
import './cardStyle.css';

function Card() {
    const [letter, setLetter] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            setLetter(event.key);
        };

        const handleDelete = (event) => {
            if (event.key === 'Delete' || event.key === 'Backspace') {
                setLetter('');
            }
        };
    
        window.addEventListener('keypress', handleKeyPress);
        window.addEventListener('keydown', handleDelete);


        return () => {
            window.removeEventListener('keypress', handleKeyPress);
            window.removeEventListener('keydown', handleDelete);
        };
    }, []);

    return (
        <div className="card">
            <div className="letter-display">{ letter }</div>
        </div>
    );
}

export default Card;