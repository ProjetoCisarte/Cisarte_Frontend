import styled from "styled-components";

export const TitleAndText = styled.div `
    text-align: center;
    padding: 2rem 0px;
    max-width: 700px;
    margin: 0 auto;
    h5 {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.green};
        margin-bottom: 0.5rem;
    }
    h2 {
        font-size: 2rem;
    }
    @media screen and (max-width: 806px) {
        max-width: 540px;
        padding: 1.4rem 0px;

        h5 {
        margin-bottom: 0.3rem;
    }
        h2 {
        font-size: 1.7rem;
        margin-top: 20px;
    }
    }

    @media screen and (max-width: 630px) {
        max-width: 440px;

        h5 {
        font-size: 1rem;
    }

        h2 {
        font-size: 1.4rem;
        margin-top: 20px;
    }
    }

    @media screen and (max-width: 500px) {
        max-width: 300px;

        h5 {
        font-size: 1rem;
    }

        h2 {
        font-size: 1.4rem;
        margin-top: 20px;
    }
    }
`;

export const ContainerCards = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 70%;
    margin: 1.4rem auto;

    @media screen and (max-width: 1630px) {
        gap: 10px;
    }

    @media screen and (max-width: 1564px) {
       max-width: 80%;
    }

    @media screen and (max-width: 1368px) {
        max-width: 85%;
    }

    @media screen and (max-width: 1288px) {
        max-width: 70%;
    }

    @media screen and (max-width: 800px) {
        max-width: 90%;
    }

    @media screen and (max-width: 600px) {
        max-width: 100%;
    }
`;

export const ContainerForms = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2.3rem auto;
    margin-top: 4rem;
    width: 700px;
    padding: 2rem 0;
    border-radius: 50px;
    border: solid 1px ${({ theme }) => theme.colors.green};
    box-shadow: ${({ theme }) => theme.colors.green} 35px -30px 0px;

    h2 {
        color: ${({ theme }) => theme.colors.yellow};
        font-weight: bold;
        font-size: 2.2rem;
    }

    @media screen and (max-width: 850px) {
        margin: 2rem auto;
        margin-top: 3rem;
        width: 600px;
    }

    @media screen and (max-width: 720px) {
        width: 95%;
        box-shadow: ${({ theme }) => theme.colors.green} 0px 0px 0px;
    }

    @media screen and (max-width: 460px) {
        h2 {
        font-size: 1.8rem;
    }
    }
`;