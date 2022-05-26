import HookApp from './HookApp';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
    </header>

    <main className="App-main">
      <HookApp />
    </main>
  </div>
);

export default App;
