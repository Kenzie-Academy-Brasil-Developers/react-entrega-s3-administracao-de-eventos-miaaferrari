import { useContext } from "react"
import { ProductContext } from '../../providers/product';
import { Product } from "../Product";
import { Container } from './style';

 

export const ProductsList = () => {

    const { products } = useContext(ProductContext);
      

    return (
        <Container>
            
            {products.map((product) => (
                <div key={product.id}> 
                    <Product product={product}/>
                    </div>))} 
              
        </Container>
    )
}