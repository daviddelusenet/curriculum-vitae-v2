module.exports = {
  siteMetadata: {
    title: 'Curriculum vitae v2',
    description: 'Curriculum vitae of David de Lusenet',
    author: 'David de Lusenet',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Curriculum Vitae V2',
        short_name: 'CV V2',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/App.tsx`),
      },
    },
  ],
}
