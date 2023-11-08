import React, { useEffect, useState } from 'react';
import Card from './Card';
import './attemptRowStyle.css';

function AttemptRow() {
    const [letters, setLetters] = useState(['', '', '', '', '']);
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (/^[a-zA-Z]$/.test(event.key)) {
                const newLetters = [...letters];
                for (let i = 0; i < 5; i++) {
                    if (newLetters[i] === '') {
                        newLetters[i] = event.key;
                        break;
                    }
                }
                setLetters(newLetters);
            } else if (event.key === 'Delete' || event.key === 'Backspace') {
                const newLetters = [...letters];
                for (let i = 4; i >= 0; i--) {
                    if (newLetters[i] !== '') {
                        newLetters[i] = '';
                        break;
                    }
                }
                setLetters(newLetters);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [letters]);

    return (
        <div className='attempt-row'>
            { letters.map((letter, index) => (
                <Card key={ index } letter={ letter } />
            )) }
        </div>
    );
}

export default AttemptRow;