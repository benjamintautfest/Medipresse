import React from 'react'
import styled from 'styled-components/macro'

const Article = ({ children, headLine }) => {
	return (
		<ArticleStyled>
			<h2>{headLine}</h2>
			<article>{children}</article>
		</ArticleStyled>
	)
}

export default Article

const ArticleStyled = styled.article`
	margin-bottom: 1em;
	line-height: 1.6;
	padding-bottom: 2em;
	border-bottom: #ddd dotted 2px;

	h2,
	h3 {
		color: teal;
		line-height: 1.2;
	}
`
