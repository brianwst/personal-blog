module.exports = {
  siteMetadata: {
    title: 'Brian Wong blog ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ],
}
