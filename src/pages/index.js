import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Article from '../components/article'
import styled from 'styled-components'

export default function Home() {
	return (
		<div>
			<Layout>
				<Article headLine="Krankheiten A-Z: Bruxismus (Zähneknirschen)">
					<ParagraphStyled>
						<img src="https://www.medipresse.de/uploads/images/Bruxismus" />
						<p>
							Pressen, knirschen, reiben – wer mit den Zähnen
							knirscht, bekommt das in der Regel kaum mit. Meist
							bemerkt lediglich der Bettnachbar die nächtliche
							Kaumuskel­aktivität - durch die entstehenden
							Geräusche. Redensartlich beißen wir die Zähne
							zusammen, verbeißen uns in ein Problem oder sind
							zerknirscht. Und tatsächlich können Emotionen
							Auslöser für das Zähne­knirschen sein, das auch als
							Bruxismus beschrieben wird. Jeder Fünfte ist davon
							in Deutschland betroffen. Wir klären über das
							zermürbende Phänomen und Möglichkeiten der
							Behandlung auf. <br />
							Von Catharina Gerber 
							<Link to="/trombose"> mehr ...</Link>
						</p>
					</ParagraphStyled>
				</Article>
				<Article headLine="Neues aus der HNO-Praxis, Folge 11: Morbus Menière – Wenn starke Schwindelattacken zur Qual werden">
					<ParagraphStyled>
						<img src="https://www.medipresse.de/uploads/images/Banerjee_Morbus%20Meniere_XS.jpg" />
						<p>
							Hier steht jetzt der Text von dem Artikel, der nur
							als Komponente exisitiert und ich weiß nich was. Wie
							soll das denn allse immer weitergehen mit diesem
							ewigen Getippe und immer noch ein Wort und noch ein
							Wort. Ich weiß einfach nicht, was der ganze Scheiß
							eigentlich soll. Und das ist immer noch nicht genug,
							denn hier sollte nun mehr stehen. und hier gibts{' '}
							<Link to="/trombose">mehr</Link>
						</p>
					</ParagraphStyled>
				</Article>
				<Article headLine="Neues aus der HNO-Praxis, Folge 11: Morbus Menière – Wenn starke Schwindelattacken zur Qual werden">
					<ParagraphStyled>
						<img src="https://www.medipresse.de/uploads/images/Frieren_XS.jpg" />
						<p>
							Hier steht jetzt der Text von dem Artikel, der nur
							als Komponente exisitiert und ich weiß nich was. Wie
							soll das denn allse immer weitergehen mit diesem
							ewigen Getippe und immer noch ein Wort und noch ein
							Wort. Ich weiß einfach nicht, was der ganze Scheiß
							eigentlich soll. Und das ist immer noch nicht genug,
							denn hier sollte nun mehr stehen. und hier gibts{' '}
							<Link to="/trombose">mehr</Link>
						</p>
					</ParagraphStyled>
				</Article>
			</Layout>
		</div>
	)
}

const ParagraphStyled = styled.div`
	display: flex;
	background: #e1e4e9;
	border-radius: 20px;
	p {
		margin: 1em;
		width: 40%;
		@media (max-width: 1000px) {
			width: 100%;
		}
	}

	img {
		width: 60%;
		display: block;
		object-fit: cover;
		border-radius: 20px 0 0 20px;
	}

	@media (max-width: 1000px) {
		flex-direction: column;

		img {
			width: 100%;
			max-height: 300px;
			border-radius: 20px 20px 0 0;
		}

		p {
			width: 90%;
		}
	}
`
