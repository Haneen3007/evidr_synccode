'use client'

import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { processStages } from '@/src/data/companies'
import { Eyebrow, SectionIntro } from '@/components/ui'

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start .72', 'end .42'] })
  useMotionValueEvent(scrollYProgress, 'change', (value) => setActive(Math.min(4, Math.max(0, Math.floor(value * 5.4)))) )
  const progress = `${Math.min(100, (active / 4) * 100)}%`

  return (
    <section ref={ref} className="section-shell section-pad" aria-labelledby="process-title">
      <SectionIntro eyebrow="One connected process" title={<>From idea to <em className="text-[var(--cyan)] not-italic">digital product.</em></>}>
        <p className="section-intro p">A shared operating rhythm, designed so every decision creates momentum for the next one.</p>
      </SectionIntro>
      <div className="process-wrap" style={{ '--progress': progress } as React.CSSProperties}>
        <div className="process-track" aria-hidden="true"><div className="process-track-fill" /></div>
        <div className="process-grid">
          {processStages.map((stage, index) => (
            <div className={`process-step ${index <= active ? 'active' : ''}`} key={stage.label}>
              <div className="process-node" aria-hidden="true"><span className="mono text-[10px]">0{index + 1}</span></div>
              <strong>{stage.label}</strong>
              <small>{stage.sublabel}</small>
              <em>{stage.owner}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex items-center gap-3 text-[11px] text-[var(--muted)]"><Eyebrow tone="cyan">Scroll sequence</Eyebrow><span className="hidden h-px w-16 bg-[var(--line-strong)] sm:block" /> <span>Each stage hands the next one a clearer brief.</span></div>
    </section>
  )
}
