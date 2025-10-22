/**
 * Prettier is responsible for formatting only (not linting).
 * - Keep lines short horizontally via printWidth.
 * - Sort Tailwind classes automatically.
 * - Sort imports deterministically with @ianvs plugin.
 */
export default {
    // Make output consistent and modern JS-friendly
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    // Keep lines from getting too long horizontally
    printWidth: 100,
    // Wrap Markdown/MDX prose too (optional, feel free to set "preserve")
    proseWrap: 'always',

    plugins: ['prettier-plugin-tailwindcss'],

    /**
     * Import sorting groups:
     * - React/Next first, then Node builtins, then external packages,
     * - Then your alias imports (@/*), then relatives, then side effect imports.
     */
    importOrder: [
        // React/Next first
        '^react$',
        '^next(/.*)?$',
        // Node builtins (fs, path, etc.)
        '^(node:)?(assert|buffer|child_process|cluster|crypto|dgram|dns|domain|events|fs|http|https|net|os|path|punycode|querystring|readline|stream|string_decoder|timers|tls|tty|url|util|v8|vm|zlib)(/.*)?$',
        // Packages from node_modules
        '^@?\\w',
        // Absolute/alias modules (adjust to your baseUrl/paths)
        '^@/(.*)$',
        // Parent/relative imports
        '^\\.\\.(.*)$',
        '^\\./(.*)$',
        // Side-effect imports (e.g., styles)
        '^\\u0000',
    ],

    // Tailwind plugin doesn't need extra config here; it will sort classnames automatically.
}
