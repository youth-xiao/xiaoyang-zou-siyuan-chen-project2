import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers";
import initialState from "./reducers"; // Import the initialState function

const wordLength = 6;
const calculateWordList = (wordLength) => {
  const normalList = [
    "access",
    "noodle",
    "muscle",
    "summer",
    "wealth",
    "depend",
    "visual",
    "filter",
    "museum",
    "galaxy",
  ];
  const hardList = [
    "biology",
    "surgeon",
    "arrange",
    "perfect",
    "gravity",
    "science",
    "wedding",
    "uniform",
    "healthy",
    "insight",
  ];

  return wordLength === 6 ? normalList : hardList;
};

const wordList = calculateWordList(wordLength);

const getRandomWord = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  console.log("random index: " + randomIndex);
  return list[randomIndex];
};

const secretWord = getRandomWord(wordList);

const store = configureStore({
  reducer: {
    row: gameReducer,
  },
  preloadedState: initialState(wordLength, secretWord),
});

export default store;
