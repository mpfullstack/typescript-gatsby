/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Gatsby Typescript",
    description: "A default repo to use gatsby and typescript",
    keywords: "",
    author: {
      name: "Marc Perez",
      url: "https://github.com/mpfullstack",
      email: "info@marcperez.cat",
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
