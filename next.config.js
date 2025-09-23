/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  trailingSlash: false,
  reactStrictMode: true,
  // Pin tracing root to this workspace to avoid Next.js picking a parent dir due to extra lockfiles
  outputFileTracingRoot: __dirname
}

module.exports = nextConfig