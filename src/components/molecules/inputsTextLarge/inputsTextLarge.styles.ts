import styled from "styled-components";

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-weight: bold;
        margin: 5px 0;
    }

    input {
        border: 1px solid #C2BEBE;
        background-color: #F9FAFB;
        padding: 0px 10px;
        width: 500px;
        height: 46px;
        border-radius: 10px;
        outline: none;

        @media screen and (max-width: 520px) {
        width: 420px;
        height: 43px;
        }
        
        @media screen and (max-width: 430px) {
        width: 350px;
        }

        @media screen and (max-width: 360px) {
        width: 300px;
        height: 40px;
        }

        @media screen and (max-width: 310px) {
        width: 250px;
        }
    }
`;