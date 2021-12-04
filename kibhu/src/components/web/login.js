import React, { useContext, useState} from 'react';
import AuthController from '../../controllers/Auth.controller';

import { Alert, Container, Form } from "react-bootstrap"

const objForm = {
    username: "",
    password: "",
};

const Login = () => {


    const { handleLogin } = useContext(AuthController);

    const [form, setForm] = useState(objForm);
    const [show, setShow] = useState(false);

    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(form).then((status) => {
            if (status === 200) {
                setForm(objForm);
                setShow(false);
            } else {
                setShow(true);
            }
        });
    }
    return (
        <div className="lgn">
            <Container>
            <h2 className="text-center">Login</h2>
            <Alert show={show} variant="warning"> CREDENCIALES INVALIDAS</Alert>
            <Form onSubmit={handleSubmit} className="usuario">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control 
                    value={form.email}
                    onChange={handleForm}
                    name="username"
                    type="username" 
                    placeholder="Ingrese Usuario"
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                    value={form.password}
                    onChange={handleForm}
                    name="password"
                    type="password" 
                    placeholder="Ingrese Contraseña"
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recuerdame" />
                </Form.Group>

                <button variant=" primary btn-lock" type="submit">
                Login
            </button>
            </Form>
            </Container>
        </div>
    )
}

export default Login;