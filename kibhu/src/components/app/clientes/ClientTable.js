import React, { useContext, useEffect, useState} from 'react';
import ClientContext from '../../../controllers/Client.controller';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import EditClientForm from './EditClientForm';

//iconos
import  { Envelope, CreditCard2BackFill, TelephonePlusFill, TrashFill, PencilSquare}  from 'react-bootstrap-icons'

const ClientTable= ({objClient, edit}) => {
    const { clients} = useContext(ClientContext);
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
            <Table striped bordered hover variant="dark" cellPadding={0} cellSpacing={0}>
                
                
                <tbody>
                    {
                        clients.length > 0 ? (
                        
                            <tr key={objClient.identification} >
                                <td>{objClient.firstname}</td>
                                <td>{objClient.lastname}</td>
                                <td>{objClient.typeid }</td>
                                <td><CreditCard2BackFill/> {objClient.identification} </td>
                                <td><Envelope/> {objClient.mail}  </td>
                                <td><TelephonePlusFill/>{objClient.contact}  </td>
                                <td>
                            <button
                            variant="warning"
                                onClick={handleShow}
                            >  <PencilSquare/> </button>
                            <button
                            variant="danger"
                                /*  onClick={() => {props.deleteClient(objClient.identification)}}*/
                            > 
                                <TrashFill/>
                            </button>
                            </td>
                        </tr>
                        ) : (
                            <tr> 
                                <td colSpan={7}>No clientes</td>
                            </tr>
                        )
                    }
                            
                        
                
                </tbody>
                
                
            </Table>
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