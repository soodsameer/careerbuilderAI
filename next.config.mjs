/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "randomuser.me",
          },
          {
            protocol: "https",
            hostname: "img.clerk.com",
          },
        ],
      },
    // Enable static exports for Vercel
    output: 'standalone',
    // Optimize production builds
    swcMinify: true,
    // Enable React strict mode
    reactStrictMode: true,
};

export default nextConfig;
