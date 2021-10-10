import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    margin: 25px;
`;

export const CommentsBox = styled.div`
    display: flex;
 

    div {
        border: 2px dotted var(--pink);
        margin: 20px;
        width: calc(100% - 120px % 3);
        padding: 15px;
        text-align: justify;
    }
    
`;