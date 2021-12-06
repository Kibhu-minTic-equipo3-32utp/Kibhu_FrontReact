import React, { useContext, useState} from 'react';
import SuplierContext from '../../../controllers/Suplier.controller';
import Table from 'react-bootstrap/Table';

const SuplierTable  = ({provid}) => {
    const { supliers } = useContext(SuplierContext);

    return (
        <>
        <Table striped bordered hover variant="dark" cellPadding={0} cellSpacing={0}></Table>
        <tbody>
            {
                supliers.length > 0 ? (
                        
                    <tr key={provid.ruc} >
                        <td>{provid.name}</td>
                        <td>{provid.mail}</td>
                        <td>{provid.contact}</td>
                        <td>                   
                    </td>
                </tr>
                ) : (
                    <tr> 
                        <td colSpan={7}>No Proveedores</td>
                    </tr>
                )
            }

        </tbody>
        </>
    );
}

export default SuplierTable;
