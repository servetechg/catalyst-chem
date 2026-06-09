export const LOGISTICS_SECTION = {
  title: 'Bulk Logistics & Terminal Network',
  subtitle: 'Strategic storage and distribution solutions through Egypt and Europe',
} as const

export const LOGISTICS_ICON_SIZE_CONTEXTS = ['default', 'featured', 'slider', 'footer'] as const

export type LogisticsIconSizeContext = (typeof LOGISTICS_ICON_SIZE_CONTEXTS)[number]

export const LOGISTICS_ICON_IMAGES = {
  ship: {
    src: '/images/logistics/icons/bulk-supply.png',
    size: { default: '3.15rem', featured: '3.5rem', slider: '1.625rem', footer: '1.25rem' },
  },
  tank: {
    src: '/images/logistics/icons/storage-tanks.png',
    size: { default: '2.9rem', featured: '2.75rem', slider: '1.625rem', footer: '1.25rem' },
  },
  iso: {
    src: '/images/logistics/icons/iso-tanks.png',
    size: { default: '2.9rem', featured: '2.75rem', slider: '1.625rem', footer: '1.25rem' },
  },
  ibc: {
    src: '/images/logistics/icons/ibcs.png',
    size: { default: '2.9rem', featured: '2.75rem', slider: '1.625rem', footer: '1.25rem' },
  },
  drums: {
    src: '/images/logistics/icons/drums.png',
    size: { default: '2.9rem', featured: '2.75rem', slider: '1.625rem', footer: '1.25rem' },
  },
  ibcsAndDrums: {
    src: '/images/logistics/icons/ibcs-and-drums.png',
    size: { default: '2.9rem', featured: '2.75rem', slider: '1.625rem', footer: '1.25rem' },
  },
} as const

export const LOGISTICS_SVG_ICON_SIZES = {
  default: '2.9rem',
  featured: '2.75rem',
  slider: '1.625rem',
  footer: '1.25rem',
} as const

export const LOGISTICS_PROCESS_FLOW_LAYOUT = {
  iconWrapHeight: { default: '3.75rem', featured: '4rem' },
  arrowSize: { default: '1.1rem', featured: '1.125rem' },
} as const

export function getLogisticsIconSize(
  type: LogisticsImageIconType,
  context: LogisticsIconSizeContext = 'default',
): string {
  return LOGISTICS_ICON_IMAGES[type].size[context]
}

export function getLogisticsSvgIconSize(
  context: LogisticsIconSizeContext = 'default',
): string {
  return LOGISTICS_SVG_ICON_SIZES[context]
}

export const SIDE_PORT_STEPS = [
  { label: 'Bulk vessel discharge', icon: 'ship' as const },
  { label: 'Storage tanks', icon: 'tank' as const },
  { label: 'ISO tanks IBCs & drums', icon: 'ibcsAndDrums' as const },
] as const

export const PORT_CARDS = {
  left: {
    location: 'Adabiya Port, Egypt',
    image: '/images/logistics/1.jpg',
    footer:
      'Efficient bulk handling with secure storage and flexible packaging solutions.',
  },
  right: {
    location: 'Rotterdam Port, Europe',
    image: '/images/logistics/2.jpg',
    footer:
      'European gateway with seamless logistics and reliable distribution across the region.',
  },
} as const

export const FEATURED_CARD = {
  title: 'Bulk vessel discharge to storage tanks',
  image: '/images/logistics/3.jpg',
  steps: [
    { label: 'Bulk supply', icon: 'ship' as const },
    { label: 'ISO tanks', icon: 'iso' as const },
    { label: 'IBCs', icon: 'ibc' as const },
    { label: 'Drums', icon: 'drums' as const },
  ],
  features: [
    { label: 'Safe Handling', icon: 'shield' as const },
    { label: 'Quality Assured', icon: 'award' as const },
    { label: 'On-time Delivery', icon: 'clock' as const },
  ],
} as const

export const LOGISTICS_SLIDES = [
  { id: 'bulk-vessel', label: 'Bulk Vessel Handling', icon: 'ship' as const },
  { id: 'storage-tank', label: 'Storage Tank Access', icon: 'tank' as const },
  { id: 'iso-tanks', label: 'ISO Tanks', icon: 'iso' as const },
  { id: 'ibc-drum', label: 'IBC & Drum Packing', icon: 'ibcsAndDrums' as const },
  { id: 'routes', label: 'Egypt & Europe Routes', icon: 'globe' as const },
] as const

export type LogisticsImageIconType = keyof typeof LOGISTICS_ICON_IMAGES

export type LogisticsIconType =
  | LogisticsImageIconType
  | 'shield'
  | 'award'
  | 'clock'
  | 'globe'

export function isLogisticsImageIcon(
  type: LogisticsIconType,
): type is LogisticsImageIconType {
  return type in LOGISTICS_ICON_IMAGES
}
