/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-github-btn"])
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = withTM()
