import { useContext } from "react";
import { Button } from "../../components/Button";
import { GraduationContext } from '../../providers/graduation';
import { Box, BoxContainer, MainContainer} from './style';

export const Graduation = () => {

    const { graduation, removeFromGraduation } = useContext(GraduationContext);

    return (
        <MainContainer>
           <h1>Graduation Event</h1>
           <h3>Drink's List</h3>
                {graduation.length === 0 ? (
                    <span>No product has been added</span>
                ) : (
                    <BoxContainer>
                        {graduation.map((item) => (
                                <Box key={item.id}> 
                                    <h4>{item.name} - {item.volume.value} {item.volume.unit}</h4>
                                    <img src={item.image_url} alt={item.name} />
                                    <Button onClick={() => removeFromGraduation(item)}>Remove</Button>
                                </Box>))} 
                    </BoxContainer>
                )}
        </MainContainer>
            
    )
}