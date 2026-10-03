'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'cyan' }) {
  return <span className={`eyebrow ${tone === 'cyan' ? 'text-[var(--cyan)]' : ''}`}>{children}</span>
}

export function ArrowLink({ href, children, primary = false, external = false }: { href: string; children: ReactNode; primary?: boolean; external?: boolean }) {
  return (
    <Link className={`btn ${primary ? 'btn-primary' : ''}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} data-magnetic>
      <span>{children}</span>
      <span className="btn-arrow"><ArrowUpRight size={14} strokeWidth={1.7} /></span>
    </Link>
  )
}

export function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="section-intro">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display">{title}</h2>
      </div>
      {children ? <div>{children}</div> : null}
    </div>
  )
}
