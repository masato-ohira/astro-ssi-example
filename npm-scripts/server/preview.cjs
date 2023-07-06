const browser = require('browser-sync')
const ssi = require('connect-ssi')
const distDir = './dist'

browser({
  server: {
    baseDir: distDir,
    middleware: [
      ssi({
        baseDir: distDir,
        ext: '.html',
      }),
    ],
  },
  startPath: '/',
  open: true,
  directory: true,
  hostname: 'localhost',
  port: 8080,
})
