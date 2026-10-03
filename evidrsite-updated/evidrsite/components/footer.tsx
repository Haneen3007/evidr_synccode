import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-connection"><i aria-hidden="true" /> EVIDR × Syn-Code / Partnership system</div>
        <div>From signal to shipped product / 2026</div>
        <Link href="/">Return to beginning</Link>
      </div>
    </footer>
  )
}
