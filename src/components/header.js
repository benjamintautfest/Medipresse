import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

export default function Header() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [mobileNavi, setMobileNave] = useState(false)

	function handleClick() {
		setMobileNave(!mobileNavi)
	}

	return (
		<HeaderStyled>
			<div onClick={handleClick} className="burger-menu">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h1>
				<Link className="logo" to="/">
					{data.site.siteMetadata.title}
				</Link>
			</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/trombose">Artikel</Link>
			</nav>
			{mobileNavi ? (
				<div className="mobile-nav">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/trombose">Artikel</Link>
				</div>
			) : (
				''
			)}
		</HeaderStyled>
	)
}

const HeaderStyled = styled.header`
	background: yellowgreen;
	margin-top: 0;
	position: relative;

	h1,
	a {
		color: white;
	}

	h1 {
		padding: 1em;
	}

	a {
		color: black;
		padding: 0.5em 1em;
		transition: all 0.4s;
		text-decoration: none;
	}

	a:hover {
		color: teal;
		transform: scale(1.1);
	}

	.logo {
		color: white;
	}
	nav {
		display: flex;
		background: white;
		padding-left: 1em;
	}

	.burger-menu {
		position: absolute;
		right: 1em;
		top: 1em;
		display: none;
		flex-direction: column;
		z-index: 10;
	}

	.burger-menu div {
		width: 2em;
		height: 5px;
		background: white;
		display: block;
		border-radius: 5px;
		margin-bottom: 5px;
	}

	.mobile-nav {
		display: none;
		position: absolute;
		background: #000000dd;
		top: 0;
		height: 95vh;
		width: 100%;
		padding: 2em;
	}

	.mobile-nav a {
		color: white;
		display: block;
		border-bottom: 1px dotted white;
		margin-bottom: 1em;
	}

	@media (max-width: 800px) {
		nav {
			display: none;
		}

		h1 {
			text-align: center;
		}

		.burger-menu {
			display: flex;
		}

		.mobile-nav {
			display: block;
		}
	}
`
