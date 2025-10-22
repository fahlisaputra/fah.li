import { CDN_URL } from '@/lib/config'

export default function cloudflareImageLoader({
    src,
    width,
    quality,
    dpr,
}: {
    src: string
    width: number
    quality?: number
    dpr?: number
}) {
    const params = [
        `width=${width}`,
        `quality=${quality ?? 75}`,
        'format=auto',
        dpr ? `dpr=${dpr}` : undefined,
    ]
        .filter(Boolean)
        .join(',')

    // Ensure src starts with "/" for consistent joining
    const normalized = src.startsWith('/') ? src : `/${src}`

    return `${CDN_URL}/cdn-cgi/image/${params}${normalized}`
}
