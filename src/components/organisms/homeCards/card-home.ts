import styled from "styled-components";

export const CardsBar = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 7rem;

@media screen and (max-width:1390px) {
   gap: 1.4rem;
    };
    
@media screen and (max-width:1070px) {
   flex-direction: column;
    };
    
`;