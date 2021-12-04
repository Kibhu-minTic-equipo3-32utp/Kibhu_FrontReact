import React from "react";
//elemento de bootstrap
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

//elementos para el formulario
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {

        console.log(data)

        props.addUser(data)
        //para limpiar los campos
        e.target.reset();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <InputGroup className="mb-3">
                <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
                <FormControl
                    type="text" firstname="firstname"
                    {...register("firstname", {
                        required: "Nombre requerido",
                    })}
                />
                <ErrorMessage errors={errors} name="firtsname" />
                <ErrorMessage
                    errors={errors}
                    name="firstname"
                    render={({ message }) => <p>{message}</p>}
                />
                <FormControl
                    type="text" lastname="lastname"
                    {...register("lastname",{
                        required: "Apellido requerido",
                    })}
                />
                <ErrorMessage errors={errors} name="lastname" />
                <ErrorMessage
                    errors={errors}
                    name="lastname" 
                    render={({message}) => <p>{message}</p>}
                    />
            </InputGroup>

            <FormGroup> 
            <FormLabel>Nombre de Usuario </FormLabel>
            <FormControl
                type="text" username="username"  
            {...register("username", {
                required: "Nombre de usuario requerido",
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
            <FormLabel>Contraseña</FormLabel>
            <FormControl
                type="text" password="password"  
            {...register("password", {
                required: "Contraseña requerida",
            })}
            />
            <ErrorMessage errors={errors} name="password" />

            <ErrorMessage
                errors={errors}
                name="password"
                render={({message})  => <p>{message}</p> }
            />
            </FormGroup>
            
            <button> Agregar nuevo usuario</button>
        </Form>
    );
}

export default AddUserForm;