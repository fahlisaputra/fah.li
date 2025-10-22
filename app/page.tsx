import BlurFade from '@/components/ui/blur-fade'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { Meteors } from '@/components/ui/shadcn-io/meteors'
import { AvatarWithEasterEgg } from '@/components/avatar-easter'
import Status from '@/components/status'
import { DynamicGreeting } from '@/components/dynamic-greeting'
import { EmailPill } from '@/components/email-pill'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://fah.li'),
    title: {
        default: siteConfig.name,
        template: '%s | Muhammad Fahli Saputra',
    },
    description: siteConfig.mainDescription,
    keywords: [
        'Fahli Saputra',
        'System Analyst',
        'Software Engineer',
        'Fullstack Developer',
        'Portfolio',
        'fah.li',
    ],
    authors: [{ name: 'Muhammad Fahli Saputra', url: 'https://fahli.dev' }],
    creator: 'Fahli Saputra',
    publisher: 'Fahli Saputra',
    openGraph: {
        type: 'website',
        url: 'https://fah.li',
        title: 'Fahli Saputra — System Analyst & Software Engineer',
        description: siteConfig.mainDescription,
        siteName: 'Fahli Saputra',
        images: [
            {
                url: '/og_image.png',
                width: 1200,
                height: 630,
                alt: 'Fahli Saputra — System Analyst & Software Engineer',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fahli Saputra — System Analyst & Software Engineer',
        description: siteConfig.mainDescription,
        creator: '@fahlisptr',
        images: ['/og_image.png'],
    },
    alternates: {
        canonical: 'https://fah.li',
    },
    icons: {
        icon: [{ url: '/favicon.ico' }],
    },
}
export default function Home() {
    return (
        <main className="from-background to-muted/40 relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b px-4">
            <div>
                <Meteors number={20} />
            </div>
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <BlurFade inView>
                <AvatarWithEasterEgg src="/photos/fahli-grayscale.webp" alt="Fahli avatar" />
            </BlurFade>
            <BlurFade inView delay={0.1}>
                <DynamicGreeting fullName={siteConfig.name} shortName={siteConfig.shortName} />
            </BlurFade>
            <BlurFade inView delay={0.2}>
                <p className="text-muted-foreground mt-1 text-sm">{siteConfig.mainDescription}</p>
            </BlurFade>
            <BlurFade inView delay={0.3}>
                <EmailPill email="hi@fah.li" className="mt-4 px-3 py-1.5 text-sm" />
            </BlurFade>
            <BlurFade inView delay={0.4}>
                <div className={'mt-4 flex gap-2'}>
                    <Status status="Available for hire" />
                </div>
            </BlurFade>

            <div className="text-muted-foreground mt-6 flex gap-4">
                {siteConfig.socialLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                        <BlurFade key={item.href} inView delay={idx * 0.1}>
                            <Link
                                href={item.href}
                                target="_blank"
                                className="hover:text-foreground"
                                title={item.label}
                            >
                                <Icon className="h-5 w-5" />
                            </Link>
                        </BlurFade>
                    )
                })}
            </div>

            {/* --- Link Buttons --- */}
            <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
                {siteConfig.mainLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                        <BlurFade key={item.href} inView delay={idx * 0.1}>
                            <Link
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border-border bg-card hover:bg-accent flex items-center justify-between gap-2 rounded-xl border px-4 py-3 font-medium shadow-sm backdrop-blur transition"
                            >
                                <Icon className="h-4 w-4" />
                                <span className="w-full text-center">{item.label}</span>
                            </Link>
                        </BlurFade>
                    )
                })}
            </div>

            <BlurFade inView delay={0.3}>
                <p className="text-muted-foreground mt-6 text-xs">{siteConfig.footer}</p>
            </BlurFade>
        </main>
    )
}
