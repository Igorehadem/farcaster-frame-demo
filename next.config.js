/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // 🚫 отключаем static export вообще
  // и говорим Next.js не трогать API routes
  target: 'server',
  outputFileTracing: true,
  trailingSlash: false,

  // 🧩 удаляем все /api/* маршруты из exportPathMap
  exportPathMap: async (defaultPathMap) => {
    Object.keys(defaultPathMap).forEach((key) => {
      if (key.startsWith('/api')) delete defaultPathMap[key];
    });
    return defaultPathMap;
  },
};

export default nextConfig;
