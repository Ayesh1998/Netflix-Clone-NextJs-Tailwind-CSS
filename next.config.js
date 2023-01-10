/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'image.tmdb.org',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },
  images: {
    domains: ['image.tmdb.org','rb.gy'],
  },
}
