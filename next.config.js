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
    {
      source: "/nghe-nghiep",
      destination: "/landing-pages/nghe-nghiep.htm",
    },
    {
      source: "/khoa-hoc-than-so-hoc",
      destination: "/landing-pages/khoa-hoc-than-so-hoc.htm",
    },
  ],
}

module.exports = nextConfig
