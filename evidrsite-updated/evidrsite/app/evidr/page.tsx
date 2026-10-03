import { CompanyHero } from '@/components/company-hero'
import { ServiceCards } from '@/components/service-cards'
import { SocialLinks } from '@/components/social-links'
import { Eyebrow, Reveal, SectionIntro } from '@/components/ui'
import { companies } from '@/src/data/companies'

export default function EvidrPage() {
  const item = companies.evidr
  return (
    <div>
      <CompanyHero company="evidr" headline={<>Build the right product <em>before you build it.</em></>} deck="EVIDR turns uncertainty into a product direction you can explain, test, and move on. Start with evidence, not expensive assumptions." />
      <section id="work" className="section-shell detail-section" aria-labelledby="evidr-work-title">
        <SectionIntro eyebrow="The EVIDR method" title={<>Clarity, before <em className="text-[var(--cobalt)] not-italic">complexity.</em></>}>
          <p className="detail-grid-copy">Every product begins as a set of unknowns. We make those unknowns useful — mapping the signal, validating the opportunity, then framing the first product worth building.</p>
        </SectionIntro>
        <div className="detail-grid mt-20"><div><Eyebrow tone="cyan">From signal to proof</Eyebrow><h2 id="evidr-work-title" className="display mt-4">The work that earns a build.</h2></div><div><ServiceCards items={item.services ?? []} /></div></div>
      </section>
      <section className="section-shell section-pad pt-0"><Reveal className="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[.8fr_1.2fr] md:gap-16"><div><Eyebrow>Working principle</Eyebrow><h2 className="display mt-5 text-[clamp(38px,5vw,72px)] leading-[.95]">A smaller first step can create a <em className="text-[var(--cobalt)] not-italic">bigger signal.</em></h2></div><p className="max-w-xl self-end text-[15px] leading-[1.9] text-[var(--muted)]">We keep the first product focused enough to learn from and specific enough to matter. The result is not just an MVP — it is a clearer answer about what deserves to exist next.</p></Reveal></section>
      <SocialLinks company="evidr" />
    </div>
  )
}
