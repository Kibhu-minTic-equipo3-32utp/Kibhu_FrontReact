import React, { useContext } from 'react';
import SuplierContext from '../../../controllers/Suplier.controller';
import SupliersForm from './proveedoresform';
import SuplierTable from './proveedorestabla';
import Badge from 'react-bootstrap/Badge';
import { Table } from 'react-bootstrap';

const Suplier = () => {
    const { supliers } = useContext(SuplierContext);
    return (
        <div>
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        <h1><Badge pill bg="secondary">Proveedores</Badge></h1>
                        <div className="supTab">
                            <Table striped bordered hover variant="dark">
                                {supliers.map((e) => (
                                    <SuplierTable
                                        provid={e}
                                    />
                                ))}
                            </Table>
                        </div>
                        <SupliersForm />

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>

    )
}




export default Suplier