import { useContext, useEffect } from "react"
import { ProductContext } from '../../providers/product';
import { Product } from "../Product";
import axios from "axios";
import { Button } from "../Button";


export const ProductsList = () => {

    const { products, setProducts } = useContext(ProductContext);
   
    return (
        <div>
          
           {products.map((item) => (
               <div key={item.id}> 
                   <Product product={item} />
                </div> 
           ))}
        </div>
    )
}