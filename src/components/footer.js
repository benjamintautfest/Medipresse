import React from 'react'
import styled from 'styled-components/macro'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					footer
				}
			}
		}
	`)

	return (
		<FooterStyled>
			<p>
				&copy; {data.site.siteMetadata.footer} | <Link to="#">über uns </Link>|
				<Link to="#"> Impressum</Link>
			</p>
		</FooterStyled>
	)
}

export default Footer

const FooterStyled = styled.footer`
	background: yellowgreen;
	padding: 1em;
	text-align: center;
	color: white;

	a {
		text-decoration: none;
		color: white;
	}

	a:hover {
		color: teal;
	}
`
