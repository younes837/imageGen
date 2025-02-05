/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        perf_hooks: false,
        os: false,
        fs: false,
        path: false,
        pg: false,
      };
    }
    return config;
  },
};

export default nextConfig;
