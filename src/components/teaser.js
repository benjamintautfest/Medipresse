import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Teaser = () => {
	return (
		<TeaserBox>
			<div>
				<img
					src="https://storage.googleapis.com/treatspace-prod-media/pracimg/u-2202/shutterstock_1857461167.jpeg"
					alt=""
				/>
			</div>
			<article>
				<h3>Beweglichkeit verbessern und Schmerzen lindern</h3>
				<p>
					Die Selbstheilung von Gelenk- und Sportverletzungen fördern
					und Schmerzen lindern: Das ist mit der Platelet-Rich
					Plasma-Therapie (PRP) möglich. Dabei werden aufbereitete
					Blutplättchen aus den eigenen Venen in die betroffenen
					Stellen injiziert. Dr. Frank Thormählen erklärt die
					innovative Behandlungsmethode:
				</p>
				<Link to="/trombose">
					<button>mehr lesen</button>
				</Link>
			</article>
		</TeaserBox>
	)
}

export default Teaser

const TeaserBox = styled.div`
	display: flex;
	background: yellowgreen;
	height: 350px;

	@media (max-width: 1150px) {
		flex-direction: column;
		height: 100%;
	}

	div {
		width: 70%;
		height: 100%;
	}

	article {
		width: 30%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p{
		padding: 0 1em;
		line-height: 1.45;
	}

	h3 {
		padding: 0 .75em;
		color: teal;
		margin-bottom: 0;
	}

	button {
		border: none;
		background: teal;
		padding: 0.5em 1em;
		border-radius: 30px;
		margin-left: 1em;
		font-size: 1em;
		color: white;
		margin-bottom: 1em;
		outline: none;
		transition: all 0.5s;
	}

	button:hover {
		opacity: 0.8;
		transform: scale(1.1)
	}

	@media (max-width: 1150px) {
		div,
		article {
			width: 100%;
		}

		article {
			padding: 1em;
		}

		button {
			margin-bottom: 2em;
		}
	}
`
