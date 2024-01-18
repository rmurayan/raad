import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'raad';

  return (
    <div className="App">
      <section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App Developed {name }by Raid Murayan!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By me
        </a>
      </header>
      </section>
    </div>
  );
}

export default App;
