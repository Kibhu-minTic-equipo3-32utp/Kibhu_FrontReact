import { Link, Outlet } from "react-router-dom";


function Kibhu() {
    return (
        <div>
            <header>
            <Link to="/kibhu/clientes">clientes</Link>
            <Link to="/kibhu/proveedores">proveedores</Link>
            <Outlet />
            </header>
        </div>
        
    )
}
export default Kibhu;