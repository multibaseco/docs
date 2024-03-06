const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
    basePath: '/docs',
    async redirects() {
        return [
            {
                source: '/:path*',
                destination: '/docs/:path*',
                basePath: false,
                permanent: true,
                has: [
                    {
                        type: 'host',
                        value: 'docs.multibase.co'
                    }
                ]
            }
            // {
            //   source: '/',
            //   destination: '/docs',
            //   basePath: false,
            //   permanent: false
            // }
        ]
    }
})
