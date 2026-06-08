import type { SVGProps } from 'react'
import type { LogisticsIconType } from '@/constants/logistics'

type IconProps = SVGProps<SVGSVGElement>

const strokeIcon: IconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  'aria-hidden': true,
}

export function ShipLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 18h18M5 14l2-4h10l2 4M7 10V6h10v4M9 6V4h6v2"
      />
      <path strokeLinecap="round" d="M6 14h12" />
    </svg>
  )
}

export function TankLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <rect x="7" y="5" width="10" height="14" rx="5" strokeLinejoin="round" />
      <path strokeLinecap="round" d="M9 5V3h6v2M12 19v2" />
      <path strokeLinecap="round" d="M9 9h6M9 12h6" />
    </svg>
  )
}

export function IsoTankLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <rect x="3" y="8" width="18" height="8" rx="2" />
      <path strokeLinecap="round" d="M6 8V6h12v2M6 16v2h12v-2" />
      <path strokeLinecap="round" d="M9 11h6" />
    </svg>
  )
}

export function IbcLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <rect x="6" y="4" width="12" height="16" rx="1.5" />
      <path strokeLinecap="round" d="M6 8h12M6 12h12M6 16h12M9 4V2h6v2" />
    </svg>
  )
}

export function DrumLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <ellipse cx="12" cy="6" rx="5" ry="2" />
      <path strokeLinecap="round" d="M7 6v12c0 1.1 2.24 2 5 2s5-.9 5-2V6" />
      <ellipse cx="12" cy="18" rx="5" ry="2" />
      <path strokeLinecap="round" d="M7 10h10M7 14h10" />
    </svg>
  )
}

export function ShieldLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  )
}

export function AwardLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <circle cx="12" cy="9" r="4" />
      <path strokeLinecap="round" d="M8.5 13 7 21l5-2 5 2-1.5-8" />
    </svg>
  )
}

export function ClockLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  )
}

export function GlobeLogisticsIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9" />
    </svg>
  )
}

export function FlowArrowIcon(props: IconProps) {
  return (
    <svg {...strokeIcon} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-4-4m4 4-4 4" />
    </svg>
  )
}

const LOGISTICS_ICON_MAP = {
  ship: ShipLogisticsIcon,
  tank: TankLogisticsIcon,
  iso: IsoTankLogisticsIcon,
  ibc: IbcLogisticsIcon,
  drums: DrumLogisticsIcon,
  shield: ShieldLogisticsIcon,
  award: AwardLogisticsIcon,
  clock: ClockLogisticsIcon,
  globe: GlobeLogisticsIcon,
} as const

export function LogisticsIcon({
  type,
  className,
}: {
  type: LogisticsIconType
  className?: string
}) {
  const Icon = LOGISTICS_ICON_MAP[type]
  return <Icon className={className} />
}
