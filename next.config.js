const withRoutes = require('nextjs-routes/config')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = withRoutes(nextConfig)
