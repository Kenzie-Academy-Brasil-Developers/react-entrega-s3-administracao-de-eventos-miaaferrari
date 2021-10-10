import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--pink);
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    
    img {
        width: 70px;
        margin: 15px;
    }

    h1 {
        width: 150px;
        margin-left: 10px;
    }
`;

export const Menu = styled.div`
    margin: 15px 30px 15px 15px;
    display: flex;
    align-items: center;
`;