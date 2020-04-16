import { PluginOptions as TypegenPluginOptions } from 'gatsby-plugin-typegen/types';

type Plugin =
    | string
    | { resolve: string; options: object }
    | { resolve: `gatsby-plugin-typegen`; options: TypegenPluginOptions };

/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                emitSchema: {
                    'src/__generated__/gatsby-schema.graphql': true,
                },
                emitPluginDocuments: {
                    'src/__generated__/gatsby-plugin-documents.graphql': true,
                },
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `tech-job-hunt`,
                short_name: `job-hunt`,
                start_url: `/`,
                background_color: `#553c9a`,
                theme_color: `#553c9a`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
    ] as Plugin[],
};
/* eslint-enable @typescript-eslint/camelcase */
