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
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Resume",
        short_name: "resume",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#de2520",
        display: "standalone",
        icon: "src/images/svg/favicon.svg",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
