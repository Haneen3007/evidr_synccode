'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type Service = { number: string; title: string; description: string; detail?: string }

export function ServiceCards({ items, kind = 'services' }: { items: Service[]; kind?: 'services' | 'capabilities' }) {
  if (kind === 'capabilities') {
    return <div className="capability-grid">{items.map((item, index) => <motion.article key={item.title} className="capability-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6, delay: index * .08 }}><span className="service-number mono">{item.number} / MODULE</span><h3>{item.title}</h3><p>{item.description}</p></motion.article>)}</div>
  }
  return <div className="service-grid">{items.map((item, index) => <motion.article key={item.title} className="service-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .65, delay: index * .1 }}><span className="service-number mono">{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p>{item.detail ? <span className="service-detail">{item.detail}</span> : null}</div><ArrowUpRight className="service-arrow" size={20} strokeWidth={1.4} /></motion.article>)}</div>
}
