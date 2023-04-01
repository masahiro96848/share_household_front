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
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // 1秒ごとにファイルをポーリングする
      aggregateTimeout: 200, // 変更があってから300ミリ秒待つ
    }

    return config
  },
}

module.exports = nextConfig
