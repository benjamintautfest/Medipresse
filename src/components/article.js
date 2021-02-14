import React from 'react'

const Article = ({children, headLine}) => {
    return(
        <article>
            <h2 className="article__header">{headLine}</h2>
            {children}
            <hr />
        </article>
    )
}

export default Article