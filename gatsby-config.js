/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: '🐢 Medipresse',
      footer: 'Medipresse 2021'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `source`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`
  ],

}
