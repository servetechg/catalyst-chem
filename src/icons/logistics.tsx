import type { ImgHTMLAttributes, SVGProps } from 'react'
import {
  LOGISTICS_ICON_IMAGES,
  getLogisticsIconSize,
  getLogisticsSvgIconSize,
  isLogisticsImageIcon,
  type LogisticsIconSizeContext,
  type LogisticsIconType,
} from '@/constants/logistics'

type IconProps = SVGProps<SVGSVGElement>

const strokeIcon: IconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  'aria-hidden': true,
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

const LOGISTICS_SVG_ICON_MAP = {
  shield: ShieldLogisticsIcon,
  award: AwardLogisticsIcon,
  clock: ClockLogisticsIcon,
  globe: GlobeLogisticsIcon,
} as const

type LogisticsIconProps = {
  type: LogisticsIconType
  className?: string
  imgClassName?: string
  sizeContext?: LogisticsIconSizeContext
  size?: string
} & Pick<ImgHTMLAttributes<HTMLImageElement>, 'alt'>

export function LogisticsIcon({
  type,
  className,
  imgClassName,
  sizeContext = 'default',
  size,
  alt = '',
}: LogisticsIconProps) {
  if (isLogisticsImageIcon(type)) {
    const iconSize = size ?? getLogisticsIconSize(type, sizeContext)

    return (
      <img
        src={LOGISTICS_ICON_IMAGES[type].src}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        className={imgClassName ?? className}
        style={{ width: iconSize, height: iconSize }}
        loading="lazy"
        decoding="async"
      />
    )
  }

  const Icon = LOGISTICS_SVG_ICON_MAP[type]
  const iconSize = size ?? getLogisticsSvgIconSize(sizeContext)

  return <Icon className={className} style={{ width: iconSize, height: iconSize }} />
}
