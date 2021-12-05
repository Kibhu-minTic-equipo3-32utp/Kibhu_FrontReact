import { createContext, useEffect, useState} from 'react';
import { apiProduct } from './Apis';

const ProductContext = createContext("");

const ProductProvider = ({children})=>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () =>{
        let resp = await fetch(apiProduct, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status === 200) {
            let json = await resp.json();
            setProducts(json);
        }
        return resp.status;
    }

    const handleCreate = async (objProducts) => {
        let resp = await fetch(apiProduct, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objProducts)
        })
        if (resp.status === 201){
            getProducts();
        }
        return resp;
    }

    const setProduct = async(objProducts)=>{
        let resp = await fetch(apiProduct, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objProducts)
        });
        if (resp.status === 200){
            getProducts();
        }
        return resp.status;
    }

    const data = { handleCreate, products, getProducts, setProduct  };
    return <ProductContext.Provider value= {data}>{children}</ProductContext.Provider>
    
    
}

export {ProductProvider};
export default ProductContext;