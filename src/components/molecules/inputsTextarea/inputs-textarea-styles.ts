import styled from "styled-components";

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0px;

    label {
        font-weight: bold;
        margin: 5px 0;
    }

    textarea {
        border: 1px solid #C2BEBE;
        background-color: #F9FAFB;
        padding: 10px 10px;
        width: 500px;
        border-radius: 10px;
        outline: none;

        @media screen and (max-width: 520px) {
        width: 420px;
        }

        @media screen and (max-width: 430px) {
        width: 350px;
        }

        @media screen and (max-width: 360px) {
        width: 300px;
        }

    }
`;