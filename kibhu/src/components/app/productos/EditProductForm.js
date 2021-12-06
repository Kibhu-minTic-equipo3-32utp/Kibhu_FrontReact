import React, { useEffect, useState } from "react";
//elementos de bootstrap

import { Form, Modal, Button, InputGroup } from "react-bootstrap";

//elementos para el formulario
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const objForm = {
  name: "",
  description: "",
  stock: "",
  category: "",
  img: "",
  reference: "",
  pricein: "",
  priceout: "",
};

const EditProductForm = ({ show, handleClose, objProduct, handleUpdate }) => {
  const {
    formState: { errors },
  } = useForm();

  const [form, setForm] = useState(objForm);

  useEffect(() => {
    setForm({
      name: objProduct.name,
      description: objProduct.description,
      stock: objProduct.stock,
      category: objProduct.category,
      img: objProduct.img,
      reference: objProduct.reference,
      pricein: objProduct.pricein,
      priceout: objProduct.priceout,
    });
  }, [objProduct]);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    handleUpdate(form);
    setForm(objForm);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre Producto </Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre del producto"
              value={form.name}
              onChange={handleForm}
              required
            />
            <ErrorMessage errors={errors} name="name" />

            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Descripción </Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Descripción del producto"
              value={form.description}
              onChange={handleForm}
            />
            <ErrorMessage errors={errors} name="description" />

            <ErrorMessage
              errors={errors}
              name="description"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoría </Form.Label>
            <Form.Control
              type="text"
              name="category"
              placeholder="Categorías"
              value={form.category}
              onChange={handleForm}
            />
            <ErrorMessage errors={errors} name="category" />

            <ErrorMessage
              errors={errors}
              name="category"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Imagen </Form.Label>
            <Form.Control
              type="text"
              name="img"
              placeholder="Imagen"
              value={form.img}
              onChange={handleForm}
            />
            <ErrorMessage errors={errors} name="img" />

            <ErrorMessage
              errors={errors}
              name="img"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Referencia </Form.Label>
            <Form.Control
              type="number"
              name="reference"
              placeholder="# Referencia "
              value={form.reference}
              onChange={handleForm}
              required
            />
            <ErrorMessage errors={errors} name="reference" />

            <ErrorMessage
              errors={errors}
              name="reference"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>stock </Form.Label>
            <Form.Control
              type="number"
              name="stock"
              placeholder="Cantidad de productos "
              value={form.stock}
              onChange={handleForm}
              required
            />
            <ErrorMessage errors={errors} name="stock" />

            <ErrorMessage
              errors={errors}
              name="stock"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio de entrada </Form.Label>
            <Form.Control
              type="number"
              name="pricein"
              placeholder="Precio al que se compró "
              value={form.pricein}
              onChange={handleForm}
              required
            />
            <ErrorMessage errors={errors} name="pricein" />

            <ErrorMessage
              errors={errors}
              name="pricein"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio de salida </Form.Label>
            <Form.Control
              type="number"
              name="priceout"
              placeholder="Precio al que se vende "
              value={form.priceout}
              onChange={handleForm}
              required
            />
            <ErrorMessage errors={errors} name="priceout" />

            <ErrorMessage
              errors={errors}
              name="priceout"
              render={({ message }) => <p>{message}</p>}
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="succes" onClick={handleEdit}>
            {" "}
            Editar Producto
          </Button>
          <Button variant="warning" onClick={handleClose}>
            {" "}
            CERRAR
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default EditProductForm;
