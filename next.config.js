/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    ROOT: __dirname,
  },
  transpilePackages: ['@graphql-tools/load-files'],
}

module.exports = nextConfig
