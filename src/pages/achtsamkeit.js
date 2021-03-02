/* import React from 'react'
import Layout from '../components/layoutCont'

const Achtsamkeit = () => {

    const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							excerpt
							link
							banner {
								relativePath
								
							}	
						}
						html
					}
				}
			}
		}
	`)
    return(
        <Layout>
            {data.allMarkdownRemark.edges.map}
            <article dangerouslySetInnerHTML={{__html: edge.node.html }}>

            </article>
        </Layout>
    )
} */