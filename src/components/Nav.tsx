const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
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
        <a
          href="mailto:shivafy02@gmail.com"
          className="text-label-lg uppercase rounded-full bg-foreground-black text-surface-white px-20 py-10 hover:bg-foreground-black/80 transition-colors"
        >
          Say Hello
        </a>
      </nav>
    </header>
  )
}
