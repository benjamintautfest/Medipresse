import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import logo from '../assets/medipresse_logo.svg'

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

	const [specialMenu, setSpecialMenu] = useState(false)

	const menu = [
		{ name: 'Home', path: '/', id: 1 },
		{ name: 'Krankheiten A-Z', path: '/about', id: 2 },
		{ name: 'Gesund leben', path: '/contact', id: 3 },
		{ name: 'Expertensperchstunde', path: '/trombose', id: 4 },
		{ name: 'Mensch und Tier', path: '/trombose', id: 5 },
		{ name: 'Videos', path: '/trombose', id: 6 },
		{ name: 'Ratgeber', path: '/contact', id: 7 },
	]

	function handleClick() {
		setMobileNave(!mobileNavi)
	}

	return (
		<HeaderStyled>
			<ul className="contact-impressum">
				<li>
					<label>
						<input
							type="search"
							className="search-box"
							placeholder="suche"
						/>
						<button className="search-button">suche</button>
					</label>
				</li>
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
			<div className="special-menu">Specials</div>
			<h1>
				<Link to="/">
					<img className="logo" src={logo} alt="" />
				</Link>
			</h1>

			<nav>
				{menu.map((item) => (
					<Link key={item.id} to={item.path}>
						{item.name}
					</Link>
				))}
			</nav>

			{mobileNavi ? (
				<nav className="mobile-nav">
					{menu.map((item) => (
						<Link key={item.id} to={item.path}>
							{item.name}
						</Link>
					))}
				</nav>
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
		text-decoration: underline;
	}

	.logo {
		position: relative;
		top: 0.4em;
		margin: 0 auto;
		width: 50%;
		max-width: 200px;
	}

	.logo:hover {
		text-decoration: none;
	}

	.icon {
		font-size: 1.5em;
		margin-right: 0.5em;
	}
	nav {
		display: flex;
		background: white;
		padding-left: 2em;
	}

	.search-box {
		border-radius: 20px 0 0 20px;
		border: 1px #e0e9f0 solid;
		padding: 0.45em;
		padding-left: 1em;
		position: relative;
		top: -0.5em;
		outline: none;
		font-size: 1em;
	}

	.burger-menu {
		position: absolute;
		left: 1em;
		top: 1em;
		display: none;
		flex-direction: column;
		z-index: 10;
	}

	.special-menu {
		position: absolute;
		color: yellowgreen;
		right: 1em;
		top: 1em;
		display: none;
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

	.contact-impressum a,
	.search-button {
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
		transition: opacity 0.5s;
		border: none;
	}

	.search-button {
		border-radius: 0 20px 20px 0;
		padding: 0.5em;
		font-size: 1em;
		position: relative;
		top: -0.5em;
		outline: none;
	}

	.contact-impressum a:hover {
		opacity: 0.6;
	}

	@media (max-width: 910px) {
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

		.contact-impressum {
			display: none;
		}

		.icon {
			display: block;
		}

		.special-menu {
			display: block;
		}
	}
`
