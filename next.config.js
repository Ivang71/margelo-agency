/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/margelo-agency",
    images: {
        unoptimized: true,
    },
  reactStrictMode: true,
}

module.exports = nextConfig
