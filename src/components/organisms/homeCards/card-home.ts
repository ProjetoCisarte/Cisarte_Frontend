import styled from "styled-components";

export const CardsBar = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.4rem;


@media screen and (min-width:1390px) {
   gap: 7rem;
    };
    
@media screen and (min-width:780px) {
   flex-direction: row;
    };
    
`;