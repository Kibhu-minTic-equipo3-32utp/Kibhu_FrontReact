//Usuarios y su catalogo será trabajado con hooks
import Badge from 'react-bootstrap/Badge';

import UserTable from './UserTable';
import { userstate } from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';


const Usuarios = () => {
    const UserData = [
        { firstname: "Jhon", lastname: "Dosman", username: "2man1103", password: "12345" },
        { firstname: "Danniel", lastname: "Arias", username: "dani123", password: "54321" },
        { firstname: "Andres", lastname: "Acosta", username: "acostica123", password: "1111" },
        { firstname: "Myriam", lastname: "Hernandez", username: "Mhernandez", password: "0000" },
        { firstname: "Juan", lastname: "Mendez", username: "Juankm", password: "2222" },
    ]

    // Para ver los usuarios

    const[users, setUsers] = userstate(UserData)

    //para añadir usuario

    const addUser = (user) => {
        setUsers([
            ...users,
            user
        ])
    }

    // para Eliminar cliente

    const deleteUser = (username) => {

        setUsers(users.filter(user => user.username !== username))}

        //para editar usuarios
        const [editing, setEditing] = userstate(false);
        const [currentUser, setCurrentUser] = userstate({
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        })
        const editRow = (user) => {
            setEditing(true)
            setCurrentUser({
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                password: user.password
            })
        }
        const updateUser = (username, updateUser) => {
            setEditing(false);
            setUsers(users.map(user => (user.username === username ? updateUser : user)))
        }

        return (
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        <h1><Badge pill bg="secondary">USUARIOS DE KIBHU</Badge></h1>
                        <br></br>
                        <br></br>
                        <UserTable
                            users={users}
                            deleteUser={deleteUser}
                            editRow={editRow}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="flex-large">
                        {
                            editing ? (
                                <div>
                                    <h2><Badge pill bg="secondary">EDITAR USUARIO</Badge> </h2>
                                    <br></br>
                                    <br></br>
                                    <EditUserForm
                                        currentUser={currentUser}
                                        updateUser={updateUser}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <h2><Badge pill bg="secondary">AÑADIR USUARIO</Badge> </h2>
                                    <br></br>
                                    <br></br>
                                    <AddUserForm addUser={addUser} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

    export default Usuarios;