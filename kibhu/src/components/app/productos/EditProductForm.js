import React, { useEffect, useState} from 'react'
//elementos de bootstrap
/*  import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import FormSelect from 'react-bootstrap/esm/FormSelect';*/
import {Form, Modal, Button, InputGroup} from 'react-bootstrap'


//elementos para el formulario
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const objForm = {
    firstname: '',
    lastname: '',
    mail: '',
    contact: '',
    identification: '',
    typeid: ''
}


const EditClientForm = ({show, handleClose, objClient, handleUpdate}) => {


    const { formState: { errors }} = useForm();

    const [form, setForm] = useState(objForm);

    useEffect(()  => {
        setForm({
            firstname: objClient.firstname,
            lastname: objClient.lastname,
            mail: objClient.mail,
            contact: objClient.contact,
            identification: objClient.identification,
            typeid: objClient.typeid
        })
    }, [objClient])

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleEdit = () => {
        handleUpdate(form);
        setForm(objForm);
        handleClose();
    }


    

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <Form>
            <InputGroup className="mb-3"> 
                <InputGroup.Text>  Nombre y Apellido</InputGroup.Text>
                <Form.Control
                    type="text" name="firstname" placeholder="Nombre " value={form.firstname} onChange={handleForm} required
                />
                <ErrorMessage errors={errors}  />
                <ErrorMessage
                    errors={errors}
                    render={({message})  => <p>{message}</p> }
                />
                <Form.Control
                    type="text" name="lastname" placeholder="Apellido " value={form.lastname} onChange={handleForm} required
                />
                <ErrorMessage errors={errors} name="lastname" />
                <ErrorMessage
                    errors={errors}
                    name="lastname"
                    render={({message})  => <p>{message}</p> }
                />
            </InputGroup>

            <Form.Group>
            <Form.Label>Tipo de Id </Form.Label>
            <Form.Select  aria-label="Default select example"
            
            type="select" name="typeid"  value={form.typeid} onChange={handleForm}  required
            >
                <option> Seleccione tipo de ID </option>
                <option> CC </option>
                <option> TI </option>
                <option> Pasaporte </option>
                <option> NIP </option>
            </Form.Select>
            <ErrorMessage errors={errors} name="typeid" />

            <ErrorMessage
                errors={errors}
                name="typeid"
                render={({message})  => <p>{message}</p> }
            />
            </Form.Group>

            <Form.Group> 
            <Form.Label>Identificación </Form.Label>
            <Form.Control
                type="number" name="identification" placeholder="# Identificación " value={form.identification} onChange={handleForm}  required
            />
            <ErrorMessage errors={errors} name="identification" />

            <ErrorMessage
                errors={errors}
                name="identification"
                render={({message})  => <p>{message}</p> }
            />
            </Form.Group>

            <Form.Group> 
            <Form.Label>Mail </Form.Label>
            <Form.Control
                type="mail" name="mail" placeholder="Correo Electrónico " value={form.mail} onChange={handleForm} required
            />
            <ErrorMessage errors={errors} name="email" />

            <ErrorMessage
                errors={errors}
                name="email"
                render={({message})  => <p>{message}</p> }
            />
            </Form.Group>

            <Form.Group> 
            <Form.Label>Contacto </Form.Label>
            <Form.Control
                type="number" name="contact" placeholder="# Contacto " value={form.contact} onChange={handleForm}  required
            />
            <ErrorMessage errors={errors} name="contact" />

            <ErrorMessage
                errors={errors}
                name="contact"
                render={({message})  => <p>{message}</p> }
            />
            </Form.Group>
            
        </Form>
        <Modal.Footer>
            <Button variant="succes" onClick={handleEdit}> Editar Cliente</Button>
            <Button variant="warning" onClick={handleClose}> CERRAR</Button>
        </Modal.Footer>
        </Modal.Body>
    </Modal>
    );
}

export default EditClientForm;