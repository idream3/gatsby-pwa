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
    "gatsby-plugin-styled-components", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        lang: "en",
        name: "Flicket Scanner",
        short_name: "Flicket",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        orientation: "natural",
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/docs/`, `/about/`],
        workboxConfig: {
          globDirectory: "public/",
          globPatterns: [
            "**/*.{html,js,json,png,jpg,webmanifest,woff,woff2,ttf,eot,css,mjs}",
          ],
          swDest: "public/sw.js",
        },
      },
    }]
};

export default config;
