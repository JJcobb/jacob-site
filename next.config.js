/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },

  // * image optimization from external domains
  // images: {
  //   domains: ['cloudinary.com'],
  // },

  // * lint directories other than /pages, /components, and /lib
  // eslint: {
  //   dirs: ['pages', 'components', 'lib', ...],
  // },
}

module.exports = nextConfig
