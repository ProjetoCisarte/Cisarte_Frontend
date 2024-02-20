import styled from "styled-components";

export const CardConteiner = styled.aside`
width: 22.4rem;
height: 19rem;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 10px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
gap: 1rem;
padding: 10px;
margin-bottom: 1.4rem;


@media screen and (max-width:420px) {
   width:17rem;
   height: 16rem;
   gap: 0.3rem;
    };

h4{
    font-size: 1.2rem;

    @media screen and (max-width:420px) {
   font-size: 1rem;
    };

}

p{
    font-size: 1rem;

    @media screen and (max-width:420px) {
   font-size: 0.8rem;
    };
}

&:hover{
    box-shadow: 0px 0px 14px 0px rgba(254,191,41);
    transition: 0.6s;
}
`;

export const ButtonCard = styled.button`
padding: 3px 22px;
background-color: #126E30;
border: 0;
border-radius: 20px;
color: #fff;
`

