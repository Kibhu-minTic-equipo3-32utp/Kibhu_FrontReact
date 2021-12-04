import { Link, Outlet } from "react-router-dom";
import { SuplierProvider } from "../../controllers/Suplier.controller";


function Kibhu() {
    return (
        <>
            <header>
            <Link to="/clientes">clientes</Link>
            <Link to="/proveedores">proveedores</Link>
            </header>
            <SuplierProvider> 
            <Outlet />
            </SuplierProvider>
        </>
        
    )
}
export default Kibhu;