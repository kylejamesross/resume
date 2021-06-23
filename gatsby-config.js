module.exports = {
  siteMetadata: {
    title: `Kyle Ross`,
    description: `Resume showing work history, skills, and projects`,
    author: `Kyle Ross`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Kyle - Resume`,
        short_name: `resume`,
        start_url: `/`,
        background_color: `#de2520`,
        theme_color: `#de2520`,
        display: `minimal-ui`,
        icon: `src/images/svg/favicon.svg`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-optimize-svgs`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
