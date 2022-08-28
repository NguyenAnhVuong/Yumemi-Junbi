/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.yumemi.co.jp'],
  },
  env: {
    RESAS_API_KEY: process.env.RESAS_API_KEY,
  },
}

module.exports = nextConfig
