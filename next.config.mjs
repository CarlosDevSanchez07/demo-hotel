/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "demo-hotel-delta.vercel.app",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
