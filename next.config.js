/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ['rickandmortyapi.com' , 'avatars.dicebear.com'],
    },
};

module.exports = nextConfig;
