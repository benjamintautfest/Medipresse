import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

export default function Header() {
    return(
        <HeaderStyled>
            <h1>This is the header component</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/trombose">Artikel</Link>
                </nav>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header `
    background: yellowgreen;
    margin-top: 0;

        h1, a {
            color: white;
        }

       h1 {
           padding: 1em;
       }

        a {
            color: black;
            padding: 0.5em 1em;
            transition: all 0.4s;
            text-decoration: none;
            margin-right: 1em;
        }

        a:hover {
            color: purple;
            transform: scale(1.1);
            background: purple;
            color: white;
        }
        nav {
            display: flex;
            background: white;
            padding-left: 1em;
        }
        @media(max-width: 800px){
        nav {
            display: none;
        }
    }
`
