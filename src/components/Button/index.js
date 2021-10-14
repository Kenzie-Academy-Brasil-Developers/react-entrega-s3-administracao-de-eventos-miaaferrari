import { Container } from "./style";

export const Button = ({children, onClick}) => {

    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}