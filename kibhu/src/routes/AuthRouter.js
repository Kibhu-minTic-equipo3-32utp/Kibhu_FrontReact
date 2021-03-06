import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Kibhu from '../components/app/kibju';
import Clientes from '../components/app/clientes/clientes';
import Supliers from '../components/app/proveedores/proveedores';
import Usuarios from '../components/app/usuarios/usuarios';
import Productos from '../components/app/productos/productos';

const Authrouter = () => {
    return(
        <Routes>
            <Route path="/" element={< Kibhu />}>
                <Route path="clientes" element={<Clientes/>}/>
                <Route path="proveedores" element={<Supliers/>}/>
                <Route path="usuarios" element={<Usuarios/>} />
                <Route path="productos" element={<Productos/>} />
            </Route>
        </Routes>
    )


}

export default Authrouter