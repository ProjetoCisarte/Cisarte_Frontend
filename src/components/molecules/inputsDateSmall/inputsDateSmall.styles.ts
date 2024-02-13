import styled from "styled-components";

export const InputSmallContainer = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-weight: bold;
        margin: 5px 0;
    }

    input {
        border: 1px solid #C2BEBE;
        background-color: #F9FAFB;
        padding: 0px 7px;
        width: 250px;
        height: 43px;
        border-radius: 10px;
        outline: none;

        @media screen and (max-width: 520px) {
        width: 210px;
        height: 43px;
        }

        @media screen and (max-width: 360px) {
        width: 180px;
        height: 40px;
        }
    }
`;