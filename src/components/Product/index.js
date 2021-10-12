import { Button } from '../Button';
import { Container } from './style';

export const Product = ({product}) => {

    return (
        <Container>
            <h4>{product.name} - {product.volume.value} {product.volume.unit}</h4>
            <img src={product.image_url} alt={product.name} />
            <p>First Brewed: {product.first_brewed}</p>
            <details>
                <summary>Description</summary>
                <p>{product.description}</p>
            </details>
            <form>
                <label for='event'>Choose an event:</label>
                <select name='event'>
                    <option>Select</option>
                    <option value='wedding'>Wedding</option>
                    <option value='confra'>Confraternization</option>
                    <option value='graduation'>Graduation</option>
                </select>
                <Button type="submit">Add</Button>
            </form>
        </Container>
    )
}