import MarkdownIt from 'markdown-it'

const mdOptions: MarkdownIt.Options = {
  html: true,
  breaks: true,
  linkify: false,
  typographer: true,
}

export const md = new MarkdownIt(mdOptions)
