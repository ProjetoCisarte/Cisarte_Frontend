import styled from "styled-components"; 

interface ArticleProps{
    align?:string
}


export const ConteinerArticle = styled.article<ArticleProps>`
width: 100%;
padding: 1rem 0;
text-align: ${(props) =>props.align};
font-family: 'Source Sans 3';
`

export const ArticleSubtitle = styled.h3`
font-size: 1.6rem;
font-weight: 700;
color: #126E30;

@media screen and (max-width:520px){
    font-size: 1.1rem;}

@media screen and (max-width:1290px){
    font-size: 1.3rem;
}

`;

export const ArticleTitle = styled.h2`

font-size: 2.3rem;
font-weight: 800;
color: #000;

@media screen and (max-width:580px){
    font-size: 1.7rem; }

`;

export const ArticleParagraph = styled.p`
font-size: 1.3rem;
font-weight: 600;
color: #575656;


@media screen and (max-width:520px){
    font-size: 1rem;
}


`;
