import styled from "styled-components";

export const ContainerCardsDesks = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Subtitle = styled.h2 `
    font-weight: bold;
   text-align: center;
   padding: 30px 0;
`;

export const ContainerWorkshopCard = styled.div `
   display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    max-width: 750px;
    margin: 0 auto;

    @media screen and (max-width: 704px) {
        width: 100%;
        gap: 20px;
        flex-wrap: wrap;
    }
`;

export const ContainerNavigationCards = styled.div `
    padding-bottom: 4rem;
    width: 60%;
    margin: 3rem auto;
    border-radius: 50px;
    box-shadow: black 0px 0px 4px;

    @media screen and (max-width: 1312px) {
        width: 70%;
    }

    @media screen and (max-width: 1116px) {
        width: 80%;
        gap: 50px;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 894px) {
        width: 90%;
        gap: 50px;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 704px) {
        width: 100%;
        gap: 50px;
        flex-wrap: wrap;
    }
`;


