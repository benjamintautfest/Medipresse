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

	const {title} = data.site.siteMetadata

	const [mobileNavi, setMobileNave] = useState(false)

	function handleClick() {
		setMobileNave(!mobileNavi)
	}

	return (
		<HeaderStyled>
			<ul className="contact-impressum">
				<li><Link to="/contact">Contact</Link></li>
				<li><Link to="/contact">Impressum</Link></li>
			</ul>
			<div onClick={handleClick} className="burger-menu">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h1>
				<Link className="logo" to="/">
					{title}
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
	background: white;
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
		color: teal;
	}
	nav {
		display: flex;
		background: white;
		padding-left: 1em;
	}

	.burger-menu {
		position: absolute;
		left: 1em;
		top: 1em;
		display: none;
		flex-direction: column;
		z-index: 10;
	}

	.burger-menu div {
		width: 2em;
		height: 5px;
		background: yellowgreen;
		display: block;
		border-radius: 5px;
		margin-bottom: 5px;
	}

	.mobile-nav {
		display: none;
		position: absolute;
		background: #000000ee;
		top: 0;
		height: 95vh;
		width: 100%;
		padding: 4em 2em;
	}

	.mobile-nav a {
		color: white;
		display: block;
		border-bottom: 1px dotted white;
		margin-bottom: 1em;
	}

	.contact-impressum {
		position: absolute;
		display: flex;
		text-decoration: none;
		list-style: none;
		right: 1em;
		top: 1em;
	}

	@media (max-width: 800px) {
		nav {
			display: none;
		}

		h1 {
			text-align: center;
		}

		.logo {
			font-size: 100%;
		}

		.burger-menu {
			display: flex;
		}

		.mobile-nav {
			display: block;
		}

		.contact-impressum {
			display: none;
		}
	}
`
