import styled from "styled-components";

export const Container = styled.section`
    text-align: center;
    height: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;

    h1 {
        margin: 15px;
    }

    h3 {
        margin: 15px;
    }

    form {
        display: flex;
        width: 85vw;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            width: calc(100% / 2);
            margin: 10px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            input{
                height: 35px;
                margin-left: 5px;
                width: 30vw;
                font-size: 15px;
            }

            textarea {
                height: 150px;
                width: 30vw;
                font-size: 15px;
            }
            
        }
    }

`;