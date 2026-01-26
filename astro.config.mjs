import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
//import netlify from '@astrojs/netlify';

import cloudflare from '@astrojs/cloudflare';

import sentry from "@sentry/astro";


// Import the Vercel adapter
// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config

export default defineConfig({
  // output: 'server',
  // adapter: vercel(),
  integrations: [tailwind(), sentry()],

  adapter: cloudflare(),
});