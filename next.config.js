/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/movies/:id",
        destination: "/films/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
