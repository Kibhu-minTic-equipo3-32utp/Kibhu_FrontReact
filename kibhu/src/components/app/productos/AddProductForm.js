import React, { useContext, useState } from 'react'
//elementos de bootstrap
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import FormSelect from 'react-bootstrap/esm/FormSelect';

//elementos para el formulario
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ClientContext from '../../../controllers/Client.controller';

const objForm = {
    firstname: '',
    lastname: '',
    mail: '',
    contact: '',
    identification: '',
    typeid: ''
};



const AddClientForm = () => {

    const {handleCreate} = useContext(ClientContext);

    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const { formState: { errors }} = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await handleCreate(form);
        if (resp.status === 201){
            setForm(objForm);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <InputGroup className="mb-3"> 
                <InputGroup.Text>  Nombre y Apellido</InputGroup.Text>
                <FormControl
                    type="text" name="firstname" placeholder="Nombre " value={form.firstname} onChange={handleForm} required
                />
                <ErrorMessage errors={errors}  />
                <ErrorMessage
                    errors={errors}
                    render={({message})  => <p>{message}</p> }
                />
                <FormControl
                    type="text" name="lastname" placeholder="Apellido " value={form.lastname} onChange={handleForm} required
                />
                <ErrorMessage errors={errors} name="lastname" />
                <ErrorMessage
                    errors={errors}
                    name="lastname"
                    render={({message})  => <p>{message}</p> }
                />
            </InputGroup>

            <FormGroup>
            <FormLabel>Tipo de Id </FormLabel>
            <FormSelect  aria-label="Default select example"
            
            type="select" name="typeid"  value={form.typeid} onChange={handleForm}  required
            >
                <option> Seleccione tipo de ID </option>
                <option> CC </option>
                <option> TI </option>
                <option> Pasaporte </option>
                <option> NIP </option>
            </FormSelect>
            <ErrorMessage errors={errors} name="typeid" />

            <ErrorMessage
                errors={errors}
                name="typeid"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>

            <FormGroup> 
            <FormLabel>Identificación </FormLabel>
            <FormControl
                type="number" name="identification" placeholder="# Identificación " value={form.identification} onChange={handleForm}  required
            />
            <ErrorMessage errors={errors} name="identification" />

            <ErrorMessage
                errors={errors}
                name="identification"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>

            <FormGroup> 
            <FormLabel>Mail </FormLabel>
            <FormControl
                type="mail" name="mail" placeholder="Correo Electrónico " value={form.mail} onChange={handleForm} required
            />
            <ErrorMessage errors={errors} name="email" />

            <ErrorMessage
                errors={errors}
                name="email"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>

            <FormGroup> 
            <FormLabel>Contacto </FormLabel>
            <FormControl
                type="number" name="contact" placeholder="# Contacto " value={form.contact} onChange={handleForm}  required
            />
            <ErrorMessage errors={errors} name="contact" />

            <ErrorMessage
                errors={errors}
                name="contact"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>
            
            <button variant="succes" type="submit"> Agregar nuevo cliente</button>
        </Form>
    );
}

export default AddClientForm;