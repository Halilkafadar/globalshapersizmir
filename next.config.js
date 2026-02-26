/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'image.pollinations.ai',
      },
    ],
  },
  // Backend proxy configuration
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/backend/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
      ],
    }
  },
  async redirects() {
    return [
      { source: '/uyeler', destination: '/members', permanent: true },
      { source: '/projeler', destination: '/projects', permanent: true },
      { source: '/iletisim', destination: '/contact', permanent: true },
      { source: '/hakkimizda', destination: '/about', permanent: true },
      // Dynamic redirects
      { source: '/projeler/:slug', destination: '/projects/:slug', permanent: true },
      { source: '/uyeler/:slug', destination: '/members/:slug', permanent: true },
    ]
  },
}

module.exports = nextConfig
