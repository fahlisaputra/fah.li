'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * DynamicGreeting
 * - Shows a short greeting, then transitions to full name.
 * @param fullName - Full legal name to show second
 * @param shortName - Nickname or first name for initial greeting
 */
export function DynamicGreeting({ fullName, shortName }: { fullName: string; shortName: string }) {
    const [showFull, setShowFull] = React.useState(false)

    // Determine greeting based on local time
    const getGreeting = () => {
        const h = new Date().getHours()
        if (h >= 5 && h < 11) return 'Good morning'
        if (h >= 11 && h < 16) return 'Good afternoon'
        if (h >= 16 && h < 20) return 'Good evening'
        return 'Good night'
    }

    const greeting = getGreeting()

    // Switch text after 3.5s
    React.useEffect(() => {
        const timer = setTimeout(() => setShowFull(true), 3500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative flex h-[2.5rem] items-center justify-center">
            <AnimatePresence mode="wait">
                {!showFull ? (
                    <motion.h1
                        key="greet"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-2xl font-semibold"
                    >
                        Hi, {greeting.toLowerCase()}. I&apos;m{' '}
                        <span className="text-primary">{shortName}</span> 👋
                    </motion.h1>
                ) : (
                    <motion.h1
                        key="full"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-2xl font-semibold"
                    >
                        {fullName}
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    )
}
