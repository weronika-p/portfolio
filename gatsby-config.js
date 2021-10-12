/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: `Weronika P.'s portfolio`,
    description: 'Portfolio',
    copyright: 'This website is copyright 2021 Weronika P.',
    contact: 'weronika.pawlak1991@gmail.com'
  }
}
