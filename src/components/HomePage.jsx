import '../style/HomePage.css';

const HomePage = () => {
  return (
      <div className="container">
        <header className="homepage">
          <h1>Welcome to Wordle Game</h1>
          <p className="welcome-subtext">
            Test your vocabulary and see if you can guess the word in six tries.
          </p>
        </header>
      </div>
  );
};

export default HomePage;
