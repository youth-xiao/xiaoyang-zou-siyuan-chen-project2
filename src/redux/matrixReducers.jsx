const initialState = {
  currentRow: 0,
  gameWon: false,
  winMessage: "",
  isResetButtonClicked: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_ROW":
      return { ...state, currentRow: action.payload };
    case "SET_GAME_WON":
      return { ...state, gameWon: action.payload };
    case "SET_WIN_MESSAGE":
      return { ...state, winMessage: action.payload };
    case "SET_IS_RESET_BUTTON_CLICKED":
      return { ...state, isResetButtonClicked: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
