import { useContext } from "react"
import { Button } from "../../components/Button"

import { WeddingContext } from "../../providers/wedding"
import { Box, BoxContainer, MainContainer} from './style';

export const Wedding = () => {

    const { wedding, removeFromWedding } = useContext(WeddingContext);

    return (
        <MainContainer>
           <h1>Wedding Event</h1>
           <h3>Drink's List</h3>
               {wedding.length === 0 ? (
                   <span>No product has been added</span>
               ) : (
                    <BoxContainer>
                        {wedding.map((item) => (
                                <Box key={item.id}> 
                                    <h4>{item.name} - {item.volume.value} {item.volume.unit}</h4>
                                    <img src={item.image_url} alt={item.name} />
                                    <Button onClick={() => removeFromWedding(item)}>Remove</Button>
                                </Box>))} 
                    </BoxContainer>
                   )}
        </MainContainer>
    )
}