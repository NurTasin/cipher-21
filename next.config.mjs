/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    outputFileTracingIgnores: ["./prisma/client/**/*"],
  },
};

export default nextConfig;
