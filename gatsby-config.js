module.exports = {
    siteMetadata: {
      title: 'Curriculum vitae v2',
      description: '',
      author: 'David de Lusenet',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
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
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // 'gatsby-plugin-offline',
    ],
  }
  