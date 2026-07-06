import { useState } from 'react'
import ResumeModal from './ResumeModal'

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full">
      <nav
        className="w-full flex items-center justify-between gap-24 border-b border-white/60 bg-white/50 px-24 sm:px-48 lg:px-64 py-16 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/40"
      >
        <a href="#top" className="font-mono text-body-base tracking-tight">
          [S.G.]
        </a>
        <ul className="hidden sm:flex items-center gap-32">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-label-lg uppercase text-foreground-black hover:text-muted-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-8 border border-foreground-black px-16 py-10 hover:bg-foreground-black hover:text-surface-white transition-colors">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="text-label-lg uppercase"
            >
              Resume
            </button>
            <a
              href="/shiva_resume_offcampus.pdf"
              download
              aria-label="Download resume"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>
          </div>
          <a
            href="https://cal.com/shiva-gupta-pvzpkn/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-lg uppercase bg-foreground-black text-surface-white px-20 py-10 hover:bg-foreground-black/80 transition-colors animate-pulse"
          >
            Say Hello
          </a>
        </div>
      </nav>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  )
}
