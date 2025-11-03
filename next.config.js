/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // 💡 Отключаем статический экспорт — это ключевая строка!
  outputFileTracing: true,
  trailingSlash: false,

  // 💡 Убираем API-роуты из экспорта
  exportPathMap: async function (defaultPathMap) {
    for (const key of Object.keys(defaultPathMap)) {
      if (key.startsWith('/api')) {
        delete defaultPathMap[key];
      }
    }
    return defaultPathMap;
  },
};

export default nextConfig;
