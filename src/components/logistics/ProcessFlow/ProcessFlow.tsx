import type { LogisticsIconType } from '@/constants/logistics'
import { FlowArrowIcon, LogisticsIcon } from '@/icons/logistics'
import styles from './ProcessFlow.module.css'

type ProcessStep = {
  label: string
  icon: LogisticsIconType
}

type ProcessFlowProps = {
  steps: readonly ProcessStep[]
  variant?: 'default' | 'featured'
}

export default function ProcessFlow({ steps, variant = 'default' }: ProcessFlowProps) {
  const flowClass = `${styles.flow} ${variant === 'featured' ? styles.featured : ''}`

  return (
    <div className={flowClass}>
      {steps.flatMap((step, index) => {
        const nodes = [
          <div key={step.label} className={styles.step}>
            <div className={styles.iconWrap}>
              <LogisticsIcon type={step.icon} />
            </div>
            <span className={styles.label}>{step.label}</span>
          </div>,
        ]

        if (index < steps.length - 1) {
          nodes.push(
            <div key={`arrow-${step.label}`} className={styles.arrow} aria-hidden="true">
              <FlowArrowIcon />
            </div>,
          )
        }

        return nodes
      })}
    </div>
  )
}
