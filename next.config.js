/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ecomapi.ilyosbekdev.uz'],
  },
}
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig;
