import React from 'react'
import Header from './header'
import Footer from './footer'
import style from '../styles/index.css'
import styled from 'styled-components'
import SideBar from './sidebar'

const Layout = ({ children }) => {
	return (
		<LayoutStyled>
			<Header />
			<div>
				<main>{children}</main>
				<SideBar />
			</div>
			<Footer />
		</LayoutStyled>
	)
}

export default Layout

const LayoutStyled = styled.div`
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
	background: white;
	margin-top: 1em;
	display: grid;

	@media (max-width: 800px) {
		width: 100%;
		margin: 0;
	}

	main {
		padding: 2em;
		width: 90%;
	}
	div {
		display: flex;
	}
	SideBar {
		width: 10%;
	}

	@media (max-width: 800px) {
		main {
			width: 100%;
		}
	}
`
