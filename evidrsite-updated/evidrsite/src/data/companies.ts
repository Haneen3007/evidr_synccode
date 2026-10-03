export type CompanyId = 'evidr' | 'syn-code'

export type CompanyLink = {
  label: string
  href: string
  kind: 'social' | 'contact' | 'website'
}

export type CompanyData = {
  id: CompanyId
  name: string
  shortName: string
  descriptor: string
  role: string
  statement: string
  logoSrc: string
  logoAlt: string
  accent: string
  links: CompanyLink[]
  services?: Array<{ number: string; title: string; description: string; detail: string }>
  capabilities?: Array<{ number: string; title: string; description: string }>
}

export const companies: Record<CompanyId, CompanyData> = {
  evidr: {
    id: 'evidr',
    name: 'EVIDR',
    shortName: 'EVIDR',
    descriptor: 'Product intelligence',
    role: 'Discover. Validate. De-risk.',
    statement: 'Turn a promising idea into a decision you can stand behind.',
    logoSrc: '/evidr_synccode/assets/evidr-logo.png',
    logoAlt: 'EVIDR logo',
    accent: '#5D72FF',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/evidr.co', kind: 'social' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/evidr', kind: 'social' },
      { label: 'Facebook', href: 'https://www.facebook.com/evidr.co/', kind: 'social' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@evidr.co', kind: 'social' },
      { label: '01024957198', href: 'tel:01024957198', kind: 'contact' },
      { label: 'evidr-ai.com', href: 'https://www.evidr-ai.com', kind: 'website' },
    ],
    services: [
      { number: '01', title: 'Idea Scan', description: 'A clear read on the opportunity, the audience, and the unknowns.', detail: 'Signal mapping' },
      { number: '02', title: 'Validate', description: 'Evidence-led research and testing that turns assumptions into confidence.', detail: 'Decision support' },
      { number: '03', title: 'MVP', description: 'A focused first product built around the smallest meaningful proof.', detail: 'Launch direction' },
    ],
  },
  'syn-code': {
    id: 'syn-code',
    name: 'Syn-Code',
    shortName: 'SYN-CODE',
    descriptor: 'Product engineering',
    role: 'Architect. Engineer. Ship.',
    statement: 'Build the digital product that your signal deserves.',
    logoSrc: '/evidr_synccode/assets/syn-code-logo.jpg',
    logoAlt: 'Syn-Code logo',
    accent: '#45E4DC',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/share/1C53yGAEjj/', kind: 'social' },
      { label: 'Instagram', href: 'https://www.instagram.com/syncodexdevelopment?stkn=cWlrcG9wZmJmNzM2', kind: 'social' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/syn-code/', kind: 'social' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@syncodexdevelopment?_r=1&_t=ZS-9AEKpLWyv7m', kind: 'social' },
      { label: '+20 10 92855577', href: 'tel:+201092855577', kind: 'contact' },
      { label: 'syn-code.com', href: 'https://www.syn-code.com/', kind: 'website' },
    ],
    capabilities: [
      { number: '01', title: 'Software Development', description: 'Production-minded systems with a clean path from architecture to release.' },
      { number: '02', title: 'Web Applications', description: 'Fast, responsive experiences engineered around real user behavior.' },
      { number: '03', title: 'SaaS Products', description: 'The foundations, flows, and interfaces that make software feel inevitable.' },
      { number: '04', title: 'Custom Digital Solutions', description: 'Purpose-built digital tools for the edge cases that matter most.' },
      { number: '05', title: 'Frontend & Backend Engineering', description: 'One connected product team across interface, data, and infrastructure.' },
      { number: '06', title: 'Product Development', description: 'A continuous partnership from first build through meaningful iteration.' },
    ],
  },
}

export const processStages = [
  { label: 'Idea', sublabel: 'A signal worth exploring', owner: 'Shared starting point' },
  { label: 'Scan', sublabel: 'Read the opportunity', owner: 'EVIDR' },
  { label: 'Validate', sublabel: 'Make confidence visible', owner: 'EVIDR' },
  { label: 'Build', sublabel: 'Engineer the system', owner: 'Syn-Code' },
  { label: 'Launch', sublabel: 'Move with intent', owner: 'Together' },
]
