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

	const { title } = data.site.siteMetadata

	const [mobileNavi, setMobileNave] = useState(false)

	function handleClick() {
		setMobileNave(!mobileNavi)
	}

	return (
		<HeaderStyled>
			<ul className="contact-impressum">
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/contact">Impressum</Link>
				</li>
			</ul>
			<div onClick={handleClick} className="burger-menu">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h1>
				<Link className="logo" to="/">
					<span className="icon">🦠</span>
					{title}
				</Link>
			</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">Krankheiten A-Z</Link>
				<Link to="/contact">Gesund leben</Link>
				<Link to="/trombose">Experten-Sprechtstunde</Link>
				<Link to="/trombose">Mensch und Tier</Link>
				<Link to="/trombose">Videos</Link>
			</nav>
			{mobileNavi ? (
				<div className="mobile-nav">
					<Link to="/">Home</Link>
					<Link to="/about">Krankheiten A-Z</Link>
					<Link to="/contact">Gesund leben</Link>
					<Link to="/trombose">Experten-Sprechtstunde</Link>
					<Link to="/trombose">Mensch und Tier</Link>
					<Link to="/trombose">Videos</Link>
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
	border-top: 30px yellowgreen solid;
	ƒ h1,
	a {
		color: white;
	}

	h1 {
		margin-left: 0.5em;
	}

	a {
		color: grey;
		padding: 0.5em 1em 1em 0;
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

	.icon {
		font-size: 1.5em;
		margin-right: 0.5em;
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
		height: 100vh;
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

	.contact-impressum a {
		margin-right: 5px;
		background: rgb(112, 164, 6);
		background: linear-gradient(
			0deg,
			rgba(112, 164, 6, 1) 0%,
			rgba(154, 205, 50, 1) 100%
		);
		padding: 0.5em 1em;
		border-radius: 30px;
		color: white;
	}

	@media (max-width: 910px) {
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

		.icon {
			display: block;
		}
	}
`
