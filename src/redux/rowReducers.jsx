// reducers.jsx
import {
  SET_LETTERS,
  SET_LETTER_FREQUENCY,
  SET_LETTER_INDICES,
  SET_IS_INPUT_COMPLETE,
  SET_IS_CORRECT_INPUT,
  SET_PRESSED_ENTER_COMPLETED,
  SET_IS_BINGO,
  SET_MESSAGE,
  SET_IS_RESET_TRIGGERED,
} from "./actions";

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

const initialState = (wordLength, secretWord) => ({
  letters: Array.from({ length: wordLength }, () => ""),
  letterFrequency: calculateLetterFrequency(secretWord),
  letterIndices: calculateLetterIndices(secretWord),
  isInputComplete: false,
  isCorrectInput: [],
  pressedEnterCompleted: false,
  isBingo: false,
  message: "",
  isResetTriggered: false,
});

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LETTERS:
      return { ...state, letters: action.payload };

    case SET_LETTER_FREQUENCY:
      return { ...state, letterFrequency: action.payload };

    case SET_LETTER_INDICES:
      return { ...state, letterIndices: action.payload };

    case SET_IS_INPUT_COMPLETE:
      return { ...state, isInputComplete: action.payload };

    case SET_IS_CORRECT_INPUT:
      return { ...state, isCorrectInput: action.payload };

    case SET_PRESSED_ENTER_COMPLETED:
      return { ...state, pressedEnterCompleted: action.payload };

    case SET_IS_BINGO:
      return { ...state, isBingo: action.payload };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case SET_IS_RESET_TRIGGERED:
      return { ...state, isResetTriggered: action.payload };

    default:
      return state;
  }
};

export default gameReducer;
