import type { ReactNode } from 'react'

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="w-full px-24 sm:px-48 lg:px-64 py-96 border-t border-border-grey">
      <div className="flex items-baseline gap-16 mb-64">
        <span className="font-mono text-label-sm text-muted-text">{index}</span>
        <h2 className="text-display-lg">{title}</h2>
      </div>
      {children}
    </section>
  )
}
