import { defineConfig } from "$fresh/server.ts"
import tailwindPlugin from '../mod.ts';

export default defineConfig({
  plugins: [tailwindPlugin()]
});
