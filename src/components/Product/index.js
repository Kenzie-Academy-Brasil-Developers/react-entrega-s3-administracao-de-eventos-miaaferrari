import { Button } from '../Button';

export const Product = ({name, image, volume, brewed, description}) => {

    return (
        <div>
            <label>{name} {volume}</label>
            <img src={image} alt={name} />
            <p>First Brewed: {brewed}</p>
            <p>description {description}</p>
            <form>
                <label for='event'>Choose an event:</label>
                <select name='event'>
                    <option value='wedding'>Wedding</option>
                    <option value='confra'>Confraternization</option>
                    <option value='graduation'>Graduation</option>
                </select>
                <Button type="submit">Add</Button>
            </form>
        </div>
    )
}