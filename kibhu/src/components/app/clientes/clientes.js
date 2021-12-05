//Clientes y su catalogo será trabajado con hooks
import Badge from 'react-bootstrap/Badge';

import React, { useContext} from 'react';
import ClientTable from './ClientTable';
import AddClientForm from './AddClientForm';
import ClientContext from '../../../controllers/Client.controller';
import ClientHeader from './clientHead';


const Clientes = () => {
    const { clients} = useContext(ClientContext);

    

    return(
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <h1><Badge pill bg="secondary">CLIENTES DE KIBHU</Badge></h1>
                    <br></br>
                    <br></br>
                    
                    <div>
                        <ClientHeader/>
                        {clients.map((e) => (
                            <ClientTable
                            key={e.identification}
                            objClient={e}
                            edit={true}
                            />
                        ))}
                        
                    </div>
                </div>
                <AddClientForm/>


                <br></br>
                <br></br>
                <br></br>
                <br></br>  
            </div> 
        </div>
    );    
};

export default Clientes;