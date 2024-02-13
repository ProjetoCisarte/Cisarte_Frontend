import { ArticleParagraph, ArticleSubtitle, ArticleTitle } from "./article-styles"
import React from "react"

interface ArticleTemplateProps{
    title:string,
    subtitle:string,
    paragraph:string
}

export const Article =  ({title, subtitle, paragraph}: ArticleTemplateProps) =>{
    return(
        <article>
        <ArticleSubtitle>{subtitle}</ArticleSubtitle>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleParagraph>{paragraph}</ArticleParagraph>
      </article>
    )
}