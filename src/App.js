import logo from './logo.svg';
import './App.css';
import Rating from './Rating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rating rating={null}/>
        <p>
          Star rating widget, click to set rating.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
