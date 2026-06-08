import { useEffect, useState } from 'react'
import Container from '@/components/ui/Container/Container'
import { CTA_LABEL, NAV_LINKS, SITE, SOCIAL_LINKS } from '@/constants'
import {
  ArrowRightIcon,
  CloseIcon,
  LinkedInIcon,
  LogoIcon,
  MenuIcon,
  WhatsAppIcon,
} from '@/icons'
import styles from './Header.module.css'

function getActiveHash() {
  return window.location.hash || '#home'
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(getActiveHash)

  useEffect(() => {
    const onHashChange = () => setActiveHash(getActiveHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white relative">
      <Container>
        <div className="flex items-center justify-between gap-3 py-3 lg:py-3.5">
          {/* Logo */}
          <a
            href="#home"
            className="flex min-w-0 shrink-0 items-center gap-2.5 no-underline sm:gap-3"
          >
            {/* <LogoIcon className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" /> */}
            <img src={SITE.logo} alt={SITE.name} width={120} height={120} />
            {/* <div className="min-w-0">
              <span className="block text-base font-bold leading-tight text-[#0043BD] sm:text-lg lg:text-xl">
                {SITE.name}
              </span>
              <p className="mt-0.5 hidden max-w-[13.75rem] text-[0.625rem] leading-snug text-gray-400 sm:block lg:max-w-[17.5rem] lg:text-[0.6875rem]">
                {SITE.tagline}
              </p>
            </div> */}
          </a>

          {/* Desktop navigation + actions */}
          <div className="hidden items-center gap-5 xl:flex xl:gap-6">
            <nav className="flex items-center gap-5 xl:gap-7" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${activeHash === link.href ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="ml-2 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={
                    social.type === 'linkedin'
                      ? 'flex h-7 w-7 items-center justify-center rounded bg-[#0A66C2] text-white transition-opacity hover:opacity-90'
                      : 'flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90'
                  }
                >
                  {social.type === 'linkedin' ? (
                    <LinkedInIcon className="h-4 w-4" />
                  ) : (
                    <WhatsAppIcon className="h-4 w-4" />
                  )}
                </a>
              ))}

              <a
                href="#contact"
                className="ml-1 inline-flex items-center gap-2 rounded-md bg-[#0043BD] px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#003599]"
              >
                {CTA_LABEL}
                <ArrowRightIcon className="h-4 w-4 stroke-2" />
              </a>
            </div>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#0043BD] px-3 py-2 text-xs font-semibold text-white no-underline transition-colors hover:bg-[#003599] sm:px-4 sm:text-sm"
            >
              <span className="hidden sm:inline">{CTA_LABEL}</span>
              <span className="sm:hidden">Quote</span>
              <ArrowRightIcon className="h-3.5 w-3.5 stroke-2 sm:h-4 sm:w-4" />
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[3.5625rem] z-40 bg-black/20 xl:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav
            className={`${styles.mobileMenu} absolute left-0 right-0 top-full z-50 border-b border-gray-200 bg-white py-4 shadow-lg xl:hidden`}
            aria-label="Mobile navigation"
          >
            <Container className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-3 text-base font-medium text-slate-800 no-underline transition-colors hover:bg-gray-50 ${
                    activeHash === link.href ? styles.mobileNavLinkActive : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
                <span className="text-sm text-gray-500">Follow us</span>
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    onClick={closeMenu}
                    className={
                      social.type === 'linkedin'
                        ? 'flex h-8 w-8 items-center justify-center rounded bg-[#0A66C2] text-white'
                        : 'flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white'
                    }
                  >
                    {social.type === 'linkedin' ? (
                      <LinkedInIcon className="h-4 w-4" />
                    ) : (
                      <WhatsAppIcon className="h-4 w-4" />
                    )}
                  </a>
                ))}
              </div>
            </Container>
          </nav>
        </>
      )}
    </header>
  )
}
