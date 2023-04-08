import { DefaultTheme } from 'styled-components'

export type TColors = {
  primary50: string
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary600: string
  primary700: string
  primary800: string
  primary900: string

  green50: string
  green100: string
  green200: string
  green300: string
  green400: string
  green500: string
  green600: string
  green700: string
  green800: string
  green900: string

  yellow50: string
  yellow100: string
  yellow200: string
  yellow300: string
  yellow400: string
  yellow500: string
  yellow600: string
  yellow700: string
  yellow800: string
  yellow900: string

  red50: string
  red100: string
  red200: string
  red300: string
  red400: string
  red500: string
  red600: string
  red700: string
  red800: string
  red900: string

  blue50: string
  blue100: string
  blue200: string
  blue300: string
  blue400: string
  blue500: string
  blue600: string
  blue700: string
  blue800: string
  blue900: string

  black10: string
  black20: string
  black30: string
  black40: string
  black50: string
  black60: string
  black70: string
  black80: string
  black90: string
  black100: string
  black200: string
  black300: string
  black400: string
  black500: string
  black600: string
  black700: string
  black800: string
  black900: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: TColors

    spacing: {
      4: string
      6: string
      8: string
      12: string
      16: string
      24: string
      32: string
      48: string
    }

    borderRadius: string

    maxWidth: {
      main: string
    }

    border: {
      default: string
      error: string
      focus: string
    }
  }
}

export const COLORS: TColors = {
  primary50: '#f3eafc',
  primary100: '#dbbef5',
  primary200: '#c99ff0',
  primary300: '#b173ea',
  primary400: '#a158e5',
  primary500: '#8a2edf',
  primary600: '#7e2acb',
  primary700: '#62219e',
  primary800: '#4c197b',
  primary900: '#3a135e',

  green50: '#e9fbf0',
  green100: '#baf4d1',
  green200: '#99eebb',
  green300: '#6be69d',
  green400: '#4ee189',
  green500: '#22da6c',
  green600: '#1fc662',
  green700: '#189b4d',
  green800: '#13783b',
  green900: '#0e5c2d',

  yellow50: '#fef6e8',
  yellow100: '#fbe3b9',
  yellow200: '#f9d597',
  yellow300: '#f7c267',
  yellow400: '#f5b649',
  yellow500: '#f3a41c',
  yellow600: '#dd9619',
  yellow700: '#ad7414',
  yellow800: '#865a0f',
  yellow900: '#66450c',

  red50: '#feedee',
  red100: '#fcc6c9',
  red200: '#faaaaf',
  red300: '#f8848a',
  red400: '#f76c73',
  red500: '#f54750',
  red600: '#df4149',
  red700: '#ae3239',
  red800: '#87272c',
  red900: '#671e22',

  blue50: '#ebf5fd',
  blue100: '#c2def9',
  blue200: '#a5cff6',
  blue300: '#7cb9f2',
  blue400: '#62abef',
  blue500: '#3b96eb',
  blue600: '#3689d6',
  blue700: '#2a6ba7',
  blue800: '#205381',
  blue900: '#193f63',

  black10: '#fafafa',
  black20: '#f5f5f5',
  black30: '#ececec',
  black40: '#e0e0e0',
  black50: '#c3c3c3',
  black60: '#b5b5b5',
  black70: '#a9a9a9',
  black80: '#9a9a9a',
  black90: '#8c8c8c',
  black100: '#7d7d7d',
  black200: '#6f6f6f',
  black300: '#616161',
  black400: '#555555',
  black500: '#464646',
  black600: '#3a3a3a',
  black700: '#292929',
  black800: '#1b1b1b',
  black900: '#0f0f0f',
}

const THEME: DefaultTheme = {
  color: COLORS,

  spacing: {
    4: '0.4rem',
    6: '0.6rem',
    8: '0.8rem',
    12: '1.2rem',
    16: '1.6rem',
    24: '2.4rem',
    32: '3.2rem',
    48: '4.8rem',
  },

  borderRadius: '0.6rem',

  maxWidth: {
    main: '1200px',
  },

  border: {
    default: `1px solid ${COLORS.black700}`,
    error: `1px solid ${COLORS.red500}`,
    focus: `1px solid ${COLORS.blue500}`,
  },
}

export default THEME
