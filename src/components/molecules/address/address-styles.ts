import styled from "styled-components";

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