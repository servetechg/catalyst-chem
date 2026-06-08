import {
  LOGISTICS_SECTION,
  PORT_CARDS,
} from '@/constants/logistics'
import Container from '@/components/ui/Container/Container'
import FeaturedCard from '@/components/logistics/FeaturedCard/FeaturedCard'
import LogisticsSlider from '@/components/logistics/LogisticsSlider/LogisticsSlider'
import PortCard from '@/components/logistics/PortCard/PortCard'
import styles from './BulkLogistics.module.css'

export default function BulkLogistics() {
  return (
    <section className={styles.section} id="logistics">
      <Container>
        <header className={styles.header}>
          <h2 className={styles.title}>{LOGISTICS_SECTION.title}</h2>
          <p className={styles.subtitle}>{LOGISTICS_SECTION.subtitle}</p>
        </header>

        <div className={styles.cards}>
          <PortCard
            location={PORT_CARDS.left.location}
            image={PORT_CARDS.left.image}
            footer={PORT_CARDS.left.footer}
          />

          <div className={styles.featuredWrap}>
            <FeaturedCard />
          </div>

          <PortCard
            location={PORT_CARDS.right.location}
            image={PORT_CARDS.right.image}
            footer={PORT_CARDS.right.footer}
          />
        </div>

        <LogisticsSlider />
      </Container>
    </section>
  )
}
