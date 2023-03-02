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
}

module.exports = nextConfig
