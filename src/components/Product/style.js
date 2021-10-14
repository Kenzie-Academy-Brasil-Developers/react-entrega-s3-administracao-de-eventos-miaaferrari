import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    width: 210px;
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
    
    details {
        position: relative;

        summary {
            margin-bottom: 10px;
            position: absolute;
            right: -55px;
        }

        p{
            position: absolute;
            border-radius: 8px;
            padding: 10px;
            width: 260px;
            top: 20px;
            right: -130px;
            background-color: beige;
            font-size: 15px;
        }

    }

    p{
        text-align: justify;
    }
    
    div {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            color: var(--pink);
        }

        button {
            width: 200px;
            height: 30px;
            margin: 3.5px;
        }
    }

    
`;
