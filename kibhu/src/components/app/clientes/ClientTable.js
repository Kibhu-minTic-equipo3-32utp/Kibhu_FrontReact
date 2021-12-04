import React, { useContext, useState} from 'react';
import ClientContext from '../../../controllers/Client.controller';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const ClientTable= ({objClient}) => {
    return (
        <Container fluid>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Tipo de ID</th>
                    <th>Número</th>
                    <th>Correo</th>
                    <th>Contacto</th>
                    <th>Aciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    objClient.length > 0 ?
                        (<tr key={objClient.identification}>
                            <td>{objClient.firstname}</td>
                            <td>{objClient.lastname}</td>
                            <td>{objClient.typeid}</td>
                            <td>{objClient.identification}</td>
                            <td>{objClient.mail}</td>
                            <td>{objClient.contact}</td>
                            <td>
                            <button
                                /* onClick={()  =>  {props.editRow(objClient)}} */
                            > Edit</button>
                            <button
                                /*  onClick={() => {props.deleteClient(objClient.identification)}}*/
                            > 
                                Delete
                            </button>
                            </td>
                        </tr>
                    ) : (
                        <tr>
                            <td colSpan={7}>No hay clientes</td>
                        </tr>
                    )
                }
                
                </tbody>
            </Table>
        </Container>
    );
}
export default ClientTable