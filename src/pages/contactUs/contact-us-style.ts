import styled from "styled-components";

export const ContainerIconsSocial = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 1.3rem 0;

    img {
        width: 50px;
    }

    @media screen and (max-width: 470px) {
        img {
        width: 40px;
    }
    }
`;

export const ContainerLinks = styled.div`
    display: flex;
    justify-content:  space-evenly;
    align-items: center;
    flex-wrap: wrap;
    max-width: 60%;
    margin: 1.8rem auto;

    @media screen and (max-width: 1060px) {
        max-width: 70%;
    }

    @media screen and (max-width: 876px) {
        max-width: 80%;
    }

    @media screen and (max-width: 740px) {
        max-width: 90%;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;
        gap: 1.3rem;
    }
`;

export const ContainerLinksContact = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    gap: 10px;
    border: 1px solid #575656;
    border-radius: 15px;

    img {
        margin-bottom: 10px;
    }

    a {
        margin-top: 13px;
        text-decoration: none;
        color: #575656;
    }
`;

export const ContainerAddress = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1400px;
    margin: 4rem auto;
    flex-wrap: wrap;

    iframe {
        border-radius: 40px;
        width: 620px;
        height: 370px;
    }

    @media screen and (max-width: 685px) {
        iframe {
        width: 500px;
    }
    }

    @media screen and (max-width: 540px) {
        iframe {
        width: 90%;
    }

    p {
        max-width: 300px;
    }
    }
`;