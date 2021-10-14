import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;

    h1, h3 {
        margin: 10px;
    }

    span {
        margin-top: 50px;
    }
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px;
    width: 150px;
    height: 230px;

    box-shadow: 5px 4px 7px -2px rgba(189,126,126,0.82);
    border-radius: 8px;

    h4 {
        text-align: center;
        height: 60px;
    }

    img {
        width: 50px;
        height: 100px;
        margin-bottom: 5px;
    }
`;