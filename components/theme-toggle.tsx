'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMounted } from '@/hooks/use-mounted'

/**
 * ThemeToggle
 * Render icon AFTER mount to avoid SSR/client mismatch.
 */
export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const mounted = useMounted()

    const toggle = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

    // Until mounted, render a neutral button without icon/text that can’t mismatch.
    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                aria-label="Toggle theme"
                className="border-border bg-card/60 rounded-xl backdrop-blur"
            />
        )
    }

    const nextTitle = `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            title={nextTitle}
            className="border-border bg-card/60 rounded-xl backdrop-blur"
        >
            {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
    )
}
