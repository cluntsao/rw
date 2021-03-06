module.exports = {
  siteMetadata: {
    title: `Republic of Waterfowl`,
    description: `YOUR TOTAL RESOURCE FOR WATERFOWL HUNTING IN TEXAS`,
    author: `Ericsson Tsao`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: `about`,
        link: '/page-2'
      }
    ]
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rrw_round_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  pathPrefix: "/rw",
}
