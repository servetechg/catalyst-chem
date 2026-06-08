import type { CSSProperties } from 'react'
import Button from '@/components/ui/Button/Button'
import Container from '@/components/ui/Container/Container'
import { HERO } from '@/constants/hero'
import { FlaskIcon } from '@/icons'
import styles from './HeroBanner.module.css'

export default function HeroBanner() {
  return (
    <section className={styles.hero} id="home">
      <div
        className={styles.background}
        style={{ '--hero-banner-image': `url(${HERO.bannerImage})` } as CSSProperties}
        role="img"
        aria-label="Global chemical logistics and supply chain"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowIcon}>
              <FlaskIcon />
            </span>
            <span>
              {HERO.eyebrow}{' '}
              <span className={styles.eyebrowHighlight}>{HERO.eyebrowHighlight}</span>
            </span>
          </p>

          <h1 className={styles.title}>{HERO.title}</h1>

          <p className={styles.description}>{HERO.description}</p>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="md"
              href={HERO.primaryCta.href}
              showArrow
            >
              {HERO.primaryCta.label}
            </Button>
            <Button
              variant="secondary"
              size="md"
              href={HERO.secondaryCta.href}
              showArrow
            >
              {HERO.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
