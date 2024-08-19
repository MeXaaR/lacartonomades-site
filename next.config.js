/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/lacartonomades-site",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;