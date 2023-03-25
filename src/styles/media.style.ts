export type BreakpointsType = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export const breakpoints: BreakpointsType = {
  xs: 480,
  sm: 825,
  md: 992,
  lg: 1200,
  xl: 1400,
}

const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`

export const media = {
  custom: customMediaQuery,
  xs: customMediaQuery(breakpoints.xs),
  sm: customMediaQuery(breakpoints.sm),
  md: customMediaQuery(breakpoints.md),
  lg: customMediaQuery(breakpoints.lg),
  xl: customMediaQuery(breakpoints.xl),
}

export const containerQuery = (maxWidth: number) =>
  `@container (min-width: ${maxWidth}px)`
