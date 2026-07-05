import Section from './Section'
import { achievements, profile } from '../data'

export default function Achievements() {
  return (
    <Section id="achievements" index="04" title="Achievements">
      <div className="flex flex-col gap-48 mb-64">
        {achievements.map((item) => (
          <div key={item.title} className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-16 sm:gap-40">
            <div>
              <p className="text-body-base">{item.title}</p>
              <p className="font-mono text-caption-xs text-muted-text mt-4">{item.role}</p>
            </div>
            <div>
              <p className="text-body-base text-muted-text">{item.detail}</p>
              <a
                href={item.link}
                className="inline-block mt-16 text-label-lg uppercase border-b border-foreground-black hover:text-muted-text hover:border-muted-text transition-colors"
              >
                Live Website ↗
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border-grey pt-32 grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-16 sm:gap-40">
        <p className="text-body-base">Education</p>
        <div>
          <p className="text-body-base text-muted-text">
            {profile.education.degree}, {profile.education.school}
          </p>
          <p className="font-mono text-caption-xs text-muted-text mt-4">
            {profile.education.detail} · {profile.education.period}
          </p>
        </div>
      </div>
    </Section>
  )
}
