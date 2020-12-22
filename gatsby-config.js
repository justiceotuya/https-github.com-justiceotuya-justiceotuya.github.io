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
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-125533843-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
            },
        },

    ],
};
