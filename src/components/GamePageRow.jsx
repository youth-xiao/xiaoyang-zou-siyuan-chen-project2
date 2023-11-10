import { useEffect, useState, useMemo } from "react";
import GamePageCard from "./GamePageCard";
import "../style/gamePageRowStyle.css";
import PropTypes from "prop-types";

function calculateLetterFrequency(word) {
  const letterFrequency = {};

  word.split("").forEach((letter) => {
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

  word.split("").forEach((letter, index) => {
    if (letterIndices[letter]) {
      letterIndices[letter].push(index);
    } else {
      letterIndices[letter] = [index];
    }
  });

  return letterIndices;
}

function GamePageRow({
  wordLength,
  isCurrentRow,
  onLetterInput,
  onBingoStatusChange,
  gameWon,
}) {
  const initialLetters = Array.from({ length: wordLength }, () => "");
  const [letters, setLetters] = useState(initialLetters);
  const secretWord = useMemo(() => "playful", []);
  const [letterFrequency, setLetterFrequency] = useState(
    calculateLetterFrequency(secretWord),
  );
  const [letterIndices, setLetterIndices] = useState(
    calculateLetterIndices(secretWord),
  );
  const [isInputComplete, setIsInputComplete] = useState(false);
  const [isCorrectInput, setIsCorrectInput] = useState(
    Array(wordLength).fill(null),
  );
  const [pressedEnterCompleted, setPressedEnterCompleted] = useState(false);
  const [, setIsBingo] = useState(false); // New state to track all correct
  const [message, setMessage] = useState(""); // New state for the message
  const [isResetTriggered] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isResetTriggered) {
        return;
      }

      const newLetters = [...letters];
      if (!isCurrentRow || pressedEnterCompleted) {
        return;
      }
      if (isCurrentRow && !gameWon) {
        if (/^[a-zA-Z]$/.test(event.key)) {
          setMessage("");
          let isComplete = true;
          for (let i = 0; i < wordLength; i++) {
            if (newLetters[i] === "") {
              newLetters[i] = event.key;
              if (i < wordLength - 1) {
                isComplete = false;
              }
              break;
            }
          }
          setLetters(newLetters);
          if (isComplete) {
            setIsInputComplete(true);
          }
        } else if (event.key === "Enter") {
          if (!isInputComplete) {
            setMessage("Word is too short, add more letter(s)"); // Set the message
          } else {
            setIsInputComplete(true);
            onLetterInput(newLetters);
            setPressedEnterCompleted(true);
            checkInput(letters);
            console.log("isCorrectInput: " + isCorrectInput);
          }
        } else if (
          (event.key === "Delete" || event.key === "Backspace") &&
          !pressedEnterCompleted
        ) {
          const newLetters = [...letters];
          for (let i = wordLength - 1; i >= 0; i--) {
            if (newLetters[i] !== "") {
              newLetters[i] = "";
              setIsCorrectInput(Array(wordLength).fill(null));
              setIsInputComplete(false);
              break;
            }
          }
          setLetters(newLetters);
        }
      }
    };

    const checkInput = (inputLetters) => {
      const newCorrectInput = Array(wordLength).fill(false);
      const newLetterFrequency = { ...letterFrequency };
      const newLetterIndices = { ...letterIndices };
      for (let i = 0; i < wordLength; i++) {
        if (
          newLetterFrequency[inputLetters[i]] &&
          newLetterIndices[inputLetters[i]].includes(i)
        ) {
          newCorrectInput[i] = true;
          const letter = inputLetters[i];
          const indexToRemove = newLetterIndices[letter].indexOf(i);
          if (indexToRemove !== -1) {
            // Remove the matched index from letterIndices
            newLetterIndices[letter].splice(indexToRemove, 1);
            // Decrement the frequency
            newLetterFrequency[letter]--;
          }
        } else if (
          newLetterFrequency[inputLetters[i]] &&
          !newLetterIndices[inputLetters[i]].includes(i)
        ) {
          newCorrectInput[i] = false;
          const letter = inputLetters[i];
          newLetterFrequency[letter]--;
        } else {
          newCorrectInput[i] = null;
        }
      }
      const areAllCorrect = newCorrectInput.every((value) => value === true);
      console.log("check areAllCorrect: " + areAllCorrect);
      setIsBingo(areAllCorrect);
      setIsCorrectInput(newCorrectInput);
      onBingoStatusChange(areAllCorrect);
      setLetterFrequency(newLetterFrequency);
      setLetterIndices(newLetterIndices);
      console.log("check input validation: " + newCorrectInput);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    letters,
    secretWord,
    letterFrequency,
    letterIndices,
    isInputComplete,
    pressedEnterCompleted,
    wordLength,
    isCurrentRow,
    onLetterInput,
    isCorrectInput,
    onBingoStatusChange,
    gameWon,
    isResetTriggered,
  ]);

  useEffect(() => {
    console.log("pressedEnterCompleted: " + pressedEnterCompleted);
  }, [pressedEnterCompleted]);

  return (
    <div className="attempt-row-container">
      <div className={`error-message ${message ? "show" : ""}`}>{message}</div>
      <div className="attempt-row">
        {letters.map((letter, index) => (
          <GamePageCard
            key={index}
            letter={letter}
            isImmutable={pressedEnterCompleted}
            cardColorClass={
              isCorrectInput[index] === true
                ? "card-correct"
                : isCorrectInput[index] === false
                ? "card-half-correct"
                : "card-wrong"
            }
          />
        ))}
      </div>
    </div>
  );
}

GamePageRow.propTypes = {
  wordLength: PropTypes.number.isRequired,
  isCurrentRow: PropTypes.bool.isRequired,
  onLetterInput: PropTypes.func.isRequired,
  onBingoStatusChange: PropTypes.func.isRequired,
  gameWon: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired, // Add handleReset prop type
};

export default GamePageRow;
