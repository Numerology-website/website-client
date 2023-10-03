/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/than-so-hoc-tron-doi",
      destination: "/landing-pages/than-so-hoc-tron-doi.htm",
    },
  ],
  // images: {
  //   domains: ['images.unsplash.com'],
  // },
}

module.exports = nextConfig
