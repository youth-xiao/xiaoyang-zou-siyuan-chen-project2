import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import GamePageRow from "./GamePageRow";
import "../style/gamePageMatrixStyle.css";
import GamePageReset from "./GamePageReset";

const GamePageMatrix = ({ difficulty, numRows, wordLength }) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [isResetButtonClicked, setIsResetButtonClicked] = useState(false);
  const wordList = useMemo(() => {
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
  }, [wordLength]);

  const secretWord = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    console.log("random index: " + randomIndex);
    return wordList[randomIndex];
  }, [wordList]);

  // Reset game state when difficulty changes
  useEffect(() => {
    setCurrentRow(0);
    setGameWon(false);
    setWinMessage("");
    setIsResetButtonClicked(false); // Reset the reset button state
  }, [difficulty, numRows, wordLength]);

  const handleReset = () => {
    console.log("click handleReset!!!");
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
      <GamePageReset onReset={handleReset} buttonText="Reset Game" />
      {gameWon && (
        <div className="win-message-container">
          <p className="win-message">{winMessage}</p>
          <GamePageReset onReset={handleReset} buttonText="Yes" />
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
          setIsResetButtonClicked={setIsResetButtonClicked}
          secretWord={secretWord}
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
