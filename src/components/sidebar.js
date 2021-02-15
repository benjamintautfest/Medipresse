import React from 'react'
import styled from 'styled-components/macro'
import Article from './article'
import { Link } from 'gatsby'
import SpecialLinks from './specialLinks'

const SideBar = () => {
	return (
		<SidebarStyled>
			<SpecialLinks />
			<img
				src="https://www.medipresse.de/uploads/images/busch_sidebar_teaser.jpg"
				alt=""
			/>
			<img
				src="https://www.medipresse.de/uploads/images/experten_btn.jpg"
				alt=""
			/>

			<Article headLine="und eine dritte">
				<p>
					Hier steht ein bisschen Text, den ich hier nur
					hingeschrieben habe, weil mein Emmet nicht geht und ich
					einfach Lorem Ipsum erzeugen kann. Dafür geht Prettier
					endlich.
					<Link to="/trombose">gehen will</Link>
				</p>
			</Article>
		</SidebarStyled>
	)
}

export default SideBar

const SidebarStyled = styled.aside`
	padding: 1em;
	width: 400px;
	line-height: 1.6;

	h2 {
		color: teal;
	}

	@media (max-width: 800px) {
		display: none;
	}
`
