import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const ClientTable= (props) => {
    console.log(props.clients)
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
                    props.clients.length > 0 ?
                    props.clients.map(client =>(
                        <tr key={client.identification}>
                            <td>{client.firstname}</td>
                            <td>{client.lastname}</td>
                            <td>{client.typeid}</td>
                            <td>{client.identification}</td>
                            <td>{client.mail}</td>
                            <td>{client.contact}</td>
                            <td>
                            <button
                                onClick={()  =>  {props.editRow(client)}}
                            > Edit</button>
                            <button
                                onClick={() => {props.deleteClient(client.identification)}}
                            > 
                                Delete
                            </button>
                            </td>
                        </tr>
                    )) : (
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