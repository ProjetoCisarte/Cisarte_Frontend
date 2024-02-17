import styled from "styled-components";

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