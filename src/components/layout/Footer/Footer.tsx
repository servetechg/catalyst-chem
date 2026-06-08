import { COPYRIGHT, FOOTER_LINKS, NAV_LINKS, SITE } from '@/constants'
import Container from '@/components/ui/Container/Container'
import { EmailIcon, LocationIcon, PhoneIcon } from '@/icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <Container className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logoLink}>
              <img src={SITE.logo} alt={SITE.name} className={styles.logoImage} />
              <span className={styles.logoText}>{SITE.name}</span>
            </a>
            <p className={styles.description}>{SITE.description}</p>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li>
                <a href={`mailto:${SITE.email}`} className={styles.contactItem}>
                  <EmailIcon className={styles.contactIcon} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className={styles.contactItem}
                >
                  <PhoneIcon className={styles.contactIcon} />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className={styles.contactItem}>
                  <LocationIcon className={styles.contactIcon} />
                  {SITE.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{COPYRIGHT}</p>
          <div className={styles.bottomLinks}>
            {FOOTER_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
