import {ConteinerArticle, ArticleParagraph, ArticleSubtitle, ArticleTitle } from "./article-styles"

interface ArticleTemplateProps{
    title:string,
    subtitle?:string,
    paragraph?:string,
    textAlign?:string
}

export const Article =  ({title, subtitle, paragraph, textAlign}: ArticleTemplateProps) =>{
    return(
        <ConteinerArticle align={textAlign}>
        <ArticleSubtitle>{subtitle}</ArticleSubtitle>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleParagraph>{paragraph}</ArticleParagraph>
      </ConteinerArticle>
    )
}