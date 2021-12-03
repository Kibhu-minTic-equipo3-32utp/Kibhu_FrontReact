import { createContext, useEffect, useState} from 'react';
import {apiClient} from './Apis';

const ClientContext = createContext("");

const ClientProvider = ({children})=>{

    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch(apiClient, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            setClients(response.data)
        })
        
    }, []);

    /*  const getClients = async () =>{
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
    }*/
    const data = { clients };
    return <ClientContext.Provider value= {data}>{children}</ClientContext.Provider>
    
    
}

export {ClientProvider};
export default ClientContext;