/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three", "@react-three/drei", "@react-three/fiber"],
  reactStrictMode: true,
  experimental: {
    turbo: {
      enabled: true, // Активируем Turbopack правильно
    },
  },
};

export default nextConfig;
