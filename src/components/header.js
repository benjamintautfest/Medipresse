import React from 'react'
import {Link} from 'gatsby'

export default function Header() {
    return(
        <header className="site-header">
            <h1>This is the header component</h1>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </header>
    )
}