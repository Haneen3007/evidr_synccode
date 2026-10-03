'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Partnership' },
  { href: '/evidr', label: 'EVIDR' },
  { href: '/syn-code', label: 'Syn-Code' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-shell">
        <Link className="nav-brand" href="/" aria-label="EVIDR and Syn-Code partnership home">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-lockup">EVIDR × Syn-Code</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} className={`nav-link ${pathname === link.href ? 'active' : ''}`} href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="nav-meta"><i aria-hidden="true" /> Connected / 01</div>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .25 }}>
            {links.map((link, index) => <motion.div key={link.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .06 }}><Link className={pathname === link.href ? 'active' : ''} href={link.href}>{link.label}</Link></motion.div>)}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
