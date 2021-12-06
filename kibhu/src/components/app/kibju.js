import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../controllers/Auth.controller";
import { ClientProvider } from "../../controllers/Client.controller";
import { SuplierProvider } from "../../controllers/Suplier.controller";
import { UserProvider } from "../../controllers/User.controller";
import { ProductProvider } from "../../controllers/Product.controller";

import logo from "../../assets/logo pequeño kibhu new.png";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

function Kibhu() {
  const { handleLogout } = useContext(AuthContext);
  return (
    <>
      <header>
        <div class="principal">
          <div class="header-menu">
            <Link to="/">
              <img src={logo} className="logoo"></img>
            </Link>
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
        <ClientProvider>
          <UserProvider>
            <ProductProvider>
              <Outlet />
            </ProductProvider>
          </UserProvider>
        </ClientProvider>
      </SuplierProvider>
      <br></br>
      <br></br>
      <Container>
        <div class="row carticas">
          <div class="col-xl-3 col-md-6 mb-4">
            <a href="/productos">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">
                        Inventario
                      </div>
                      <p class="bold">4</p>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <a href="/usuarios">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">
                        Usuarios
                      </div>
                      <p class="bold">5</p>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-user fa-2x text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <a href="/clientes">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">
                        Clientes
                      </div>
                      <p class="bold">2</p>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <a href="/proveedores">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">
                        Proveedores
                      </div>
                      <p class="bold">3</p>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Kibhu;
