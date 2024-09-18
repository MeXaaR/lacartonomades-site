/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/lacartonomades-site",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
        NEXT_PUBLIC_APPSTORE_APP: process.env.NEXT_PUBLIC_APPSTORE_APP,
        NEXT_PUBLIC_PLAYSTORE_APP: process.env.NEXT_PUBLIC_PLAYSTORE_APP,
    }
};

module.exports = nextConfig;