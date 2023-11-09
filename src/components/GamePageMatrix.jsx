import { useState } from 'react';
import PropTypes from 'prop-types';
import GamePageRow from './GamePageRow';

const GamePageMatrix = ({ numRows, wordLength }) => {
  const [currentRow, setCurrentRow] = useState(0);

  const handleLetterInput = () => {
    // Handle the entered letters and update state as needed
    // For example, check if the row is complete and switch to the next row

    // For demonstration, let's just switch to the next row here
    setCurrentRow((prevRow) => (prevRow + 1));
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
