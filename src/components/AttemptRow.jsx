import React, { useEffect, useState } from 'react';
import Card from './Card';
import './attemptRowStyle.css';
import { useAttemptRowData } from './AttemptRowDataContext';


function AttemptRow() {

    const { attemptRowData, setAttemptRowData } = useAttemptRowData();
    const [currentRow, setCurrentRow] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (/^[a-zA-Z]$/.test(event.key) && currentRow < 6 && currentIndex < 5) {
                attempts[currentRow][currentIndex] = event.key;
                if (currentIndex < 4) {
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setCurrentRow(currentRow + 1);
                    setCurrentIndex(0);
                }
            } else if (event.key === 'Delete' || event.key === 'Backspace') {
                if (currentIndex > 0) {
                    attempts[currentRow][currentIndex - 1] = '';
                    setCurrentIndex(currentIndex - 1);
                } else if (currentIndex === 0) {
                    attempts[currentRow][currentIndex] = '';
                } else if (currentRow > 0) {
                    setCurrentRow(currentRow - 1);
                    setCurrentIndex(4);
                }
            }
            setAttempts([...attempts]);
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [attemptRowData, currentRow, currentIndex, setAttemptRowData]);

    return (
        <div className='attempt-row'>
            { attemptRowData[currentRow].map((letter, index) => (
                <Card key={ index } letter={ letter } />
            )) }
        </div>
    );
}

export default AttemptRow;