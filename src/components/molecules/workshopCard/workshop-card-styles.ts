import styled from "styled-components";

interface CardContainerProps{
   bgImage:string;
}

export const WorkshopCardContainer = styled.section<CardContainerProps>`
background-image: url(${(props) => props.bgImage});
background-position: 0;
background-size: cover;
background-repeat: no-repeat;
width: 13rem;
height: 13rem;
border-radius:20px ;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;


@media screen and (max-width:430px) {
   width: 10rem;
   height: 10rem;
}
`;

export const TextDescription = styled.h4`
font-size: 1.5rem;
color: #fff;
width: 70%;
text-align: center;
padding: 10px;
font-weight: 700;
border: 4px solid #fff;
border-left:none ;
border-right: none;

&:hover{
   color: #FEBF29;
   border: 4px solid #FEBF29;
   transition: 0.6s;
   border-left:none ;
   border-right: none;
}

@media screen and (max-width:430px) {
   font-size: 1rem;
   width: 80%;
}
`

