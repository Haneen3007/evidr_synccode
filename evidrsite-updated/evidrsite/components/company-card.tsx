'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useState, type MouseEvent } from 'react'
import { companies, type CompanyId } from '@/src/data/companies'
import { CompanyLogo } from '@/components/visual-system'

export function CompanyCard({ company }: { company: CompanyId }) {
  const item = companies[company]
  const [spot, setSpot] = useState({ x: '50%', y: '0%' })
  const onMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setSpot({ x: `${((event.clientX - bounds.left) / bounds.width) * 100}%`, y: `${((event.clientY - bounds.top) / bounds.height) * 100}%` })
  }

  return (
    <div className="company-partner">
      <Link href={`/${company}`} className={`company-card ${company === 'evidr' ? 'evidr-card' : 'syn-card'}`} onMouseMove={onMove} style={{ '--mx': spot.x, '--my': spot.y } as React.CSSProperties}>
        <div className="card-topline"><span className="card-index mono">0{company === 'evidr' ? '1' : '2'} / PARTNER</span><span className="card-arrow"><ArrowUpRight size={16} /></span></div>
        <div className="card-logo-row"><CompanyLogo company={company} showWordmark /><span className="eyebrow">{item.descriptor}</span></div>
        <h3 className="display card-title">{item.role}</h3>
        <p className="card-desc">{item.statement}</p>
        <div className="card-bottomline"><span>{company === 'evidr' ? 'Discovery + validation' : 'Engineering + delivery'}</span><span>Open profile</span></div>
      </Link>
      <div className="company-card-links" aria-label={`${item.name} social media and contact links`}>
        {item.links.map((link) => {
          const external = link.href.startsWith('http')
          const label = link.kind === 'website' ? link.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : link.label
          return <a href={link.href} key={link.label} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={`${item.name} ${link.label}`}><span>{label}</span>{external && <ArrowUpRight size={14} aria-hidden="true" />}</a>
        })}
      </div>
    </div>
  )
}
