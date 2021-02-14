import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

export default function Header() {
    return(
        <HeaderStyled>
            <h1>This is the header component</h1>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/trombose">Artikel</Link>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header `
    background: hotpink;
    margin-top: 0;
        h1, a {
            color: white;
        }
        a:hover {
            color: purple;
        }
    padding: 1em;

`
