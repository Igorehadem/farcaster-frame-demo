/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: 'standalone',

  // 🧩 полностью исключаем pages/api из сборки
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push(function ({ context, request }, callback) {
        if (request && request.startsWith('./pages/api')) {
          return callback(null, 'commonjs ' + request);
        }
        callback();
      });
    }
    return config;
  },

  // 💡 если вдруг кто-то попытается экспортировать — удаляем API-маршруты
  exportPathMap: async (defaultPathMap) => {
    for (const key of Object.keys(defaultPathMap)) {
      if (key.startsWith('/api')) delete defaultPathMap[key];
    }
    return defaultPathMap;
  },
};

export default nextConfig;
