import { colors } from './mixins/colors'
import { fontSizes, fonts } from './mixins/fonts'
import { breakpoints } from './mixins/mq'
import { spaces } from './mixins/sizes'

export const theme = {
  colors,
  breakpoints,
  fonts,
  fontSizes,
  spaces,

  shadows: {
    sm: '0px 0px 4px 1px rgba(0,0,0, 0.08)',
    base: '0 0 6px 1px rgba(0,0,0, 0.08)',
    md: '0px 0px 8px 1px rgba(0,0,0, 0.08)',
    lg: '0px 0px 14px 2px rgba(0,0,0, 0.08)',
  },
}
