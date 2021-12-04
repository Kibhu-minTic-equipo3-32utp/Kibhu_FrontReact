import React from 'react'
//elementos de bootstrap
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

//elementos para el formulario
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';




const EditUserForm = (props) => {


    const {register, handleSubmit, setValue, formState: { errors }} = useForm({
        defaultValues: props.currentUser
    });

    setValue('firstname', props.currentUser.firstname);
    setValue('lastname', props.currentUser.lastname);
    setValue('username', props.currentUser.username);
    setValue('password', props.currentUser.password)

    const onSubmit = (data, e) => {

        console.log(data)

        props.updateUser(props.currentUser.username, data);

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
            <FormLabel>Nombre de Usuario</FormLabel>
            <FormControl
                type="text" username="username"  
            {...register("username", {
                required: "Identificación requerida",
            })}
            />
            <ErrorMessage errors={errors} name="username" />

            <ErrorMessage
                errors={errors}
                name="username"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>

            <FormGroup> 
            <FormLabel>passwordo </FormLabel>
            <FormControl
                type="text" password="password"  
            {...register("password", {
                required: "Password requerida",
            })}
            />
            <ErrorMessage errors={errors} name="password" />

            <ErrorMessage
                errors={errors}
                name="password"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>
            
            <button> Editar Usuario</button>
        </Form>
    );
}

export default EditUserForm;