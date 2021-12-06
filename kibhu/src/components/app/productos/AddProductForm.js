import React, { useContext, useState } from "react";
//elementos de bootstrap
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormControl from "react-bootstrap/esm/FormControl";
import Container from "react-bootstrap/Container";

//elementos para el formulario
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ProductContext from "../../../controllers/Product.controller";

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

const AddProductForm = () => {
  const { handleCreate } = useContext(ProductContext);

  const [form, setForm] = useState(objForm);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const {
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await handleCreate(form);
    if (resp.status === 201) {
      setForm(objForm);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Nombre Producto </FormLabel>
          <FormControl
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
        </FormGroup>

        <FormGroup>
          <FormLabel>Descripción </FormLabel>
          <FormControl
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
        </FormGroup>

        <FormGroup>
          <FormLabel>Categoría </FormLabel>
          <FormControl
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
        </FormGroup>

        <FormGroup>
          <FormLabel>Imagen </FormLabel>
          <FormControl
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
        </FormGroup>

        <FormGroup>
          <FormLabel>Referencia </FormLabel>
          <FormControl
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
        </FormGroup>

        <FormGroup>
          <FormLabel>stock </FormLabel>
          <FormControl
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
        </FormGroup>

        <FormGroup>
          <FormLabel>Precio de entrada </FormLabel>
          <FormControl
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
        </FormGroup>

        <FormGroup>
          <FormLabel>Precio de salida </FormLabel>
          <FormControl
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
        </FormGroup>

        <button variant="succes" type="submit">
          {" "}
          Agregar nuevo producto
        </button>
      </Form>
    </Container>
  );
};

export default AddProductForm;
