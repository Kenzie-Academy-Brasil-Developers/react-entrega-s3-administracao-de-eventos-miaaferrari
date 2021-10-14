import { useContext } from 'react';
import { GraduationContext } from '../../providers/graduation';
import { WeddingContext } from '../../providers/wedding';
import { ConfraContext } from '../../providers/confra';
import { Button } from '../Button';
import { Container } from './style';

export const Product = ({product}) => {

        
        const { addToWedding } = useContext(WeddingContext);
        const { addToGraduation } = useContext(GraduationContext);
        const { addToConfra } = useContext(ConfraContext);
              
        return (
        <Container>
            <h4>{product.name} - {product.volume.value} {product.volume.unit}</h4>
            <img src={product.image_url} alt={product.name} />
            <p>First Brewed: {product.first_brewed}</p>
            <details>
                <summary>Description</summary>
                <p>{product.description}</p>
            </details>
            <div>
                <span>Choose an event:</span>
                <Button onClick={() => addToWedding(product)}>Wedding</Button>
                <Button onClick={() => addToConfra(product)}>Confraternization</Button>
                <Button onClick={() => addToGraduation(product)}>Graduation</Button> 
            </div>
        </Container>
    )
}