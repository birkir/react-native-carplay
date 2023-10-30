const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  output: 'export',
  basePath: '/react-native-carplay',
  images: {
    unoptimized: true,
  }
})
