import { useState } from "react";
import PropTypes from "prop-types";
import GamePageRow from "./GamePageRow";

const GamePageMatrix = ({ numRows, wordLength }) => {
  const [currentRow, setCurrentRow] = useState(0);
  const handleLetterInput = (isBingo) => {
    setCurrentRow(currentRow + 1);
    console.log("check isBingo: " + isBingo);
    if (isBingo === true) {
      console.log("YOU WIN THE GAME!");
    }
  };

  const rowIndices = Array.from({ length: numRows }, (_, index) => index);

  return (
    <div className="game-page-matrix">
      {rowIndices.map((rowIndex) => (
        <GamePageRow
          key={rowIndex}
          wordLength={wordLength}
          isCurrentRow={rowIndex === currentRow}
          onLetterInput={handleLetterInput}
          onBingoStatusChange={(isBingo) => {
            handleLetterInput(isBingo);
          }}
        />
      ))}
    </div>
  );
};

GamePageMatrix.propTypes = {
  numRows: PropTypes.number.isRequired,
  wordLength: PropTypes.number.isRequired,
};

export default GamePageMatrix;
