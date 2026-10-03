'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { ArrowLink, Eyebrow } from '@/components/ui'
import { PartnershipRail } from '@/components/visual-system'

export function PartnershipHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const logoShift = useTransform(scrollYProgress, [0, 1], [0, -42])
  const contentShift = useTransform(scrollYProgress, [0, 1], [0, -24])
  const contentOpacity = useTransform(scrollYProgress, [0, .8], [1, 0])

  return (
    <section ref={ref} className="hero hero-home" aria-labelledby="home-title">
      <motion.div className="hero-grid" style={{ y: contentShift, opacity: contentOpacity }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .9 }} className="hero-kicker"><span className="kicker-mark" /> Strategic partnership / 01</motion.div>
        <motion.div style={{ y: logoShift }}><PartnershipRail /></motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .46, delay: .12, ease: [0.22, 1, .36, 1] }}>
          <h1 id="home-title" className="display hero-title">The distance between <em>a signal</em> and a shipped product.</h1>
        </motion.div>
        <motion.p className="hero-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .48 }}>EVIDR finds the right opportunity. Syn-Code gives it a system. Together, we turn evidence into something people can use.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .62 }}>
          <ArrowLink href="#partnership" primary>Explore the partnership</ArrowLink>
          <ArrowLink href="/evidr">Meet EVIDR</ArrowLink>
        </motion.div>
        <div className="hero-aside"><span className="mono">SYSTEM / EVIDR × SYN-CODE</span><br />Two independent disciplines. One connected product path.</div>
        <div className="scroll-cue"><ArrowDown size={13} /> Scroll to trace the system</div>
      </motion.div>
    </section>
  )
}
