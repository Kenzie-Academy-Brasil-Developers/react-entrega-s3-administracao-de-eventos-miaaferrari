import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get('https://api.punkapi.com/v2/beers')
            .then((response) => setProducts(response.data))
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        getProducts();
    });

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
    
}