//Clientes y su catalogo será trabajado con hooks
import Badge from 'react-bootstrap/Badge';

import React, { useContext} from 'react';
import ClientTable from './ClientTable';
import AddClientForm from './AddClientForm';
import EditClientForm from './EditClientForm';
import ClientContext from '../../../controllers/Client.controller';


const Clientes = () => {
    
    const { clients } = useContext(ClientContext);

    

    //para añadir cliente

    /*const addClient =  (client) => {
        setClients([
            ...clients,
            client
        ])
    }
    <ClientTable 
                    clients={clients} 
                    deleteClient={deleteClient} 
                    editRow={editRow}
                    /> 

    //para Eliminar cliente

    const deleteClient = (identification) => {

        setClients(clients.filter(client => client.identification !== identification))

    }
    // para Editar clientes
    const [editing, setEditing] = useState(false);
    const [currentClient, setCurrentClient] = useState({
        firstname: '',
        lastname: '',
        mail: '',
        contact: null,
        identification: null,
        typeid: ''
    })
    const editRow = (client) => {
        setEditing(true);
        setCurrentClient({
            identification: client.identification,
            firstname: client.firstname,
            lastname: client.lastname,
            mail: client.mail,
            contact: client.contact,
            typeid: client.typeid
        })
    }
    const updateClient = (identification, updatedClient) => {
        setEditing(false);
        setClients(clients.map(client => (client.identification === identification ? updatedClient : client)))
    }*/


    return(
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <h1><Badge pill bg="secondary">CLIENTES DE KIBHU</Badge></h1>
                    <br></br>
                    <br></br>
                    <div>
                    {clients.map((e) => (
                        <ClientTable
                        key={e.identification}
                        objClient={e}
                        />
                    ))}
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/*  <div className="flex-large">
                    {
                        editing ? (
                            <div>
                                <h2><Badge pill bg="secondary">EDITAR CLIENTE</Badge></h2>
                                <br></br>
                                <br></br>
                                <EditClientForm 
                                currentClient={currentClient}
                                updateClient={updateClient}
                                />
                            </div>
                        ) : (
                            <div>
                            <h2><Badge pill bg="secondary">AÑADIR CLIENTE</Badge></h2>
                            <br></br>
                            <br></br>
                            <AddClientForm addClient={addClient} />
                            </div>
                        )
                    }
                    
                </div> */}
            </div>
        </div>
    );    
};

export default Clientes;