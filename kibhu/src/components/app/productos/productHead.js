import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const ClientHeader = () => {
    return(
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
                    <th>Acciones</th>
                    </tr>
                </thead>
            </Table>
        </Container>
    )
}

export default ClientHeader;