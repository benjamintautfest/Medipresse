/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'Medipresse',
      footer: 'Medipresse 2021'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `source`,
        path: `${__dirname}/src/markdown`
      }
    },
  ],

}
