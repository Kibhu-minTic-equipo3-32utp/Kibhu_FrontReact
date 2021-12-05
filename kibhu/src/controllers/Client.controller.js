import { createContext, useEffect, useState} from 'react';
import {apiClient} from './Apis';

const ClientContext = createContext("");

const ClientProvider = ({children})=>{

    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients();
    }, []);

    const getClients = async () =>{
        let resp = await fetch(apiClient, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status === 200) {
            let json = await resp.json();
            setClients(json);
        }
        return resp.status;
    }

    const handleCreate = async (objClient) => {
        let resp = await fetch(apiClient, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objClient)
        })
        if (resp.status === 201){
            getClients();
        }
        return resp;
    }

    const setClient = async(objClient)=>{
        let resp = await fetch(apiClient, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objClient)
        });
        if (resp.status === 200){
            getClients();
        }
        return resp.status;
    }

    const deleteClient = async(objClient)=>{
        let resp = await fetch(apiClient, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objClient)
        });
        if (resp.status === 500){
            getClients();
        }
        return resp.status;
    }

    const data = { handleCreate, clients, getClients, setClient, deleteClient };
    return <ClientContext.Provider value= {data}>{children}</ClientContext.Provider>
    
    
}

export {ClientProvider};
export default ClientContext;