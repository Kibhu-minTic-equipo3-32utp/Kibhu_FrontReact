import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Servicios from './components/web/services';
import Login from './components/web/login';
import Team from './components/web/team';
import Header from './components/web/header';
import News from './components/web/news';
import Precios from './components/web/prices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <Login/>
      </header>
      <body>
      <Servicios/>
      <Precios/>
      <Team/>
      <News/>
      </body>
    </div>
  );
}

export default App;
