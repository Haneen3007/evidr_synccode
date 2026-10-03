'use client'

import { AtSign, ExternalLink, Facebook, Globe2, Instagram, Linkedin, Music2, Phone } from 'lucide-react'
import { companies, type CompanyId } from '@/src/data/companies'
import { Eyebrow } from '@/components/ui'

const icons = { Instagram, LinkedIn: Linkedin, Facebook, TikTok: Music2, Globe: Globe2, Phone, Website: Globe2 }

function iconFor(label: string) {
  if (label.includes('@') || label.includes('.com')) return Globe2
  if (/^\+|^01/.test(label)) return Phone
  return icons[label as keyof typeof icons] ?? AtSign
}

export function SocialLinks({ company }: { company: CompanyId }) {
  const item = companies[company]
  return (
    <section className="social-section section-shell" aria-labelledby={`${company}-connect-title`}>
      <div className="social-panel">
        <div><Eyebrow>Open channel</Eyebrow><h2 id={`${company}-connect-title`} className="display">Keep the <em className="text-[var(--cyan)] not-italic">conversation</em> moving.</h2></div>
        <div className="social-links">{item.links.map((link) => { const Icon = iconFor(link.label); const external = link.href.startsWith('http'); return <a className="social-link" href={link.href} key={link.label} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={`${item.name} ${link.label}`}><span><Icon size={16} strokeWidth={1.5} />{link.label}</span>{external ? <ExternalLink size={14} /> : <ArrowHint />}</a> })}</div>
      </div>
    </section>
  )
}

function ArrowHint() { return <span aria-hidden="true" className="text-[var(--muted)]">↗</span> }
