import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'gatsby'

const Footer = () => {
	return (
		<FooterStyled>
			<p>
				&copy; 2021 Medipresse | <Link to="#">über uns </Link>|
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
