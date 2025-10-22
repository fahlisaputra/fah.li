'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Sparkle = { id: number; dx: string; dy: string }

/**
 * AvatarWithEasterEgg
 * - Double-click to trigger a short sparkle burst around the avatar.
 * - No external libs, extremely lightweight.
 */
export function AvatarWithEasterEgg({
    src,
    alt,
    size = 96,
    className,
}: {
    src: string
    alt: string
    size?: number
    className?: string
}) {
    const [sparks, setSparks] = React.useState<Sparkle[]>([])
    const nextId = React.useRef(1)

    /** Create N sparkles with random vectors around the avatar */
    const trigger = React.useCallback(() => {
        const N = 10
        const items: Sparkle[] = Array.from({ length: N }).map(() => {
            // Random polar vector (radius 24–56px)
            const angle = Math.random() * Math.PI * 2
            const r = 24 + Math.random() * 32
            const dx = Math.cos(angle) * r
            const dy = Math.sin(angle) * r
            return { id: nextId.current++, dx: `${dx.toFixed(1)}px`, dy: `${dy.toFixed(1)}px` }
        })
        setSparks(items)
        // Cleanup after animation
        const t = setTimeout(() => setSparks([]), 750)
        return () => clearTimeout(t)
    }, [])

    return (
        <div
            className={cn('relative inline-block', className)}
            onDoubleClick={trigger}
            title="Double-click me ✨"
        >
            <Image
                src={src}
                width={size}
                height={size}
                alt={alt}
                className="border-border rounded-full border shadow-sm select-none"
                draggable={false}
                priority
            />

            {/* Sparkle particles */}
            <div className="pointer-events-none absolute inset-0">
                {sparks.map((s) => (
                    <span
                        key={s.id}
                        className="animate-sparkle absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 dark:bg-amber-300"
                        style={{ ['--dx' as never]: s.dx, ['--dy' as never]: s.dy }}
                    />
                ))}
            </div>
        </div>
    )
}
