import { Plugin } from "$fresh/server.ts"

import postcss from 'npm:postcss'
import tailwindcss from 'npm:tailwindcss'

const makecss = async () => (await postcss([tailwindcss]).process('@tailwind base; @tailwind components; @tailwind utilities;')).css

export default function pluginTailwind (): Plugin{
  return {
    name: 'tailwind',
    async renderAsync(ctx) {
      const cssText = makecss()
      return [{
        cssText,
      }]
    },
  }
}
