import './App.css';
import SnakeGame from "./SnakeGame";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snake Game React</h1>
        <div className="textWrapper">
          <p className="subTitle">A simple snake game created with the
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a>
            JavaScript library
          </p>
        </div>
      </header>
      <SnakeGame />
    </div>
  );
}

export default App;
