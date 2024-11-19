/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ignored: ["**/node_modules", "**/devscripts", "**/Application Data/**"],
    };

    // Optional: If isServer (builds for server-side) fails
    if (isServer) {
      config.externals = ["react", ...config.externals];
    }

    return config;
  },
  reactStrictMode: false,
};

export default nextConfig;
