import React, { useContext} from 'react';
import SuplierContext from '../../../controllers/Suplier.controller';
import SupliersForm from './proveedoresform';
import SuplierTable from './proveedorestabla';

const Suplier = () => {
    /*  const { supliers } = useContext(SuplierContext);*/
    return (
        <div>
            <h1>Proveedores</h1>
            {/*<SupliersForm/>
            <div className="supTab"> 
                {supliers.map((e) => (
                    <li key={e.ruc}> {e.name}  </li>
                ))}
            </div> */}
        </div>
        
    )
}




export default Suplier