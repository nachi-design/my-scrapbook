// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://nachi-design.github.io',
    base: 'my-scrapbook',
    // base: process.env.NODE_ENV === 'production' ? '/my-scrapbook/' : '/',
});
