import { createContext, useEffect, useState} from 'react';
import { apiUser } from './Apis';

const UserContext = createContext("");

const UserProvider = ({children})=>{

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () =>{
        let resp = await fetch(apiUser, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status === 200) {
            let json = await resp.json();
            setUsers(json);
        }
        return resp.status;
    }

    const handleCreate = async (objUsers) => {
        let resp = await fetch(apiUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUsers)
        })
        if (resp.status === 201){
            getUsers();
        }
        return resp;
    }

    const setUser = async(objUsers)=>{
        let resp = await fetch(apiUser, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUsers)
        });
        if (resp.status === 200){
            getUsers();
        }
        return resp.status;
    }

    const data = { handleCreate, users, getUsers, setUser  };
    return <UserContext.Provider value= {data}>{children}</UserContext.Provider>
    
    
}

export {UserProvider};
export default UserContext;