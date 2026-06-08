export type ContainerSize = 'sm' | 'md' | 'lg'

export const CONTAINER_WIDTHS = {
  sm: '60rem',
  md: '67.5rem',
  lg: '75rem',
} as const satisfies Record<ContainerSize, string>

export const DEFAULT_CONTAINER_SIZE: ContainerSize = 'lg'

export const BREAKPOINTS = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
} as const

export const SLIDE_GAP_REM = 0.75
