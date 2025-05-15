/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vanessa-psicologa-landing/' : '',
  trailingSlash: true,
};

module.exports = nextConfig; 