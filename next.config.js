/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-github-btn"])
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
}

module.exports = withTM(nextConfig)
