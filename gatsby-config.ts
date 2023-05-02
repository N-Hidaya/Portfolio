
import type { GatsbyConfig, PluginRef } from "gatsby"
import { resolve } from 'path';

//import "dotenv/config"

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
    siteTitle: `Daya`,
    siteTitleAlt: `Daya's Portfolio`,
    siteHeadline: `Welcome to Daya projects`,
    siteUrl: `https://cara.lekoarts.de`,
    siteDescription: `Portfolio featuring colorful effects and several widgets`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@daya`,
  },
  trailingSlash: `never`,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GATSBY_APP_API_URL", "GATSBY_APP_API_KEY", "GATSBY_APP_ICON_URL"]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
