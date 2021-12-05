import React, { useContext, useEffect, useState} from 'react';
import ClientContext from '../../../controllers/Client.controller';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import EditClientForm from './EditClientForm';



const ClientTable= ({objClient, edit}) => {
    const { setClient} = useContext(ClientContext);

    const { deleteClient} = useContext(ClientContext);

    const handleDelete = (obs) => {
        deleteClient(obs)
        
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleUpdate = (obj) => {
        setClient(obj);
    };
    
    return (
    <>
        <Container fluid>
            <Table striped bordered hover variant="dark">
                
                <tbody>
                            <tr >
                                <td>{objClient.firstname}</td>
                                <td>{objClient.lastname}</td>
                                <td>{objClient.typeid}</td>
                                <td>{objClient.identification}</td>
                                <td>{objClient.mail}</td>
                                <td>{objClient.contact}</td>
                                <td>
                            <button
                                onClick={handleShow}
                            > Edit</button>
                            <button
                                /*  onClick={() => {props.deleteClient(objClient.identification)}}*/
                            > 
                                Delete
                            </button>
                            </td>
                        </tr>
                        
                
                </tbody>
                
                
            </Table>
        </Container>
        <EditClientForm
        show={show}
        handleClose={handleClose}
        objClient={objClient}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        />
    </>
    );
}
export default ClientTable