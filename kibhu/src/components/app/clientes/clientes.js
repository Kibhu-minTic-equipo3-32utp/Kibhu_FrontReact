//Clientes y su catalogo será trabajado con hooks
import Badge from 'react-bootstrap/Badge';


import ClientTable from './ClientTable';
import {useState} from 'react';
import AddClientForm from './AddClientForm';
import EditClientForm from './EditClientForm';



export default function Clientes() {
    const clientData = [
        { firstname: "carlos", lastname: "Ceballos", mail:"carlos@gmail.com", contact:"931293912", identification:"01", typeid:"CC"},
        { firstname: "daniel", lastname: "Ceballos", mail:"carlos@gmail.com", contact:"931293912", identification:"02", typeid:"CC"},
        { firstname: "andrés", lastname: "Ceballos", mail:"carlos@gmail.com", contact:"931293912", identification:"03", typeid:"CC"}
    ]

    // para ver los clientes

    const[clients, setClients] =useState(clientData)

    //para añadir cliente

    const addClient =  (client) => {
        setClients([
            ...clients,
            client
        ])
    }

    // para Eliminar cliente

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
    }


    return(
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <h1><Badge pill bg="secondary">CLIENTES DE KIBHU</Badge></h1>
                    <br></br>
                    <br></br>
                    <ClientTable 
                    clients={clients} 
                    deleteClient={deleteClient} 
                    editRow={editRow}
                    />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="flex-large">
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
                    
                </div>
            </div>
        </div>
    );    
}

