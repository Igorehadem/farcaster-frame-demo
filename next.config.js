/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // 👇 запрещаем static export API routes
  exportPathMap: async function (defaultPathMap) {
    // Удаляем все /api/* маршруты, чтобы Next не пытался их рендерить
    const filtered = Object.keys(defaultPathMap).reduce((acc, key) => {
      if (!key.startsWith('/api/')) acc[key] = defaultPathMap[key];
      return acc;
    }, {});
    return filtered;
  },

  // Дополнительно блокируем prerender ошибок
  generateBuildId: async () => 'build-' + Date.now(),
};

export default nextConfig;
