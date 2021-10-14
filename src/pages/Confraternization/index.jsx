import { useContext } from "react";
import { Button } from "../../components/Button";
import { ConfraContext } from "../../providers/confra";
import { Box, BoxContainer, MainContainer} from './style';



export const Confraternization = () => {

    const { confra, removeFromConfra } = useContext(ConfraContext);

    return (
        <MainContainer>
           <h1>Confraternization Event</h1>
           <h3>Drink's List</h3>
           {confra.length === 0 ? (
                <span>No product has been added</span>
           ) : (
                <BoxContainer>
                    {confra.map((item) => (
                            <Box key={item.id}> 
                                <h4>{item.name} - {item.volume.value} {item.volume.unit}</h4>
                                <img src={item.image_url} alt={item.name} />
                                <Button onClick={() => removeFromConfra(item)}>Remove</Button>
                            </Box>))} 
                </BoxContainer>

           )}
        </MainContainer>
    )
}