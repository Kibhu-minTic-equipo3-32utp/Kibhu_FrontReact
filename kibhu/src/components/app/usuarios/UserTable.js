import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const UserTable=(props) => {
    console.log(props.Users)
    return(
        <Container fluid>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Nombre de Usuario</th>
                    <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(
                        <tr key={user.username}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.password}</td>
                            <td>
                            <button
                                onClick={()  =>  {props.editRow(user)}}
                            > Edit</button>
                            <button
                                onClick={() => {props.deleteuser(user.username)}}
                            > 
                                Delete
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={7}>No hay usuarios</td>
                        </tr>
                    )
                }
                
                </tbody>
            </Table>
        </Container>
    );
}

export default UserTable