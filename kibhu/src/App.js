import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Kibhu from './components/app/kibju';
import Clientes from './components/app/clientes/clientes';

import Home from './components/web/home';
import Supliers from './components/app/proveedores/proveedores';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="kibhu" element={<Kibhu/>}>
        <Route path="clientes" element={<Clientes/>}/>
        <Route path="proveedores" element={<Supliers/>}/>
      </Route>
    </Routes>
  );
}

export default App;
