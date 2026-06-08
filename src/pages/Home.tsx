import HeroBanner from '@/components/hero/HeroBanner/HeroBanner'
import BulkLogistics from '@/components/logistics/BulkLogistics/BulkLogistics'
import { SERVICES, SITE } from '@/constants'
import { ArrowRightIcon, SERVICE_ICONS } from '@/icons'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <HeroBanner />

      <BulkLogistics />

      {/* <section className={`${styles.section} ${styles.sectionAlt}`} id="about">
        <div className="mx-auto max-w-7xl">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>About Us</p>
            <h2 className={styles.sectionTitle}>Driving Innovation in Chemistry</h2>
            <p className={styles.sectionDescription}>
              With decades of expertise, {SITE.name} partners with businesses worldwide
              to deliver reliable chemical solutions that meet the highest industry standards.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            <p className={styles.aboutText}>
              From research and development to large-scale production, our team combines
              scientific rigor with practical industry knowledge. We are committed to
              safety, sustainability, and excellence in every product we deliver.
            </p>
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>25+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>500+</div>
                <div className={styles.statLabel}>Global Clients</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>ISO</div>
                <div className={styles.statLabel}>Certified Quality</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className="mx-auto max-w-7xl">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Our Services</p>
            <h2 className={styles.sectionTitle}>Comprehensive Chemical Solutions</h2>
            <p className={styles.sectionDescription}>
              End-to-end services designed to support your research, manufacturing,
              and quality assurance needs.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[index]
              return (
                <article key={service.title} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <Icon />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="mx-auto max-w-7xl">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaText}>
              Reach out to our team at {SITE.email} or call {SITE.phone} to discuss
              your chemical requirements.
            </p>
            <a href={`mailto:${SITE.email}`} className={styles.ctaButton}>
              Email Us Today
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section> */}
    </>
  )
}
