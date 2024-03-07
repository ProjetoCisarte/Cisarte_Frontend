import styled from "styled-components";

export const Collaborator = styled.div `
    width: 300px;
    box-shadow: 0px 0px 10px #d8d5d5;
    border-radius: 20px;
    border: solid 2px #A2C2AD;
    margin-bottom: 3rem;
    margin-top: 1rem;

    img {
        width: 160px;
        position: relative;
        top: -30px;
        margin-bottom: 10px;
    }
`;

export const CollaboratorImg = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div `
    background-color:  ${({ theme }) => theme.colors.yellow};
    border-radius: 20px 20px 0px 0px;
    height: 90px;
`;

export const Baseboard = styled.div `
    background: ${({ theme }) => theme.colors.white};
    color: #fff;
    border-radius: 0px 0px 10px 10px;
    padding-bottom: 20px;

    h4 {
        color: #000000;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 22px;
        font-weight: bold;
        margin-bottom: 15px;
        text-align: center;
        margin-top: 3.5rem;
    }

    h5 {
        font-size: 1rem;
        line-height: 22px;
        color: #5F5858;
        padding: 0 16px;
        text-align: center;
    }
`;