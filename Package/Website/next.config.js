/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsart',
        },
      ],
    },
  }

module.exports = nextConfig
