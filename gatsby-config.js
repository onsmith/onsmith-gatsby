module.exports = {
  // Site metadata for reusing common pieces of data across the site
  // See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata
  siteMetadata: {
    url: 'https://www.onsmith.com',
  },

  // Gatsby plugins
  // See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#plugins
  plugins: [
    // <head> tag management
    // See: https://github.com/nfl/react-helmet
    'gatsby-plugin-react-helmet',

    // Image assets
    'gatsby-plugin-image', // React <StaticImage> component
    'gatsby-transformer-sharp', // Dynamic image resizing and cropping
    'gatsby-plugin-sharp', // Sharp image processing library
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    // SASS/SCSS
    'gatsby-plugin-sass',

    // Imports relative to root
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: `${__dirname}/src/components`,
        hooks: `${__dirname}/src/hooks`,
        pages: `${__dirname}/src/pages`,
        styles: `${__dirname}/src/styles`,
      },
    },

    // PWA manifest file
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'onsmith.com',
        short_name: 'onsmith',
        start_url: '/',
        background_color: '#1a2e3a',
        theme_color: '#1a2e3a',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',

    // Google Analytics
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-120544595-1', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
          // Defaults to https://www.googletagmanager.com
          // origin: 'YOUR_SELF_HOSTED_ORIGIN',
        },
      },
    },
  ],
};
