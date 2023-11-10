import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GamePageRow from "./GamePageRow";

const GamePageMatrix = ({ difficulty, numRows, wordLength }) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [winMessage, setWinMessage] = useState(""); // New state for the message

  // Reset game state when difficulty changes
  useEffect(() => {
    setCurrentRow(0);
    setGameWon(false);
  }, [difficulty, numRows, wordLength]);

  const handleLetterInput = (isBingo) => {
    if (gameWon === true) {
      return;
    }
    setCurrentRow(currentRow + 1);
    console.log("check isBingo: " + isBingo);
    if (isBingo === true) {
      setGameWon(true);
      setWinMessage("Congratulations! Would you like to try again?");
    }
  };

  const rowIndices = Array.from({ length: numRows }, (_, index) => index);

  return (
    <div className="game-page-matrix">
      {gameWon && (
        <div className="win-message">
          <p>{winMessage}</p>
        </div>
      )}{" "}
      {rowIndices.map((rowIndex) => (
        <GamePageRow
          key={rowIndex}
          wordLength={wordLength}
          isCurrentRow={rowIndex === currentRow}
          onLetterInput={handleLetterInput}
          onBingoStatusChange={(isBingo) => {
            handleLetterInput(isBingo);
          }}
          gameWon={gameWon}
        />
      ))}
    </div>
  );
};

GamePageMatrix.propTypes = {
  difficulty: PropTypes.string.isRequired,
  numRows: PropTypes.number.isRequired,
  wordLength: PropTypes.number.isRequired,
};

export default GamePageMatrix;
