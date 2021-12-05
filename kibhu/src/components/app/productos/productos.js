//Productos y su catalogo será trabajado con hooks
import Badge from "react-bootstrap/Badge";

/* import React, { useContext } from "react";
import ClientTable from "./ProductTable";
import AddClientForm from "./AddProductForm";
import ClientContext from "../../../controllers/Client.controller";
import ClientHeader from "./productHead";
import { Table } from "react-bootstrap"; */

const Productos = () => {
  /*  const { clients } = useContext(ClientContext); */

  return (
    <div className="container">
      <h1>Productos.com</h1>
      {/* <div className="flex-row">
        <div className="flex-large">
          <h1>
            <Badge pill bg="secondary">
              PRODUCTOS DE KIBHU
            </Badge>
          </h1>
          <br></br>
          <br></br>
          <Table striped bordered hover variant="dark">
            {clients.map((e) => (
              <ClientTable objClient={e} edit={true} />
            ))}
          </Table>
        </div>
        <AddClientForm />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div> */}
    </div>
  );
};

export default Productos;
