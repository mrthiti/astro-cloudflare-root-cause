import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Prompt', 'system-ui'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config;
