/** @type {import('next').NextConfig} */

const withExportImages = require("next-export-optimize-images");

const nextConfig = withExportImages({
  reactStrictMode: false,
  assetPrefix: ".", // for relative path
});

module.exports = nextConfig;
