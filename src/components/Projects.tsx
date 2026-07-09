import Section from './Section'
import { projects } from '../data'

const CAMI_ITEMS = Array(8).fill(null)

export default function Projects() {
  return (
    <>
      <a
        href="https://github.com/shivaonkruger/Cross-agent-memory-engine"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CAMI, Cross Agent Memory Engine — under development, coming out very soon. View on GitHub."
        className="block w-full overflow-hidden bg-foreground-black border-y border-foreground-black"
      >
        <div className="flex w-max cami-marquee-track py-12">
          {[...CAMI_ITEMS, ...CAMI_ITEMS].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-16 whitespace-nowrap font-mono text-label-lg uppercase text-surface-white mx-24"
            >
              CAMI — Cross Agent Memory Engine
              <span className="text-muted-text">Under development · Coming out very soon</span>
              <span aria-hidden="true" className="text-muted-text">●</span>
            </span>
          ))}
        </div>
      </a>
      <Section id="projects" index="02" title="[Projects]">
        <div className="flex flex-col gap-80">
          {projects.map((project) => (
            <article key={project.name} className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-32 md:gap-48">
              <div>
                <h3 className="text-heading-sm mb-16">{project.name}</h3>
                <div className="flex flex-wrap gap-8 mb-16">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-caption-xs uppercase border border-border-grey px-8 py-4 text-muted-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-label-lg uppercase border-b border-foreground-black hover:text-muted-text hover:border-muted-text transition-colors"
                >
                  View on GitHub ↗
                </a>
              </div>
              <ul className="flex flex-col gap-20">
                {project.bullets.map((bullet) => (
                  <li key={bullet.label}>
                    <p className="text-body-base">
                      <span className="font-medium">{bullet.label}:</span>{' '}
                      <span className="text-muted-text">{bullet.detail}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
