/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/than-so-hoc-tron-doi",
      destination: "/landing-pages/than-so-hoc-tron-doi.htm",
    },
    {
      source: "/danh-xung",
      destination: "/landing-pages/danh-xung.htm",
    },
    {
      source: "/ten-khai-sinh",
      destination: "/landing-pages/ten-khai-sinh.htm",
    },
  ],
}

module.exports = nextConfig
