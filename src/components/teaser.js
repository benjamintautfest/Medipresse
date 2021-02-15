import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Teaser = () => {
	return (
		<TeaserBox>
			<div>
				<img src="https://www.planet-wissen.de/gesellschaft/krankheiten/rheuma_und_arthrose/rheuma-arthritis-gelenk-108~_v-gseagaleriexl.jpg" />
			</div>
			<article>
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
	background: #e1e4e9;
	height: 320px;

	@media (max-width: 1150px) {
		flex-direction: column;
		height: 100%;
	}

	div {
		width: 70%;
		height: 100%;
		background: cornflowerblue;
	}

	article {
		width: 30%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		padding: 0 1em;
		line-height: 1.6;
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
		transition: opacity 0.5s;
	}

	button:hover {
		opacity: 0.8;
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
