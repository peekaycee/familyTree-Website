/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "**" },
    ],
  },

  webpack: (config) => {
    // Fix Windows file-lock issues
    config.watchOptions = { poll: 1000, aggregateTimeout: 300 };

    // Fix ESM parsing errors for framer-motion & other .mjs
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
