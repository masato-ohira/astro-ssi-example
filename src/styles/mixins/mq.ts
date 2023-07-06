import { get } from 'lodash-es'

type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1216px',
  '2xl': '1536px',
}

export const mq = (key: BreakPoint) => {
  return `@media screen and (min-width: ${get(breakpoints, key)})`
}
