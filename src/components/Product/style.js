import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 200px;
    
    h4 {
        text-align: center;
    }

    img {
        width: 50px;
        height: 100px;
        margin: 10px;
    }

    p{
        text-align: justify;
    }
    
    form {
        display: flex;
        flex-direction: column;
        margin: 10px;
        align-items: center;

        label {
            color: var(--pink);
        }

        select {
            width: 150px;
            margin-top: 10px;
        }   

        button {
            width: 200px;
            height: 30px;
            margin: 10px;
        }
    }

    
`;
