import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useContext } from 'react';
import AuthContext from './controllers/Auth.controller';
import Authrouter from './routes/AuthRouter';
import UnauthRouter from './routes/UnAuthRouter';



function App() {
  const {auth} = useContext(AuthContext);

  return (
    <div className="app">
      {auth? <Authrouter/>: <UnauthRouter/>}
    </div>
  );
}

export default App;
