export const setCurrentRow = (row) => ({
  type: "SET_CURRENT_ROW",
  payload: row,
});

export const setGameWon = (won) => ({
  type: "SET_GAME_WON",
  payload: won,
});

export const setWinMessage = (message) => ({
  type: "SET_WIN_MESSAGE",
  payload: message,
});

export const setIsResetButtonClicked = (clicked) => ({
  type: "SET_IS_RESET_BUTTON_CLICKED",
  payload: clicked,
});
