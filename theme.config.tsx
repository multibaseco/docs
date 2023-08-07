import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
    logo: <Image src="/branding/white/wordmark.png" alt="Multibase" width={150} height={18} />,
    project: {
        link: 'https://github.com/multibaseco/js'
    },
    docsRepositoryBase: 'https://github.com/multibaseco/docs',
    darkMode: false,
    nextThemes: {
        forcedTheme: 'light',
    },
    primaryHue: {
        light: 351,
        dark: 330,
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Multibase'     
        }
    },
    head: (
        <>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />

            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </>
    ),
}

export default config
