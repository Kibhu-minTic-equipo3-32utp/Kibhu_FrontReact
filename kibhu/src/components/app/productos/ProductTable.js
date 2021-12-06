import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../../controllers/Product.controller";

import EditProductForm from "./EditProductForm";

//iconos
import { Card, Container, Button, CardGroup, Row, Col } from "react-bootstrap";
import { Cash, PencilSquare } from "react-bootstrap-icons";

const ProductTable = ({ objProduct, edit }) => {
  const { setProduct } = useContext(ProductContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleUpdate = (obj) => {
    setProduct(obj);
  };

  return (
    <>
      <Container>
        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={objProduct.img} />
          <Card.Body>
            <Card.Title>{objProduct.name}</Card.Title>
            <Card.Text>
              {objProduct.description}
              <br></br>
              <b>Precio:</b> {objProduct.priceout}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={handleShow}>Edit </Button>
          </Card.Footer>
        </Card>
      </Container>
      <EditProductForm
        show={show}
        handleClose={handleClose}
        objProduct={objProduct}
        handleUpdate={handleUpdate}
      />
    </>
  );
};
export default ProductTable;
