import React from 'react'
import Header from './header'
import Footer from './footer'
import style from '../styles/index.css'
import styled from 'styled-components'
import SideBar from './sidebar'

const Layout = ({children}) => {
    return(
        <LayoutStyled>
            <Header />
                <div>
                    <main>{children}</main>
                    <SideBar/>
                </div>
            <Footer />
        </LayoutStyled>

    )
}

export default Layout

const LayoutStyled = styled.div `
    width: 90%;
    margin: 0 auto;
    background: white;
    margin-top: 1em; 
        main {
            padding: 1em;
            width: 90%;
        }
        div {
            display: flex;
        }
        SideBar {
            width: 10%;
        }
`
