/** @type {import('next').NextConfig} */
const nextConfig = {
  // your config here
};
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "no-store" }
        ],
      },
    ];
  },
};

export default nextConfig;
