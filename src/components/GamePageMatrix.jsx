import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GamePageRow from "./GamePageRow";
import "../style/gamePageMatrixStyle.css";
import GamePageReset from "./GamePageReset";

const GamePageMatrix = ({ difficulty, numRows, wordLength }) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [winMessage, setWinMessage] = useState(""); // New state for the message
  const [isResetButtonClicked, setIsResetButtonClicked] = useState(false); // New state for the reset button

  // Reset game state when difficulty changes
  useEffect(() => {
    setCurrentRow(0);
    setGameWon(false);
    setWinMessage("");
    setIsResetButtonClicked(false); // Reset the reset button state
  }, [difficulty, numRows, wordLength]);

  const handleReset = () => {
    console.log("click handleReset!!!");
    // setCurrentRow(0);
    // setGameWon(false);
    // setWinMessage("");
    // setIsResetButtonClicked(true); // Set the reset button state
    window.location.reload(); // Reload the page
  };

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

  useEffect(() => {
    if (isResetButtonClicked) {
      handleReset();
    }
  }, [difficulty, numRows, wordLength, isResetButtonClicked]);

  return (
    <div className="game-page-matrix">
      <GamePageReset onReset={handleReset} />
      {gameWon && (
        <div>
          <p className="win-message">{winMessage}</p>
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
          handleReset={handleReset}
          setIsResetButtonClicked={setIsResetButtonClicked} // Pass setIsResetButtonClicked to the GamePageRow component
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
