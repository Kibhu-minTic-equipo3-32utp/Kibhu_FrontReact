//Productos y su catalogo será trabajado con hooks
import Badge from "react-bootstrap/Badge";
import ProductContext from "../../../controllers/Product.controller";
import AddProductForm from "./AddProductForm";
import ProductTable from "./ProductTable";

import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";


const Productos = () => {


  const { products } = useContext(ProductContext); 

  return (
    
  <div className="flex-row">
        <div className="flex-large">
          <h1>
            <Badge pill bg="secondary">
              PRODUCTOS DE KIBHU
            </Badge>
          </h1>
          <br></br>
          <div>
            
            {products.map((e) => (
              <Row>
              <Col for="client in clients" key="client.reference">
              <ProductTable
              key={e.reference}
              objProduct={e}
              edit={true}
              />
              </Col>
            </Row>
            ))}
            
          </div>
          <br></br>
          
        </div>
        <AddProductForm />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div> 
  );
};

export default Productos;
