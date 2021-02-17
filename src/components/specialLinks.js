import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'gatsby'

const SpecialLinks = () => {
	const specialLinks = [
		{
			name: 'Augen Spezial',
			style: 'link augen-link',
			link: '/contact',
			id: 1,
		},
		{
			name: 'Diabetes Spezial',
			style: 'link diabetes-link',
			link: '/trombose',
			id: 2,
		},
		{
			name: 'Herz Spezial',
			style: 'link herz-link',
			link: '/contact',
			id: 3,
		},
		{
			name: 'Knochen Spezial',
			style: 'link knochen-link',
			link: '/contact',
			id: 4,
		},
		{
			name: 'Erkältung Spezial',
			style: 'link erkältung-link',
			link: '/contact',
			id: 5,
		},
		{
			name: 'Rücken Spezial',
			style: 'link ruecken-link',
			link: '/contact',
			id: 6,
		},
		{
			name: 'Mundgesundheit',
			style: 'link mundgesundheit-link',
			link: '/contact',
			id: 7,
		},
		{
			name: 'Harnwegsinfekte',
			style: 'link harnwegsinfekte-link',
			link: '/contact',
			id: 8,
		},
	]
	return (
		<SpecialButtons>
			{specialLinks.map((specialLink) => (
				<Link
					key={specialLink.id}
					className={specialLink.style}
					to={specialLink.link}
				>
					{specialLink.name} 
				</Link>
			))}
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
		transition: all 0.3s;
	}

	.link:hover {
		opacity: 0.8;
		transform: scale(1.05);
	}

	.augen-link {
		background: #04639c;
	}

	.diabetes-link {
		background: #fa1e80;
	}

	.herz-link {
		background: #f6c42e;
	}

	.knochen-link {
		background: #fb1321;
	}

	.ruecken-link {
		background: blue;
	}

	.wechseljahre-link {
		background: #a43998;
	}

	.mundgesundheit-link {
		background: #fa4d20;
	}

	.harnwegsinfekte-link {
		background: #06adef;
	}

	.erkältung-link {
		background: teal;
	}
`
