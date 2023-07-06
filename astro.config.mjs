import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { includes, startsWith } from 'lodash-es'
import { readFileSync, writeFileSync } from 'fs-extra'
import prettify from 'html-prettify'

const removeTag = (target) => {
  const html = readFileSync(target, 'utf8')
  if (includes(target, 'head')) {
    const out = html
      .replace('<!DOCTYPE html>', '')
      .replace('<head>', '')
      .replace('</head>', '')
    return prettify(out)
  } else {
    const out = html.replace('<!DOCTYPE html>', '')
    return prettify(out)
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    {
      name: 'removeDoctype',
      hooks: {
        'astro:build:done': (options) => {
          // SSI用のhtmlを整形
          const paths = options.routes
            .filter(({ pathname }) => startsWith(pathname, '/ssi/'))
            .map((v) => `dist${v.pathname}/index.html`)
          try {
            paths.map((target) => {
              return writeFileSync(target, removeTag(target), 'utf8')
            })
          } catch (error) {
            console.log(error)
          }
        },
      },
    },
  ],
})
