import React from 'react'
import styled from 'styled-components'

const Article = ({children, headLine}) => {
    return(
        <ArticleStyled>
            <h2>{headLine}</h2>
            {children}
        </ArticleStyled>
    )
}

export default Article

const ArticleStyled = styled.article`
    margin-bottom: 1em;
    line-height: 1.6;
    border-bottom: #ddd solid 1px;
        h2, h3 {
            color: teal;
        }
`
