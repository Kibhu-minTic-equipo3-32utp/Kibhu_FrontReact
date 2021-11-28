import React from 'react'
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




const EditClientForm = (props) => {


    const {register, handleSubmit, setValue, formState: { errors }} = useForm({
        defaultValues: props.currentClient
    });

    setValue('firstname', props.currentClient.firstname);
    setValue('lastname', props.currentClient.lastname);
    setValue('contact', props.currentClient.contact);
    setValue('mail', props.currentClient.mail);
    setValue('typeid', props.currentClient.typeid);
    setValue('identification', props.currentClient.identification);


    const onSubmit = (data, e) => {

        console.log(data)

        props.updateClient(props.currentClient.identification, data);

        e.target.reset();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <InputGroup className="mb-3"> 
                <InputGroup.Text>  Nombre y Apellido</InputGroup.Text>
                <FormControl
                    type="text" firstname="firstname" 
                    {...register("firstname", {
                        required: "Nombre requerido",
                    })}
                />
                
                <FormControl
                    type="text" lastname="lastname" 
                    {...register("lastname", {
                        required: "Apellido requerido",
                    })}
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
            <FormSelect 
            aria-label="Default select example"
            type="select" typeid="typeid"  
            {...register("typeid", {
                required: "Tipo de ID requerida",
            })}>
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
                type="number" identification="identification"  
            {...register("identification", {
                required: "Identificación requerida",
            })}
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
                type="mail" mail="mail"  
            {...register("mail", {
                required: 'Email is required',
                pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,}
            })}
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
                type="number" contact="contact"  
            {...register("contact", {
                required: "Número de contacto requerid",
            })}
            />
            <ErrorMessage errors={errors} name="contact" />

            <ErrorMessage
                errors={errors}
                name="contact"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>
            
            <button> Editar cliente</button>
        </Form>
    );
}

export default EditClientForm;