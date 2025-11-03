/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // ⚙️ ключевой момент: только серверная сборка
  output: 'standalone',
  distDir: '.next',
  trailingSlash: false,

  // 🚫 полностью отключаем static export
  // и явно убираем API маршруты из генерации
  exportPathMap: async (defaultPathMap) => {
    Object.keys(defaultPathMap).forEach((key) => {
      if (key.startsWith('/api')) delete defaultPathMap[key];
    });
    return defaultPathMap;
  },
  // ⛔️ запрет любых попыток prerender API
  async redirects() {
    return [
      { source: '/pages/api/:path*', destination: '/api/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
