import styled from "styled-components";

interface CardContainerProps{
   bgImage:string;
}

export const WorkshopCardContainer = styled.section<CardContainerProps>`
background-image: url(${(props) => props.bgImage});
background-position: 0;
background-size: cover;
background-repeat: no-repeat;
width: 15.44rem;
height: 15.44rem;
border-radius:20px ;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

`

export const TextDescription = styled.h4`
font-size: 1.8rem;
color: #fff;
width: 60%;
text-align: center;
padding: 10px;
font-weight: 700;
border: 4px solid #fff;
border-left:none ;
border-right: none;
`
