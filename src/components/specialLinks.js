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
		background: yellowgreen;
		display: block;
		border-radius: 30px;
		padding: 0.5em 1em;
		text-align: center;
		text-decoration: none;
		margin-bottom: 1em;
	}

	.link:hover {
		opacity: 0.8;
	}

	.augen-link {
		background: teal;
	}

	.diabetes-link {
		background: violet;
	}

	.herz-link {
		background: orange;
	}

	.knochen-link {
		background: blueviolet;
	}

	.ruecken-link {
		background: blue;
	}

    .wechseljahre-link {
		background: purple;
	}

    .mundgesundheit-link {
		background: red;
	}
`
