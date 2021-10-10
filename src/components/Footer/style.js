import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
   
    section {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 15px;
    
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 350px;

            div {
                display: flex;
                flex-direction: row;
                
                p {
                    width: 280px;
                    margin: 10px;
                }
    
            }
        }
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: small;
        background-color: var(--gray);
        height: 50px;

    }

`;

export const SocialMedias = styled.div`
    display: flex;
    justify-content: center;
`;