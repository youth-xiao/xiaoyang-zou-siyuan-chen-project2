import { useEffect, useState } from 'react';
import GamePageCard from './GamePageCard';
import '../style/gamePageRowStyle.css';

function calculateLetterFrequency(word) {
  const letterFrequency = {};

  word.split('').forEach((letter) => {
    if (letterFrequency[letter]) {
      letterFrequency[letter]++;
    } else {
      letterFrequency[letter] = 1;
    }
  });

  return letterFrequency;
}

function calculateLetterIndices(word) {
  const letterIndices = {};

  word.split('').forEach((letter, index) => {
    if (letterIndices[letter]) {
      letterIndices[letter].push(index);
    } else {
      letterIndices[letter] = [index];
    }
  });

  return letterIndices;
}

function GamePageRow() {
    const [letters, setLetters] = useState(['', '', '', '', '']);
    const [secretWord, setSecretWord] = useState("happy");
    const [letterFrequency, setLetterFrequency] = useState(calculateLetterFrequency(secretWord));
    const [letterIndices, setLetterIndices] = useState(calculateLetterIndices(secretWord));
    const [isInputComplete, setInputComplete] = useState(false);
    const [isCorrectInput, setCorrectInput] = useState(Array(5).fill(null));
    const [pressedEnterCompleted, setPressedEnterCompleted] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (/^[a-zA-Z]$/.test(event.key)) {
                const newLetters = [...letters];
                let isComplete = true;
                for (let i = 0; i < 5; i++) {
                    if (newLetters[i] === '') {
                        newLetters[i] = event.key;
                        if (i < 4) {
                            isComplete = false;
                        }
                        break;
                    }
                }
                setLetters(newLetters);
                if (isComplete) {
                    setInputComplete(true);
                }
            } else if (event.key === 'Enter' && isInputComplete) {
                setInputComplete(true);
                setPressedEnterCompleted(true);
                checkInput(letters);
            } else if (event.key === 'Delete' || event.key === 'Backspace') {
                const newLetters = [...letters];
                for (let i = 4; i >= 0; i--) {
                    if (newLetters[i] !== '') {
                        newLetters[i] = '';
                        setCorrectInput(Array(5).fill(null));
                        setInputComplete(false);
                        break;
                    }
                }
                setLetters(newLetters);
            }
        };

        const checkInput = (inputLetters) => {
            const newCorrectInput = Array(5).fill(false);
            const newLetterFrequency = { ...letterFrequency };
            const newLetterIndices = { ...letterIndices };
            for (let i = 0; i < 5; i++) {
                if (newLetterFrequency[inputLetters[i]] && newLetterIndices[inputLetters[i]].includes(i)) {
                    newCorrectInput[i] = true;
                    const letter = inputLetters[i];
                    const indexToRemove = newLetterIndices[letter].indexOf(i);
                    if (indexToRemove !== -1) {
                        // Remove the matched index from letterIndices
                        newLetterIndices[letter].splice(indexToRemove, 1);
                        // Decrement the frequency
                        newLetterFrequency[letter]--;
                    }                    
                } else if (newLetterFrequency[inputLetters[i]] && !newLetterIndices[inputLetters[i]].includes(i)) {
                    newCorrectInput[i] = false;
                    const letter = inputLetters[i];
                    newLetterFrequency[letter]--;    
                } else {
                    newCorrectInput[i] = null;
                }
            }
            setCorrectInput(newCorrectInput);
            setLetterFrequency(newLetterFrequency);
            setLetterIndices(newLetterIndices);
            console.log("check input validation: " + newCorrectInput);
        };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [letters, secretWord, letterFrequency, letterIndices, isInputComplete]);

    return (
        <div className='attempt-row'>
            { letters.map((letter, index) => (
                <GamePageCard
                    key={ index }
                    letter={ letter }
                    isImmutable={ pressedEnterCompleted }
                    cardColorClass={
                        isCorrectInput[index] === true
                        ? 'card-correct'
                        : isCorrectInput[index] === false
                        ? 'card-half-correct'
                        : 'card-wrong'
                    }
                />
            )) }
        </div>
    );
}

export default GamePageRow;