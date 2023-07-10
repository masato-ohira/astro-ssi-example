import { startsWith } from 'lodash-es'
import { readFileSync, writeFileSync } from 'fs-extra'
import prettify from 'html-prettify'

export const removeDoctype = (options) => {
  const targets = options.routes
    .filter(({ pathname }) => startsWith(pathname, '/ssi/'))
    .map((v) => `dist${v.pathname}/index.html`)
  try {
    targets.map((tgt) => {
      const html = readFileSync(tgt, 'utf8')
        .replace('<!DOCTYPE html>', '')
        .replace('<head>', '')
        .replace('</head>', '')

      return writeFileSync(tgt, prettify(html), 'utf8')
    })
  } catch (error) {
    console.log(error)
  }
}
