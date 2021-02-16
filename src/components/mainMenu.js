import React from 'react'
import {Link} from 'gatsby'

const MainMenu = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">Krankheiten A-Z</Link>
			<Link to="/contact">Gesund leben</Link>
			<Link to="/trombose">Experten-Sprechtstunde</Link>
			<Link to="/trombose">Mensch und Tier</Link>
			<Link to="/trombose">Videos</Link>
		</nav>
	)
}

export default MainMenu
