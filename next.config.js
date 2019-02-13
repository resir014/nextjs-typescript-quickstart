const withTypescript = require('@zeit/next-typescript')

const nextConfig = {
  target: process.env.BUILD_TARGET || 'server'
}

module.exports = withTypescript(nextConfig)
