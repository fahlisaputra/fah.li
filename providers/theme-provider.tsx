'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * ThemeProvider
 * Wraps the app with next-themes and toggles data-theme on <html>.
 *
 * @param children - React node tree
 * @param defaultTheme - Initial theme ('system' | 'light' | 'dark')
 */
export function ThemeProvider({
    children,
    defaultTheme = 'system',
}: {
    children: React.ReactNode
    defaultTheme?: 'system' | 'light' | 'dark'
}) {
    return (
        <NextThemesProvider
            /** Use a data attribute so CSS vars can swap per theme */
            attribute="data-theme"
            /** Apply to <html> for simpler theming */
            defaultTheme={defaultTheme}
            enableSystem
            /** Avoid janky transitions on first paint */
            disableTransitionOnChange
        >
            {children}
        </NextThemesProvider>
    )
}
