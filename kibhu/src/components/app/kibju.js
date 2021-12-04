import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../controllers/Auth.controller";
import { SuplierProvider } from "../../controllers/Suplier.controller";


function Kibhu() {
    const {handleLogout} = useContext(AuthContext);
    return (
        <>
            <header>
            <Link to="/clientes">clientes</Link>
            <Link to="/proveedores">proveedores</Link>
            <button  onClick={handleLogout}>Salir</button>
            </header>
            <SuplierProvider> 
            <Outlet />
            </SuplierProvider>
        </>
        
    )
}
export default Kibhu;