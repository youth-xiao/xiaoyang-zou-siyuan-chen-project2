import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  INITIAL_ROW,
  INITIAL_GAME_WON_STATE,
  INITIAL_WIN_MESSAGE,
} from "../utils/gameConstants";

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [currentRow, setCurrentRow] = useState(INITIAL_ROW);
  const [gameWon, setGameWon] = useState(INITIAL_GAME_WON_STATE);
  const [winMessage, setWinMessage] = useState(INITIAL_WIN_MESSAGE);

  const contextValue = useMemo(
    () => ({
      currentRow,
      setCurrentRow,
      gameWon,
      setGameWon,
      winMessage,
      setWinMessage,
    }),
    [currentRow, setCurrentRow, gameWon, setGameWon, winMessage, setWinMessage],
  );

  GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
