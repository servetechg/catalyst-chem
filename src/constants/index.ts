
export const SITE = {
  name: 'Catalyst Chem',
  tagline:
    'Chemical Raw Materials for Paints, Coatings, Resins, Emulsions & Auxiliaries',
  description:
    'Catalyst Chem delivers high-quality chemical products and tailored solutions for manufacturing, research, and industrial applications.',
  email: 'info@catalystchem.com',
  phone: '+1 (555)  123-1234',
  address: '1200 Innovation Drive, Houston, TX 77002',
  logo: '/images/logo.png',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Events', href: '#events' },
  { label: 'Contact Us', href: '#contact' },
] as const

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/catalyst-chem',
    type: 'linkedin' as const,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/15552345678',
    type: 'whatsapp' as const,
  },
] as const

export const CTA_LABEL = 'Request a Quote'

export const SERVICES = [
  {
    title: 'Custom Synthesis',
    description:
      'Specialty chemical synthesis tailored to your specifications with rigorous quality control.',
  },
  {
    title: 'Catalyst Development',
    description:
      'Advanced catalyst design and optimization to improve process efficiency and yield.',
  },
  {
    title: 'Analytical Testing',
    description:
      'Comprehensive laboratory analysis and certification for regulatory compliance.',
  },
] as const

export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
] as const

export const COPYRIGHT = `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`
