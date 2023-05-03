/** @type {import('next').NextConfig} */

const withExportImages = require("next-export-optimize-images");

const nextConfig = withExportImages({
  reactStrictMode: false,
  //assetPrefix: ".", // for relative path
  trailingSlash: true, // for static export
});

module.exports = nextConfig;
