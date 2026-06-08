export const LOGISTICS_SECTION = {
  title: 'Bulk Logistics & Terminal Network',
  subtitle: 'Strategic storage and distribution solutions through Egypt and Europe',
} as const

export const SIDE_PORT_STEPS = [
  { label: 'Bulk vessel discharge', icon: 'ship' as const },
  { label: 'Storage tanks', icon: 'tank' as const },
  { label: 'ISO tanks IBCs & drums', icon: 'drums' as const },
] as const

export const PORT_CARDS = {
  left: {
    location: 'Adabiya Port, Egypt',
    image:
      '/public/images/logistics/1.jpg',
    footer:
      'Efficient bulk handling with secure storage and flexible packaging solutions.',
  },
  right: {
    location: 'Rotterdam Port, Europe',
    image:
      '/public/images/logistics/2.jpg',
    footer:
      'European gateway with seamless logistics and reliable distribution across the region.',
  },
} as const

export const FEATURED_CARD = {
  title: 'Bulk vessel discharge to storage tanks',
  image:
    '/public/images/logistics/3.jpg',
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
  { id: '1', label: 'Bulk Vessel Handling', icon: 'ship' as const },
  { id: '2', label: 'Storage Tank Access', icon: 'tank' as const },
  { id: '3', label: 'ISO Tanks', icon: 'iso' as const },
  { id: '4', label: 'IBC & Drum Packing', icon: 'drums' as const },
  { id: '5', label: 'Egypt & Europe Routes', icon: 'globe' as const },
  { id: '6', label: 'Bulk Vessel Handling', icon: 'ship' as const },
  { id: '7', label: 'Storage Tank Access', icon: 'tank' as const },
  { id: '8', label: 'ISO Tanks', icon: 'iso' as const },
  { id: '9', label: 'IBC & Drum Packing', icon: 'drums' as const },
  { id: '10', label: 'Egypt & Europe Routes', icon: 'globe' as const },
] as const

export type LogisticsIconType =
  | 'ship'
  | 'tank'
  | 'iso'
  | 'ibc'
  | 'drums'
  | 'shield'
  | 'award'
  | 'clock'
  | 'globe'
