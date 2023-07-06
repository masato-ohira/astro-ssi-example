import { ceil } from 'lodash-es'

const fontRatio = 0.625

export const fonts = {
  sans: `'Noto Sans JP', sans-serif`,
  serif: `'Shippori Mincho', serif`,
  enSans: `sans-serif`,
}

export const rem = (size: number) => {
  return `${ceil(size * 0.1 * fontRatio, 4)}rem`
}

export const fontSizes = {
  '3xs': rem(8),
  '2xs': rem(10),
  xs: rem(12),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  '1.5xl': rem(24),
  '2xl': rem(28),
  '3xl': rem(32),
  '4xl': rem(36),
  '5xl': rem(46),
  '6xl': rem(64),
}
