/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.datocms-assets.com'],
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                destination: 'https://kanvas.dev/',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig