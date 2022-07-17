/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakeimg.pl', 'www.cnte.org.br', 'www.ifpb.edu.br'],
  },
}

module.exports = nextConfig
