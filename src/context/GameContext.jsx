import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [winMessage, setWinMessage] = useState("");
//   const [isResetButtonClicked, setIsResetButtonClicked] = useState(false);
  // Other game-related state and functions can be added here

  const contextValue = {
    currentRow,
    setCurrentRow,
    gameWon,
    setGameWon,
    winMessage,
    setWinMessage,
    // Add other values and functions here
  };
    
    GameProvider.propTypes = {
  children: PropTypes.node.isRequired, // Add children prop validation
};

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
