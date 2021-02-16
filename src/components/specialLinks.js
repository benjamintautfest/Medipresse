import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SpecialLinks = () => {
	return (
		<SpecialButtons>
			<Link className="link augen-link" to="/contact">
				Augen Spezial
			</Link>
			<Link className="link diabetes-link" to="/contact">
				Diabetes Spezial
			</Link>
			<Link className="link herz-link" to="/contact">
				Herz Spezial
			</Link>
			<Link className="link knochen-link" to="/contact">
				Knochen Spezial
			</Link>
			<Link className="link ruecken-link" to="/contact">
				Rücken Spezial
			</Link>
			<Link className="link wechseljahre-link" to="/contact">
				Wechseljahre
			</Link>
			<Link className="link mundgesundheit-link" to="/contact">
				Mundgesundheit
			</Link>
		</SpecialButtons>
	)
}

export default SpecialLinks

const SpecialButtons = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2em;

	a {
		background: blue;
		display: block;
		color: white;
	}

	.link {
		display: block;
		border-radius: 30px;
		padding: 0.5em 1em;
		text-align: center;
		text-decoration: none;
		margin-bottom: 1em;
        font-weight: bold;
        text-shadow: 1px 1px 0px rgb(0 0 0 / 60%);
        letter-spacing: 1px;
	}

	.link:hover {
		opacity: 0.8;
	}

	.augen-link {
		background: #04639C;
	}

	.diabetes-link {
		background: #FA1E80;
	}

	.herz-link {
		background: #F6C42E;
	}

	.knochen-link {
		background: #FB1321;
	}

	.ruecken-link {
		background: blue;
	}

	.wechseljahre-link {
		background: #A43998;
	}

	.mundgesundheit-link {
		background: #FA4D20;
	}
`
