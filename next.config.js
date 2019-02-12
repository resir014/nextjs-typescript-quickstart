const withTypescript = require('@zeit/next-typescript')

const nextConfig = {
  target: process.env.BUILD_TARGET || 'server'
}

console.log(nextConfig)

module.exports = withTypescript(nextConfig)
