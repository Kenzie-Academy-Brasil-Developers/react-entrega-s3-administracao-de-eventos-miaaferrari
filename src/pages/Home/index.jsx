import { Comments } from "../../components/Comments";
import { Container } from "./style";
import { ProductsList } from "../../components/ProductsList";

export const Home = () => {

    return (
        <Container>
           <h1>Drink's List</h1>
           <span>
               Choose the drinks you want to add in your event!
           </span>
           <ProductsList type={'home'}/>
           <Comments />
        </Container>
    )
}