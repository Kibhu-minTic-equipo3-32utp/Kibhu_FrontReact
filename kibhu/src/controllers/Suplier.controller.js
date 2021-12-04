import { createContext, useState, useEffect} from 'react';
import { apiSuplier } from './Apis';

const SuplierContext = createContext("");

const SuplierProvider = ({children})=>{

    const handleCreate = async (objSuplier) => {
        const resp = await fetch(apiSuplier, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objSuplier)
        })
        if (resp.status === 201){
            getSupliers();
        }
        return resp;
    }
    const [supliers, setSupliers] = useState( [] );
    useEffect(()=>{
        getSupliers();
    }, []);
    

    const getSupliers = async()=>{
        let resp = await fetch(apiSuplier, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(resp.status === 200){
            let json = await resp.json();
            setSupliers(json);
        }
        return resp.status;
    }
    

    const setSuplier = async(objSuplier)=>{
        let resp = await fetch(apiSuplier, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objSuplier)
        });
        if (resp.status === 200){
            getSupliers();
        }
        return resp.status;
    }


    const data = {handleCreate, supliers, getSupliers, setSuplier};
    return <SuplierContext.Provider value={data}>{children}</SuplierContext.Provider>
}
export {SuplierProvider};
export default SuplierContext;