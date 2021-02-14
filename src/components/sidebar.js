import React from 'react'
import styled from 'styled-components/macro'
import Article from './article'
import {Link} from 'gatsby'
import SpecialLinks from './specialLinks'

const SideBar = () => {
    return(
        <SidebarStyled>
            <Article headLine="Das ist eine Sidebar">
                <p>und hier steht Sidbar-text. Ich weiß auch nicht do</p>
            </Article>

            <Article headLine="und noch eine">
                <p>
                    Ich hätte so gerne ma ein bisschen Text jetzt hier, es kann doch wohl
                    nicht angehen, dass das einfach nicht gehen will:
                </p>
            </Article>
            
            <SpecialLinks />

            <Article headLine="und eine dritte">
                <p>
                    Ich hätte so gerne ma ein bisschen Text jetzt hier, es kann doch wohl
                    nicht angehen, dass das einfach nicht <Link to="/trombose">gehen will</Link>
                </p>
            </Article>
        </SidebarStyled>
    )
}

export default SideBar

const SidebarStyled = styled.aside`
    padding: 1em;
    width: 400px;
    line-height: 1.6;

        h2 {
            color: hotpink;
        }
`
