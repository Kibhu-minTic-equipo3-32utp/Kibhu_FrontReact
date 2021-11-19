import { Link } from "react-router-dom"
import {Form} from "react-bootstrap"



const Login = () => {
    return (
        <div>
            <h2 className="text-center">Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control className="" type="user" placeholder="Ingrese Usuario" />
                </Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Ingrese Contraseña" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recuerdame" />
</Form.Group>
</Form>
            <button>
            <Link to="/kibhu"> Entrar </Link>
            </button>
        </div>
    )
}

export default Login 