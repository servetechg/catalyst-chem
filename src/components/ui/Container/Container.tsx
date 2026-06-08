import type { ElementType, ReactNode } from 'react'
import {
  DEFAULT_CONTAINER_SIZE,
  type ContainerSize,
} from '@/constants/layout'
import styles from './Container.module.css'

export type { ContainerSize }

type ContainerProps = {
  children: ReactNode
  size?: ContainerSize
  className?: string
  as?: ElementType
}

export default function Container({
  children,
  size = DEFAULT_CONTAINER_SIZE,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  const classes = [styles.container, styles[size], className].filter(Boolean).join(' ')

  return <Tag className={classes}>{children}</Tag>
}
