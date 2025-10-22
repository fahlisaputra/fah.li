import { Globe, Mail, Medal, Calendar, FolderKanban } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa6'

/**
 * Base CDN URL (fallback to production CDN if not provided)
 */
export const CDN_URL = process.env.CDN_URL || 'https://cdn.fahli.dev'

/**
 * Global site configuration.
 * Contains personal info and external links for gateway display.
 */
export const siteConfig = {
    name: 'Muhammad Fahli Saputra',
    shortName: 'Fahli',
    mainDescription: 'System Analyst & Software Engineer',
    email: 'hi@fah.li',

    /**
     * Primary links displayed as buttons in the main section.
     */
    mainLinks: [
        {
            icon: Globe,
            label: 'Personal Website',
            href: 'https://fahli.dev',
        },
        {
            icon: FolderKanban,
            label: 'Project Showcase',
            href: 'https://fahli.dev/projects',
        },
        {
            icon: Medal,
            label: 'Achievements',
            href: 'https://fahli.dev/achievements',
        },
        {
            icon: Calendar,
            label: 'Book a Meeting',
            href: 'https://fahli.dev/contact',
        },
    ],

    /**
     * Social or contact links displayed as icons at the bottom.
     */
    socialLinks: [
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:hi@fah.li',
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            href: 'https://github.com/fahlisaputra',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/fahlisaputra',
        },
        {
            icon: FaInstagram,
            label: 'Instagram',
            href: 'https://instagram.com/faahli',
        },
        {
            icon: FaYoutube,
            label: 'YouTube',
            href: 'https://youtube.com/@fahli',
        },
        {
            icon: FaTiktok,
            label: 'TikTok',
            href: 'https://tiktok.com/@fahlisaputra',
        },
    ],

    footer: '© ' + new Date().getFullYear() + ' Fahli Saputra',
} as const

export type SiteConfig = typeof siteConfig
