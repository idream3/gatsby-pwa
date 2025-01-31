import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby PWA`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~/src": "src",
          "~/shared": "src/shared",
          "~/features": "src/features",
          "~/pages": "src/pages",
        },
        extensions: []
      }
    },
    "gatsby-plugin-styled-components", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        "icon": "src/images/icon.png"
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/404`, `/*`, `/docs`, `/about`, `/login`, `/scan`],
        workboxConfig: {
          globDirectory: "public/",
          globPatterns: [
            "**/*.{html,js,json,png,jpg,webmanifest,woff,woff2,ttf,eot,css,mjs}",
          ],
        },
      },
    }]
};

export default config;
