import styled from "styled-components";

export const TitleAndText = styled.div `
    text-align: center;
    padding: 2.5rem 0px;
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

export const ContainerVonlunteersCards  = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    max-width: 1360px;
    margin: 0 auto;
`;