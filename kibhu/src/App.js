import logo from './logo.svg';
import './App.css';
import Servicios from './components/web/services';
import Login from './components/web/login';
import Team from './components/web/team';
import Header from './components/web/header';
import News from './components/web/news';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login/>
      </header>
      <body>
      <Servicios/>
      <Team/>
      <News/>
      </body>
    </div>
  );
}

export default App;
