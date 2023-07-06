import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import { mapValues } from 'lodash-es'
extend([mixPlugin])

const createColor = (key: string) => {
  return {
    50: colord(key).lighten(0.7).toHex(),
    100: colord(key).lighten(0.4).toHex(),
    200: colord(key).lighten(0.3).toHex(),
    300: colord(key).lighten(0.2).toHex(),
    400: colord(key).lighten(0.1).toHex(),
    500: colord(key).toHex(),
    600: colord(key).darken(0.1).toHex(),
    700: colord(key).darken(0.2).toHex(),
    800: colord(key).darken(0.3).toHex(),
    900: colord(key).darken(0.4).toHex(),
  }
}

export const baseColors = {
  gray: '#718096',
  red: '#F56565',
  yellow: '#ECC94B',
  green: '#38A169',
  teal: '#4FD1C5',
  blue: '#4299E1',
  cyan: '#48BB78',
  purple: '#9F7AEA',
  pink: '#ED64A6',
  orange: '#ED8936',
}

export const colors = mapValues(baseColors, (value) => {
  return createColor(value)
})

export const rgba = (hex: string = '#000', opacity: number = 0.5) => {
  return colord(hex).alpha(opacity).toRgbString()
}

export const mix = (
  hex: string = '#000',
  hex2: string = '#fff',
  opacity: number = 0.5,
) => {
  return colord(hex2).mix(hex, opacity).toHex()
}
