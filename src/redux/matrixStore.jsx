import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./matrixReducers";

const matrixStore = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default matrixStore;
