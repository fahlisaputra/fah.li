'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * EmailPill
 * Pill-like button that copies an email address to clipboard.
 *
 * Behavior:
 * - Shows email by default with a clipboard icon on the left.
 * - On click, copies the email to clipboard and shows "Copied to clipboard"
 *   for `copyDuration` ms, then reverts back to the email text.
 *
 * Accessibility:
 * - Button element (keyboard focusable).
 * - aria-live="polite" region announces copy status to screen readers.
 *
 * @param email - Email address to display and copy
 * @param copyDuration - How long to show "Copied to clipboard" (ms). Default: 1600
 * @param className - Optional custom className
 * @param onCopy - Optional callback fired after successful copy
 */
export function EmailPill({
    email,
    copyDuration = 1600,
    className,
    onCopy,
}: {
    email: string
    copyDuration?: number
    className?: string
    onCopy?: () => void
}) {
    const [copied, setCopied] = React.useState(false)
    const timerRef = React.useRef<number | null>(null)

    /** Copy email to clipboard with a safe fallback */
    const copyToClipboard = React.useCallback(async () => {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(email)
            } else {
                // safer fallback: use a hidden textarea (no execCommand)
                const ta = document.createElement('textarea')
                ta.value = email
                ta.style.position = 'fixed'
                ta.style.opacity = '0'
                document.body.appendChild(ta)
                ta.focus()
                ta.select()
                // newer browsers: execCommand deprecated, but this ensures legacy works silently

                //eslint-disable-next-line @typescript-eslint/no-deprecated
                document.execCommand?.('copy')
                document.body.removeChild(ta)
            }

            setCopied(true)
            onCopy?.()
            if (timerRef.current) clearTimeout(timerRef.current)
            timerRef.current = window.setTimeout(() => setCopied(false), copyDuration)
        } catch (err) {
            console.error('Clipboard copy failed', err)
        }
    }, [email, copyDuration, onCopy])

    React.useEffect(() => {
        return () => {
            if (timerRef.current) window.clearTimeout(timerRef.current)
        }
    }, [])

    return (
        <div className="inline-flex items-center">
            {/* Visually interactive pill */}
            <button
                type="button"
                onClick={copyToClipboard}
                className={cn(
                    // Layout
                    'inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium',
                    // Surface (uses your CSS tokens)
                    'border-border bg-card/70 text-foreground/90 border shadow-sm backdrop-blur',
                    // Hover/active states
                    'hover:bg-accent transition active:scale-[0.99] motion-safe:duration-200',
                    // Focus visibility
                    'focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:outline-none',
                    className,
                )}
                aria-label={copied ? 'Copied to clipboard' : `Copy email ${email}`}
            >
                {/* Left icon switches to a check when copied */}
                {copied ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                )}

                {/* Text content */}
                <span className="whitespace-nowrap">{copied ? 'Copied to clipboard' : email}</span>
            </button>

            {/* A11y live region (announces the copy status without visual noise) */}
            <span className="sr-only" aria-live="polite">
                {copied ? 'Copied to clipboard' : `Email ${email}`}
            </span>
        </div>
    )
}
