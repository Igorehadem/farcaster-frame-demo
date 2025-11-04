/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.igoreha.online' }],
        destination: 'https://igoreha.online/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
