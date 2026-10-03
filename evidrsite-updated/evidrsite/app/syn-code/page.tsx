import { CompanyHero } from '@/components/company-hero'
import { ServiceCards } from '@/components/service-cards'
import { SocialLinks } from '@/components/social-links'
import { Eyebrow, Reveal, SectionIntro } from '@/components/ui'
import { companies } from '@/src/data/companies'

export default function SynCodePage() {
  const item = companies['syn-code']
  return (
    <div>
      <CompanyHero company="syn-code" headline={<>Engineering ideas into <em>digital products.</em></>} deck="Syn-Code turns validated direction into dependable software — from the first architecture decision to the moment the product meets its users." />
      <section id="work" className="section-shell detail-section" aria-labelledby="syn-code-work-title">
        <SectionIntro eyebrow="The Syn-Code stack" title={<>Built to move from <em className="text-[var(--cyan)] not-italic">system</em> to scale.</>}>
          <p className="detail-grid-copy">A product is more than a polished interface. It is the connected set of decisions underneath: architecture, data, experience, and a path to iteration.</p>
        </SectionIntro>
        <div className="detail-grid mt-20"><div><Eyebrow tone="cyan">Connected capability</Eyebrow><h2 id="syn-code-work-title" className="display mt-4">The modules behind momentum.</h2></div><div><ServiceCards items={item.capabilities ?? []} kind="capabilities" /></div></div>
      </section>
      <section className="section-shell section-pad pt-0"><Reveal className="grid gap-8 border-t border-[var(--line)] pt-10 md:grid-cols-[1.2fr_.8fr] md:gap-16"><p className="max-w-xl text-[15px] leading-[1.9] text-[var(--muted)]">Strong engineering is a form of product thinking. It preserves the intent of the idea while creating the reliability, speed, and flexibility needed for what comes after launch.</p><div className="md:justify-self-end"><Eyebrow>Operating principle</Eyebrow><h2 className="display mt-5 max-w-md text-[clamp(38px,5vw,72px)] leading-[.95]">Make the <em className="text-[var(--cyan)] not-italic">next version</em> easier.</h2></div></Reveal></section>
      <SocialLinks company="syn-code" />
    </div>
  )
}
