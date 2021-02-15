import React from 'react'
import styled from 'styled-components'

const Teaser = () => {
    return(
        <TeaserBox>
            <div>
                <img src="https://www.planet-wissen.de/gesellschaft/krankheiten/rheuma_und_arthrose/rheuma-arthritis-gelenk-108~_v-gseagaleriexl.jpg" />
            </div>
            <p>
                Die Selbstheilung von Gelenk- und Sportverletzungen fördern und Schmerzen lindern: 
                Das ist mit der Platelet-Rich Plasma-Therapie (PRP) möglich. Dabei werden aufbereitete 
                Blutplättchen aus den eigenen Venen in die betroffenen Stellen injiziert. 
                Dr. Frank Thormählen erklärt die innovative Behandlungsmethode:
            </p>
        </TeaserBox>
    )
}

export default Teaser

const TeaserBox = styled.div `
    display: flex;
    background: #e1e4e9;
    height: 270px;

    @media(max-width: 1150px) {
        flex-direction: column;
        height: 100%;

    }

        div {
            width: 70%;
            height: 100%;
            background: cornflowerblue;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }

        p {
            width: 30%;
            padding: 1em;
            line-height: 1.6;
            
        }

    @media(max-width: 1150px) {
        div, p {
            width: 100%;
        }

        

    }    
`
