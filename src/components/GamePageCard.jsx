import PropTypes from "prop-types";
import "../style/gamePageCardStyle.css";

function GamePageCard({ letter, isImmutable, cardColorClass }) {
  let cardStyle; // Default class
  let isStageTwo = false;
  if (isImmutable) {
    isStageTwo = true;
    cardStyle = cardColorClass;
  } else {
    isStageTwo = false;
    cardStyle = "card";
  }

  return (
    <div
      className={isStageTwo ? "" : cardStyle}
      id={isStageTwo ? cardStyle : ""}
    >
      <div className="letter-display">{letter}</div>
    </div>
  );
}

GamePageCard.propTypes = {
  letter: PropTypes.string.isRequired,
  isImmutable: PropTypes.bool.isRequired,
  cardColorClass: PropTypes.string,
};

export default GamePageCard;
