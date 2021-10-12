import { Comments } from "../../components/Comments";
import { ProductsList } from "../../components/ProductsList";

export const Home = () => {

    return (
        <div>
           <h1>Drink's List</h1>
           <span>
               Choose the drinks you want to add in your event!
           </span>
           <ProductsList />
           <Comments />
        </div>
    )
}