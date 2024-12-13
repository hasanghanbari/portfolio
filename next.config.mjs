/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    domains: ['hasanghanbari.ir'],
    unoptimized: true,
  },
};

export default nextConfig;
