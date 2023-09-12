# fresh_plugin_tailwind
Raw TailwindCSS on Fresh

- Demo: http://fresh-plugin-tailwind.deno.dev
- deno.land/x: https://deno.land/x/fresh_plugin_tailwind
- GitHub: https://github.com/nakasyou/fresh_plugin_tailwind
## What's this?
TailwindCSS was not previously available in Deno. Now that `npm:` import is supported, it can be used, but not with Deno Deploy. Therefore, Fresh uses Twind instead of TailwindCSS.
However, I was recently informed that `npm:` import is now available in Deno Deploy!
I took advantage of that and wrote code to use raw TailwindCSS with Fresh.
## How to use?
```diff typescript
// fresh.config.ts
import { defineConfig } from "$fresh/server.ts"
+ import tailwindPlugin from 'https://deno.land/x/fresh_plugin_tailwind/mod.ts'

export default defineConfig({
  plugins: [
+   tailwindPlugin()
  ]
})
```
And, create `tailwind.config.js` to project root.
```js:tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{js,jsx,ts,tsx}',
  ],
}
```
This is OK!!
## What's good?
TailwindCSS plugin will be available! (Not tested yet)

There must be many other good things to do! (The day I write this, I can't write any more because I have a test tomorrow...)
