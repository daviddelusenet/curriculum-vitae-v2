module.exports = {
  siteMetadata: {
    title: 'CV of David de Lusenet',
    description: 'Curriculum vitae of David de Lusenet',
    author: 'David de Lusenet',
    url: 'https://cv.lusenet.com/',
    image: '/og-image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Curriculum vitae of David de Lusenet',
        short_name: 'CV of David de Lusenet',
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
