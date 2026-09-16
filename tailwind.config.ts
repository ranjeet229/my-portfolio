import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{js,ts,jsx,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-inter)', 'sans-serif'] } } }, plugins: [] } satisfies Config;
