import { useEffect, useState } from 'react';
import Card from './Card';
import './attemptRowStyle.css';

const createDictionaries = (word) => {
  const letterFrequency = {};
  const letterIndices = {};

  word.split('').forEach((letter, index) => {
    if (letterFrequency[letter]) {
      letterFrequency[letter]++;
      letterIndices[letter].push(index);
    } else {
      letterFrequency[letter] = 1;
      letterIndices[letter] = [index];
    }
  });

  return { letterFrequency, letterIndices };
};

function AttemptRow() {
    const [letters, setLetters] = useState(['', '', '', '', '']);
    const [secretWord, setSecretWord] = useState("happy");
    const { letterFrequency, letterIndices } = createDictionaries(secretWord);
    const [isInputComplete, setInputComplete] = useState(false);
    const [isCorrectInput, setCorrectInput] = useState(Array(5).fill(false));

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
                checkInput(letters);
            } else if (event.key === 'Delete' || event.key === 'Backspace') {
                const newLetters = [...letters];
                for (let i = 4; i >= 0; i--) {
                    if (newLetters[i] !== '') {
                        newLetters[i] = '';
                        setCorrectInput(Array(5).fill(false));
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
                }
            }
            setCorrectInput(newCorrectInput);
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
                <Card
                    key={ index }
                    letter={ letter }
                    isImmutable={ isInputComplete }
                    isCorrect={ isCorrectInput[index] }
                    cardColorClass={isCorrectInput[index] ? 'card-correct' : ''}
                />
            )) }
        </div>
    );
}

export default AttemptRow;