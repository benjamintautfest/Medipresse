import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logo from '../assets/medipresse_logo.svg'
import Layout from '../components/layout'
import styled from 'styled-components'

export default function GraphqlTestSite() {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							excerpt
						}
						html
					}
				}
			}
		}
	`)

	return (
		<Layout>
			{data.allMarkdownRemark.edges.map((edge) => (
				<ArticleTeaser key={edge.node.frontmatter.title}>
					<h2>{edge.node.frontmatter.title}</h2>
					<div style={{ marginBottom: '2em' }}>
						<img src={edge.node.frontmatter.banner} />
						<p>
							{edge.node.frontmatter.excerpt}{' '}
							<Link to="#">mehr</Link>
						</p>
					</div>
				</ArticleTeaser>
			))}
		</Layout>
	)
}

const ArticleTeaser = styled.article`
	h2 {
		color: teal;
		font-size: 1.3em;
	}

	p {
		line-height: 1.6;
		margin-top: 0;
		padding-bottom: 1em;
		border-bottom: solid 1px #ddd;
	}

	a {
		color: teal;
	}
`
