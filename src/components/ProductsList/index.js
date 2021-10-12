import { useContext, useEffect } from "react"
import { ProductContext } from '../../providers/product';
import { Product } from "../Product";
import axios from "axios";


export const ProductsList = () => {

    const { products, setProducts } = useContext(ProductContext);
   
    //    axios
    //         .get('https://api.punkapi.com/v2/beers')
    //         .then((response) => setProducts(response.data))
    //         .catch((err) => console.log(err))
    

    const getProducts = () => {
        axios
            .get('https://api.punkapi.com/v2/beers')
            .then((response) => setProducts(response.data))
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        getProducts();
        console.log(products)
    });




    return (
        <div>
           {products.map((item, index) => (
               <Product key={index} name={item.name} image={item.image_url} volume={item.volume} brewed={item.first_brewed} description={item.description} /> 
           ))}
        </div>
    )
}