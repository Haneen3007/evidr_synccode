import { ArrowLink, Eyebrow, Reveal } from '@/components/ui'
import { CompanyCard } from '@/components/company-card'
import { PartnershipHero } from '@/components/partnership-hero'
import { ProcessSection } from '@/components/process-section'

export default function HomePage() {
  return (
    <div>
      <PartnershipHero />
      <section id="partnership" className="section-shell section-pad" aria-label="Partnership companies">
        <div className="cards-grid">
          <Reveal><CompanyCard company="evidr" /></Reveal>
          <Reveal delay={.1}><CompanyCard company="syn-code" /></Reveal>
        </div>
      </section>
      <ProcessSection />
      <section className="section-shell section-pad pt-0" aria-labelledby="home-cta-title">
        <Reveal className="relative overflow-hidden border border-[var(--line)] bg-[linear-gradient(120deg,rgba(93,114,255,.12),rgba(69,228,220,.05),transparent)] p-8 sm:p-12 lg:p-16">
          <div className="absolute right-8 top-8 font-mono text-[10px] tracking-[.16em] text-[var(--muted)]">/ READY WHEN YOU ARE</div>
          <Eyebrow tone="cyan">A better handoff</Eyebrow>
          <h2 id="home-cta-title" className="display mt-5 max-w-3xl text-[clamp(42px,6vw,82px)] leading-[.95]">Make the next move with <em className="not-italic text-[var(--cyan)]">evidence.</em></h2>
          <div className="mt-8"><ArrowLink href="/evidr" primary>Start with EVIDR</ArrowLink></div>
        </Reveal>
      </section>
    </div>
  )
}
