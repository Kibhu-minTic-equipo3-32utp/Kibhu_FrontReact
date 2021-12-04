import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../controllers/Auth.controller";
import { SuplierProvider } from "../../controllers/Suplier.controller";
import logo from "../../assets/logo pequeño kibhu new.png";

import Card from "react-bootstrap/Card";

function Kibhu() {
  const { handleLogout } = useContext(AuthContext);
  return (
    <>
      <header>
        <div class="principal">
          <div class="header-menu">
            <img src={logo} className="logoo"></img>
            <ul class="breadcrumb">
              <li>
                <Link to="/productos">Productos</Link>
              </li>
              <li>
                <Link to="/usuarios">Usuarios</Link>
              </li>
              <li>
                <Link to="/clientes">Clientes</Link>
              </li>
              <li>
                <Link to="/proveedores">Proveedores</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Salir</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <SuplierProvider>
        <Outlet />
      </SuplierProvider>
      <Card>
        <Card.Body>
          <Card.Title>Inventario</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">4</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}
export default Kibhu;
