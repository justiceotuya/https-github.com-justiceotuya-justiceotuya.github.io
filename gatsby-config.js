module.exports = {
    plugins: [
       `gatsby-plugin-sharp`,
       `gatsby-transformer-sharp`,
       {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images/`,
        },
      },

      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      'gatsby-plugin-extract-image-colors'
    ]
}
