import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
    return(
        <FooterStyled>
            <p>&copy; 2021 this is the footer component</p>
        </FooterStyled>
    )
}

export default Footer

const FooterStyled = styled.footer`
    background: yellowgreen;
    padding: 1em;
    text-align: center;
    color: white;
`
