const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const port = process.env.PORT || 3000

module.exports = withNextra({
  // basePath: '/docs',
})
