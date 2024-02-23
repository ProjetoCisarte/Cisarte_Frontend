import styled from "styled-components";

interface ArticleProps{
    align?:string
}

export const ConteinerArticle = styled.article<ArticleProps>`
width: 100%;
padding: 1rem 0;
text-align: ${(props) =>props.align};
`

export const ArticleSubtitle = styled.h3`
font-size: 1.3rem;
font-weight: 700;
color: #126E30;
`;

export const ArticleTitle = styled.h2`

font-size: 2.2rem;
font-weight: 800;
color: #000;
`;

export const ArticleParagraph = styled.p`
font-size: 1.2rem;
font-weight: 600;
color: #575656;
`;
