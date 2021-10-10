import styled from "styled-components";

export const Container = styled.button`
        background: var(--yellow);
        color: var(--black);
        font-weight: bold;
        border-radius: 8px;
        border: 2px outset var(--yellow); 
        width: 120px;
        height: 35px;

        :hover {
            opacity: 0.7;
            transition: 0.5s;
            border-color: var(--gray);
        }
`;  