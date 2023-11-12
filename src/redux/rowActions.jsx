// Action Types
export const SET_LETTERS = "SET_LETTERS";
export const SET_LETTER_FREQUENCY = "SET_LETTER_FREQUENCY";
export const SET_LETTER_INDICES = "SET_LETTER_INDICES";
export const SET_IS_INPUT_COMPLETE = "SET_IS_INPUT_COMPLETE";
export const SET_IS_CORRECT_INPUT = "SET_IS_CORRECT_INPUT";
export const SET_PRESSED_ENTER_COMPLETED = "SET_PRESSED_ENTER_COMPLETED";
export const SET_IS_BINGO = "SET_IS_BINGO";
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_IS_RESET_TRIGGERED = "SET_IS_RESET_TRIGGERED";
export const SET_SECRET_WORD = "SET_SECRET_WORD";

// Action Creators
export const setLetters = (letters) => ({
  type: SET_LETTERS,
  payload: letters,
});

export const setLetterFrequency = (frequency) => ({
  type: SET_LETTER_FREQUENCY,
  payload: frequency,
});

export const setLetterIndices = (indices) => ({
  type: SET_LETTER_INDICES,
  payload: indices,
});

export const setIsInputComplete = (isComplete) => ({
  type: SET_IS_INPUT_COMPLETE,
  payload: isComplete,
});

export const setIsCorrectInput = (isCorrectInput) => ({
  type: SET_IS_CORRECT_INPUT,
  payload: isCorrectInput,
});

export const setPressedEnterCompleted = (setPressedEnterCompleted) => ({
  type: SET_PRESSED_ENTER_COMPLETED,
  payload: setPressedEnterCompleted,
});

export const setIsBingo = (isBingo) => ({
  type: SET_IS_BINGO,
  payload: isBingo,
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const setIsResetTriggered = (isResetTriggered) => ({
  type: SET_IS_RESET_TRIGGERED,
  payload: isResetTriggered,
});

export const setSecretWord = (secretWord) => ({
  type: SET_SECRET_WORD,
  payload: secretWord,
});
