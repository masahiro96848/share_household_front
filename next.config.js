/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        BASE_API_URL: process.env.BASE_API_URL,
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // styledComponentsの有効化
        styledComponents: true,
    },
}

module.exports = nextConfig
