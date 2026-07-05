import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" index="03" title="[Skills]">
      <div className="flex flex-col gap-40">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-16 sm:gap-40"
          >
            <p className="text-body-base">{group.category}</p>
            <div className="flex flex-wrap gap-8">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-caption-xs uppercase border border-border-grey px-8 py-4 text-muted-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
