'use client'

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type ReactNode } from 'react'
import { AmbientBackground } from '@/components/visual-system'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

function MagneticCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40 })
  const springY = useSpring(y, { stiffness: 500, damping: 40 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const move = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY) }
    const over = (event: PointerEvent) => setHovering(Boolean((event.target as HTMLElement).closest('a, button, [data-magnetic]')))
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', over) }
  }, [x, y])

  return <><motion.span className="cursor-dot hidden md:block" style={{ left: springX, top: springY }} /><motion.span className={`cursor-ring hidden md:block ${hovering ? 'hovering' : ''}`} style={{ left: springX, top: springY }} /></>
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="site-shell">
      <AmbientBackground />
      <MagneticCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={pathname} className="site-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45, ease: 'easeOut' }}>
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
