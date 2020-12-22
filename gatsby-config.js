module.exports = {
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-json',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-extract-image-colors',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'portfolio',
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/images/`,
            },
        },
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         name: 'portfolio',
        //         path: `${__dirname}/src/data/`,
        //     },
        // },

    ],
};
