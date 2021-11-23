import { Link, Outlet } from "react-router-dom";


function Kibhu() {
    return (
        <div>
            <header>
            <Link to="/kibhu/clientes">clientes</Link>
            <Outlet />
            </header>
        </div>
        
    )
}
export default Kibhu;