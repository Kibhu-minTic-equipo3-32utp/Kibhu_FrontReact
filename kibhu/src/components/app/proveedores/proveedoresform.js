import React, { useContext, useState} from 'react';
import SuplierContext from '../../../controllers/Suplier.controller';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormControl from 'react-bootstrap/esm/FormControl';

/*  

const objForm = {
    name: "",
    mail: "",
    contact: "",
    ruc: ""
}

const SupliersForm = () => {
    const {handleCreate} = useContext(SuplierContext);

    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        setForm( {...form, [e.target.name]: e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await handleCreate(form);
        if(resp.status === 201){
            alert('Created');
            setForm(objForm)
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl 
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleForm}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>contact</FormLabel>
                    <FormControl 
                    name="contact"
                    type="number"
                    placeholder="contacto"
                    value={form.contact}
                    onChange={handleForm}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>ruc</FormLabel>
                    <FormControl 
                    name="ruc"
                    type="number"
                    placeholder="ruc"
                    value={form.ruc}
                    onChange={handleForm}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>mail</FormLabel>
                    <FormControl 
                    name="mail"
                    type="text"
                    placeholder="mail"
                    value={form.mail}
                    onChange={handleForm}
                    />
                </FormGroup>
                <button type="submit">
                    crear
                </button>
            </Form>
        </div>
    )

}

export default SupliersForm
*/