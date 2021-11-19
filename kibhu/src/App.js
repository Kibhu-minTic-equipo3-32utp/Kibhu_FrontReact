import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Kibhu from './components/app/kibju';
import Home from './components/web/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/kibhu" element={<Kibhu/>}/>
    </Routes>
  );
}

export default App;
