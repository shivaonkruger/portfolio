import Section from './Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
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
  )
}
