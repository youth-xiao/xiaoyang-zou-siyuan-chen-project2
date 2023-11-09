import '../style/RulesPage.css';

function RulesPage() {
  return (
    <div className="rules">
      <h1>Game Rules</h1>
      <p>The rules of the Wordle game are simple:</p>
      <ul>
        <li>A secret word will be chosen at random, and you have to guess it.</li>
        <li>You will have a limited number of attempts to guess the word.</li>
        <li>Enter a word and submit it to see which letters are correct.</li>
        <li>If a letter is in the correct position, it will be highlighted in green.</li>
        <li>If a letter is in the word but in the wrong position, it will be highlighted in yellow.</li>
        <li>If a letter is not in the word at all, it will be greyed out.</li>
        <li>You win by guessing the word within the allowed number of attempts.</li>
      </ul>
      <p>Choose your difficulty level wisely and good luck!</p>
    </div>
  );
}

export default RulesPage;
