/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    ROOT: __dirname,
  },
  transpilePackages: ['@graphql-tools/load-files'],
  webpack(config, options) {
/*     config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    })

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    })
 */
    config.module.rules.push({
      /* test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader', */
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    })

    return config
  },
}

module.exports = nextConfig
