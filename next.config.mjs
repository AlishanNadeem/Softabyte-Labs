/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.softabytelabs.com",
          },
        ],
        destination: "https://softabytelabs.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
