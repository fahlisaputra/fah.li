import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './lib/image-loader.ts',
        remotePatterns: [
            { hostname: 'localhost' },
            { hostname: 'fahli.dev' },
            { hostname: 'cdn.fahli.dev' },
        ],
        qualities: [10, 20, 50, 75, 85, 90, 100],
    },
}

export default nextConfig
