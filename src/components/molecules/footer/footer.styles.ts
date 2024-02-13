import styled from "styled-components";

export const LineYellow = styled.div `
    background-color: #FEBF29;
    padding: 15px;
    margin: 15px auto;
`;

export const ContainerInformation = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width:970px) {
        flex-direction: column;
    }
`;

export const LogoFooter = styled.div`
    img {
        width: 240px;
    }
    @media screen and (max-width:970px) {
        img {
        width: 200px;
        margin: 10px 0;
        margin-right: 18rem;
    }

    @media screen and (max-width:484px) {
        img {
        margin-right: 14rem;
        }
    }

    @media screen and (max-width:410px) {
        img {
        margin-right: 10rem;
        }
    }

    @media screen and (max-width:350px) {
        img {
        margin-right: 5rem;
        }
    }
}
`;

export const ContainerLinksFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    
    @media screen and (max-width:970px) {
        gap: 7rem;
    }

    @media screen and (max-width:510px) {
        gap: 0;
        justify-content: space-between;
        padding: 0 10px;
        width: 100%;
    }

    @media screen and (max-width:484px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        padding-left: 12px;
        width: 100%;
    }
`;

export const LinksFooter = styled.div`
    h3 {
        font-size: 1.4rem;
        padding: 8px 0px;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export const IconsFooter = styled.div`
    display: flex;
    gap: 1rem;
    img {
        width: 30px;
    }
`;

export const SpanFooter = styled.div`
    border-bottom: 2px solid #575656;
    margin: 0 auto;
    max-width: 60%;
    padding: 10px 0;

    @media screen and (max-width:1478px) {
    max-width: 70%;
    }

    @media screen and (max-width:970px) {
    max-width: 80%;
}

@media screen and (max-width:642px) {
    max-width: 100%;
}
`;

export const FinalFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    margin: 0 auto;
    max-width: 85%;
    font-size: 0.9rem;

    @media screen and (max-width:824px) {
        flex-direction: column;
}

@media screen and (max-width:642px) {
        p {
            text-align: center;
        }
}
`;