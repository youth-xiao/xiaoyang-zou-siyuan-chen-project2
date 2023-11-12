// gameRowContextUtils.js
import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const GameRowContext = createContext();

export const useGameRowContext = () => {
  return useContext(GameRowContext);
};

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

export const GameRowProvider = ({ children, wordLength, secretWord }) => {
  const [pressedEnterCompleted, setPressedEnterCompleted] = useState(false);
  const initialLetters = Array.from({ length: wordLength }, () => "");
  const [letters, setLetters] = useState(initialLetters);
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
  const [isBingo, setIsBingo] = useState(false); // New state to track all correct
  const [message, setMessage] = useState("");
  const [isResetTriggered, setIsResetTriggered] = useState(false);

  const contextValue = useMemo(
    () => ({
      pressedEnterCompleted,
      setPressedEnterCompleted,
      letters,
      setLetters,
      letterFrequency,
      setLetterFrequency,
      letterIndices,
      setLetterIndices,
      isInputComplete,
      setIsInputComplete,
      isCorrectInput,
      setIsCorrectInput,
      isBingo,
      setIsBingo,
      message,
      setMessage,
      isResetTriggered,
      setIsResetTriggered,
    }),
    [
      pressedEnterCompleted,
      setPressedEnterCompleted,
      letters,
      setLetters,
      letterFrequency,
      setLetterFrequency,
      letterIndices,
      setLetterIndices,
      isInputComplete,
      setIsInputComplete,
      isCorrectInput,
      setIsCorrectInput,
      isBingo,
      setIsBingo,
      message,
      setMessage,
      isResetTriggered,
    ],
  );

  GameRowProvider.propTypes = {
    children: PropTypes.node.isRequired,
    wordLength: PropTypes.number.isRequired,
    secretWord: PropTypes.string.isRequired,
  };

  return (
    <GameRowContext.Provider value={contextValue}>
      {children}
    </GameRowContext.Provider>
  );
};
