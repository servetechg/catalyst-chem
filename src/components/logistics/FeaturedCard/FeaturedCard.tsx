import { FEATURED_CARD } from '@/constants/logistics'
import { LogisticsIcon } from '@/icons/logistics'
import ProcessFlow from '@/components/logistics/ProcessFlow/ProcessFlow'
import styles from './FeaturedCard.module.css'

export default function FeaturedCard() {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{FEATURED_CARD.title}</h3>
      </div>

      <div className={styles.imageWrap}>
        <img
          src={FEATURED_CARD.image}
          alt={FEATURED_CARD.title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <ProcessFlow steps={FEATURED_CARD.steps} variant="featured" />
      </div>

      <div className={styles.footer}>
        {FEATURED_CARD.features.map((feature) => (
          <div key={feature.label} className={styles.feature}>
            <LogisticsIcon
              type={feature.icon}
              className={styles.featureIcon}
              sizeContext="footer"
            />
            <span className={styles.featureLabel}>{feature.label}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
