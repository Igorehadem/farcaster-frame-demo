/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages supports Edge runtime automatically
  output: 'standalone',
  experimental: {},
  reactStrictMode: true,
};

module.exports = nextConfig;
