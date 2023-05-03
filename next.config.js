/** @type {import('next').NextConfig} */

//const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  reactStrictMode: true,
  //assetPrefix: "", // for static path
  trailingSlash: true, // for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
