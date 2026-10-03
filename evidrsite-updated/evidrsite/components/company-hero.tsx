'use client'

import { motion } from 'framer-motion'
import { ArrowLink, Eyebrow } from '@/components/ui'
import { CompanyLogo, EngineeringDiagram, ValidationDiagram } from '@/components/visual-system'
import { companies, type CompanyId } from '@/src/data/companies'

export function CompanyHero({ company, headline, deck }: { company: CompanyId; headline: React.ReactNode; deck: string }) {
  const item = companies[company]
  return (
    <section className="section-shell company-hero" aria-labelledby={`${company}-title`}>
      <motion.div initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .68, ease: [0.22, 1, .36, 1] }}>
        <CompanyLogo company={company} showWordmark size="large" />
        <div className="mt-9"><Eyebrow tone="cyan">{item.descriptor} / {item.role}</Eyebrow></div>
        <h1 id={`${company}-title`} className="display">{headline}</h1>
        <p className="company-hero-copy">{deck}</p>
        <div className="hero-actions"><ArrowLink href="#work" primary>Trace the system</ArrowLink><ArrowLink href="/">Back to partnership</ArrowLink></div>
      </motion.div>
      <motion.div className="company-hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .95, delay: .18, ease: [0.22, 1, .36, 1] }}>{company === 'evidr' ? <ValidationDiagram /> : <EngineeringDiagram />}</motion.div>
    </section>
  )
}
