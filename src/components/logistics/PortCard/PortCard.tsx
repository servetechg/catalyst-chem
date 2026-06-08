import { SIDE_PORT_STEPS } from '@/constants/logistics'
import { LocationIcon } from '@/icons'
import ProcessFlow from '@/components/logistics/ProcessFlow/ProcessFlow'
import styles from './PortCard.module.css'

type PortCardProps = {
  location: string
  image: string
  footer: string
}

export default function PortCard({ location, image, footer }: PortCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <LocationIcon className={styles.pin} />
        <h3 className={styles.location}>{location}</h3>
      </div>

      <div className={styles.imageWrap}>
        <img src={image} alt={location} className={styles.image} loading="lazy" />
      </div>

      <div className={styles.body}>
        <ProcessFlow steps={SIDE_PORT_STEPS} />
        <p className={styles.footer}>{footer}</p>
      </div>
    </article>
  )
}
