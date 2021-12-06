import React, { useContext} from 'react';
import SuplierContext from '../../../controllers/Suplier.controller';
import SupliersForm from './proveedoresform';
import SuplierTable from './proveedorestabla';
import { Table } from 'react-bootstrap';

const Suplier = () => {
    const { supliers } = useContext(SuplierContext);
    return (
        <div>
            <h1>Proveedores</h1>
            <div className="supTab"> 
            <Table striped bordered hover variant="dark">
                {supliers.map((e) => (
                    <SuplierTable 
                    provid= {e}
                    />
                ))}
                </Table>
            </div> 
            <SupliersForm/>
        </div>
        
    )
}




export default Suplier