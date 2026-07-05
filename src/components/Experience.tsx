import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Experience">
      {experience.map((job) => (
        <div key={job.company} className="mb-64 last:mb-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-8 mb-32">
            <h3 className="text-heading-sm">
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-text transition-colors"
              >
                {job.company}
              </a>
            </h3>
            <span className="text-label-lg uppercase text-muted-text">{job.location}</span>
          </div>
          <div className="flex flex-col gap-48">
            {job.roles.map((role) => (
              <div key={role.title} className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-16 sm:gap-40">
                <div>
                  <p className="text-body-base">{role.title}</p>
                  <p className="font-mono text-caption-xs text-muted-text mt-4">{role.period}</p>
                </div>
                <ul className="flex flex-col gap-16">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="text-body-base text-muted-text">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
