import nextra from 'nextra'
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  distDir: 'docs/help',
  basePath: '/help',
  assetPrefix: '/help'

}

const isProd = process.env.NODE_ENV === 'production';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 
export default withNextra(nextConfig)