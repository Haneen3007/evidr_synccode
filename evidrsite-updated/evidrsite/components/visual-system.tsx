'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { companies, type CompanyId } from '@/src/data/companies'

export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient-orb one" />
      <span className="ambient-orb two" />
      <span className="ambient-orb three" />
      <span className="ambient-line" />
    </div>
  )
}

export function CompanyLogo({ company, showWordmark = false, size = 'normal' }: { company: CompanyId; showWordmark?: boolean; size?: 'normal' | 'large' }) {
  const item = companies[company]
  return (
    <div className={`logo-lockup ${size === 'large' ? 'scale-[1.08] origin-left' : ''}`}>
      <span className={`logo-surface ${company === 'evidr' ? 'evidr' : 'syn'}`}>
        <img src={item.logoSrc} alt={item.logoAlt} />
      </span>
      {showWordmark ? <span className="logo-word">{item.shortName}</span> : null}
    </div>
  )
}

export function PartnershipRail() {
  return (
    <div className="relative mx-auto mt-9 flex w-full max-w-[680px] items-center gap-4 px-2" aria-label="Animated connection between EVIDR and Syn-Code">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .35 }}>
        <CompanyLogo company="evidr" showWordmark />
      </motion.div>
      <div className="hero-connector" aria-hidden="true" />
      <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .48 }}>
        <CompanyLogo company="syn-code" showWordmark />
      </motion.div>
    </div>
  )
}

export function ValidationDiagram() {
  const labels = ['IDEA', 'ANALYSIS', 'VALIDATION', 'MVP']
  return (
    <div className="visual-frame" aria-label="EVIDR process visualization from idea to MVP">
      <div className="visual-core"><span /></div>
      <span className="visual-label l1">{labels[0]}</span>
      <span className="visual-label l2">{labels[1]}</span>
      <span className="visual-label l3">{labels[2]}</span>
      <span className="visual-label l4">{labels[3]}</span>
      <span className="visual-beam beam-1" /><span className="visual-beam beam-2" /><span className="visual-beam beam-3" />
      <span className="data-dot d1" /><span className="data-dot d2" /><span className="data-dot d3" />
    </div>
  )
}

export function EngineeringDiagram() {
  const nodes = [
    { x: '18%', y: '22%', label: 'INPUT' },
    { x: '74%', y: '22%', label: 'API' },
    { x: '50%', y: '50%', label: 'CORE' },
    { x: '20%', y: '77%', label: 'UI' },
    { x: '78%', y: '78%', label: 'SHIP' },
  ]
  return (
    <div className="visual-frame engineering-frame" aria-label="Syn-Code system architecture visualization">
      <svg className="absolute inset-[16%] h-[68%] w-[68%] overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
        <motion.path d="M18 22 L50 50 L74 22 M50 50 L20 77 L78 78 L74 22" fill="none" stroke="rgba(69,228,220,.58)" strokeWidth=".35" strokeDasharray="2 3" initial={{ pathLength: .34, opacity: .48 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.35, delay: .16 }} />
        <motion.path d="M18 22 L50 50 L78 78" fill="none" stroke="rgba(93,114,255,.55)" strokeWidth=".4" initial={{ pathLength: .26, opacity: .42 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.2, delay: .24 }} />
      </svg>
      {nodes.map((node, index) => (
        <motion.div key={node.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: node.x, top: node.y }} initial={{ opacity: .45, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .45, delay: .14 + index * .08 }}>
          <div className={`grid h-10 w-10 place-items-center rounded-full border ${node.label === 'CORE' ? 'border-[var(--cyan)] bg-[rgba(69,228,220,.16)] shadow-[0_0_26px_rgba(69,228,220,.2)]' : 'border-[var(--line-strong)] bg-[rgba(8,9,12,.88)]'}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] shadow-[0_0_12px_var(--cyan)]" />
          </div>
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] tracking-[.16em] text-[var(--muted)]">{node.label}</span>
        </motion.div>
      ))}
      <div className="absolute bottom-[16%] left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[9px] tracking-[.14em] text-[var(--muted)]"><ArrowRight size={12} className="text-[var(--cyan)]" /> DATA FLOW ACTIVE</div>
    </div>
  )
}
