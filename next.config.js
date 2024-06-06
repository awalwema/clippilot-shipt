/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH.replace(/\/+$/, ""),
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH.replace(/\/+$/, ""),
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
};

module.exports = nextConfig;
